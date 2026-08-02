"use client";

import { motion } from "framer-motion";
import {
  Children,
  createContext,
  isValidElement,
  use,
  useId,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  handleTabListFocusCapture,
  handleTabListKeyDown,
  tabFocusClass,
  useTabSelection,
} from "./shared";

const INDICATOR_SPRING = {
  type: "spring",
  stiffness: 380,
  damping: 34,
  mass: 0.75,
};

const LABEL_TRANSITION = {
  duration: 0.28,
  ease: [0.32, 0.72, 0, 1],
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FluidTabsContext = createContext(null);
const FluidTabSlotContext = createContext(null);

function useFluidTabs() {
  const context = use(FluidTabsContext);
  if (!context) {
    throw new Error("FluidTabs primitives must be used within <FluidTabs>.");
  }
  return context;
}

function FluidTabSlot({ index, children }) {
  const value = useMemo(() => ({ index }), [index]);
  return (
    <FluidTabSlotContext.Provider value={value}>
      {children}
    </FluidTabSlotContext.Provider>
  );
}

function useFluidTabSlot() {
  const context = use(FluidTabSlotContext);
  if (!context) {
    throw new Error("FluidTabs.Tab must be a direct child of <FluidTabs.List>.");
  }
  return context;
}

function FluidTabsRoot({
  children,
  defaultActiveIndex = 0,
  activeIndex: activeIndexProp,
  onActiveIndexChange,
  className,
}) {
  const { activeIndex, setActiveIndex, focusedIndex, setFocusedIndex } = useTabSelection({
    defaultActiveIndex,
    activeIndex: activeIndexProp,
    onActiveIndexChange,
  });
  const indicatorLayoutId = `fluid-tab-indicator-${useId().replace(/:/g, "")}`;

  const rootContext = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      focusedIndex,
      setFocusedIndex,
      indicatorLayoutId,
    }),
    [activeIndex, setActiveIndex, focusedIndex, setFocusedIndex, indicatorLayoutId],
  );

  return (
    <FluidTabsContext.Provider value={rootContext}>
      <div className={cn("flex w-full items-center justify-center", className)}>
        {children}
      </div>
    </FluidTabsContext.Provider>
  );
}

function FluidTabsList({
  className,
  children,
  "aria-label": ariaLabel = "Tabs",
  onKeyDown,
  onFocusCapture,
  ...props
}) {
  const { activeIndex, setActiveIndex, setFocusedIndex } = useFluidTabs();
  const tabs = Children.toArray(children).filter(isValidElement);
  const count = tabs.length;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 150;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center justify-center w-full px-10 md:px-0">
      {/* Left Arrow - Mobile Only */}
      <button
        onClick={() => scroll('left')}
        className={cn(
          "absolute left-0 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-all duration-200 md:hidden",
          canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll tabs left"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      <nav
        aria-label={ariaLabel}
        className={cn("relative rounded-full bg-gray-200 p-1.5 shadow-sm w-full md:w-auto", className)}
        {...props}
      >
        <div
          ref={scrollRef}
          role="tablist"
          tabIndex={0}
          onFocusCapture={(event) => {
            onFocusCapture?.(event);
            handleTabListFocusCapture(event, activeIndex, setFocusedIndex);
          }}
          onKeyDown={(event) => {
            onKeyDown?.(event);
            if (!event.defaultPrevented) {
              handleTabListKeyDown(event, count, setActiveIndex, setFocusedIndex);
            }
          }}
          className="flex gap-1 overflow-x-auto scrollbar-hide md:overflow-visible"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab, index) => (
            <FluidTabSlot key={tab.key ?? index} index={index}>
              {tab}
            </FluidTabSlot>
          ))}
        </div>
      </nav>

      {/* Right Arrow - Mobile Only */}
      <button
        onClick={() => scroll('right')}
        className={cn(
          "absolute right-0 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 transition-all duration-200 md:hidden",
          canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll tabs right"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}

function FluidTabsIcon({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn("inline-flex shrink-0 empty:hidden [&_svg]:size-[18px]", className)}
      {...props}
    />
  );
}

function FluidTabsLabel({ className, ...props }) {
  return <span className={cn("whitespace-nowrap", className)} {...props} />;
}

function FluidTabsTab({
  className,
  children,
  label,
  onClick,
  onFocus,
  ...props
}) {
  const { activeIndex, setActiveIndex, setFocusedIndex, indicatorLayoutId } = useFluidTabs();
  const { index } = useFluidTabSlot();
  const isSelected = activeIndex === index;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      {...(label ? { "aria-label": label } : {})}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setActiveIndex(index);
        }
      }}
      onFocus={(event) => {
        onFocus?.(event);
        if (!event.defaultPrevented) {
          setFocusedIndex(index);
        }
      }}
      className={cn(
        tabFocusClass("rounded-full"),
        "relative z-10 flex items-center justify-center px-3 py-2.5 text-sm font-semibold",
        "motion-reduce:transition-none",
        "flex-1 md:flex-none min-w-[80px] md:min-w-fit",
        className,
      )}
      {...props}
    >
      {isSelected ? (
        <motion.span
          layoutId={indicatorLayoutId}
          className="absolute inset-0 block rounded-full bg-white shadow-sm"
          transition={INDICATOR_SPRING}
          aria-hidden
        />
      ) : null}
      <motion.span
        className="relative z-10 inline-flex items-center justify-center gap-2"
        animate={{ scale: isSelected ? 1 : 0.98 }}
        transition={LABEL_TRANSITION}
      >
        {children}
      </motion.span>
    </button>
  );
}

const FluidTabs = Object.assign(FluidTabsRoot, {
  List: FluidTabsList,
  Tab: FluidTabsTab,
  Icon: FluidTabsIcon,
  Label: FluidTabsLabel,
});

export default FluidTabs;