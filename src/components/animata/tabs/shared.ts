import { type FocusEvent, type KeyboardEvent, useCallback, useState } from "react";

// Simple cn utility (replace with your own if you have one)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Visible focus ring — use with a matching border-radius class. */
export function tabFocusClass(radiusClass) {
  return cn(
    radiusClass,
    "outline-none focus-visible:z-10",
    "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  );
}

export function useTabSelection({
  defaultActiveIndex = 0,
  activeIndex: activeIndexProp,
  onActiveIndexChange,
}) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultActiveIndex);
  const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(null);
  const activeIndex = activeIndexProp ?? uncontrolledIndex;
  const focusedIndex = keyboardFocusIndex ?? (activeIndex >= 0 ? activeIndex : 0);

  const setActiveIndex = useCallback(
    (index) => {
      onActiveIndexChange?.(index);
      if (activeIndexProp === undefined) {
        setUncontrolledIndex(index);
      }
      setKeyboardFocusIndex(null);
    },
    [activeIndexProp, onActiveIndexChange],
  );

  const setFocusedIndex = useCallback((index) => {
    setKeyboardFocusIndex(index);
  }, []);

  return { activeIndex, setActiveIndex, focusedIndex, setFocusedIndex };
}

export function focusTabInList(tablist, index) {
  queueMicrotask(() => {
    tablist.querySelectorAll('[role="tab"]')[index]?.focus();
  });
}

export function handleTabListFocusCapture(
  event,
  activeIndex,
  setFocusedIndex,
) {
  const related = event.relatedTarget;
  if (related && event.currentTarget.contains(related)) {
    return;
  }
  const index = activeIndex >= 0 ? activeIndex : 0;
  setFocusedIndex(index);
  focusTabInList(event.currentTarget, index);
}

/** Manual activation: arrows move focus; Enter / Space select the focused tab. */
export function handleTabListKeyDown(
  event,
  count,
  setActiveIndex,
  setFocusedIndex,
) {
  if (count < 1) {
    return;
  }

  const tablist = event.currentTarget;
  const tabs = tablist.querySelectorAll('[role="tab"]');
  const target = event.target;
  const currentTab = target.closest('[role="tab"]');

  if (!currentTab || !tablist.contains(currentTab)) {
    return;
  }

  const currentIndex = Array.from(tabs).indexOf(currentTab);
  if (currentIndex === -1) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveIndex(currentIndex);
    setFocusedIndex(currentIndex);
    return;
  }

  if (count < 2) {
    return;
  }

  let next = null;
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      next = (currentIndex + 1) % count;
      break;
    case "ArrowLeft":
    case "ArrowUp":
      next = (currentIndex - 1 + count) % count;
      break;
    case "Home":
      next = 0;
      break;
    case "End":
      next = count - 1;
      break;
    default:
      return;
  }

  event.preventDefault();
  setFocusedIndex(next);
  focusTabInList(tablist, next);
}