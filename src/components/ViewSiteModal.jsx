import { ExternalLink, X, MessageCircle, Mail, AtSign } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Custom Instagram icon since lucide-react doesn't have it
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// Contact options data
const contactOptions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    getUrl: () => "https://wa.me/2347051496023", // Replace with your WhatsApp number
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
    getUrl: () => "https://www.instagram.com/auroracreativedesign", // Replace with your handle
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    getUrl: () => "mailto:Soaurora33@gmail.com", // Replace with your email
  },
];

export default function ViewSiteModal({
  liveUrl,
  projectName,
  accentColor = "bg-red-600",
  mode = "redirect", // "redirect" | "contact"
  triggerText = "View Live Site",
  triggerIcon: TriggerIcon = ExternalLink,
  onTriggerClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = () => {
    if (liveUrl && liveUrl !== "#") {
      window.open(liveUrl, "_blank");
    }
    setIsOpen(false);
  };

  const handleContact = (option) => {
    window.open(option.getUrl(), "_blank");
    setIsOpen(false);
  };

  const handleTrigger = () => {
    if (onTriggerClick) {
      onTriggerClick();
      return;
    }
    setIsOpen(true);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleTrigger}
        className={`inline-flex items-center gap-2 px-8 py-4 ${accentColor} text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity shadow-lg`}
      >
        <TriggerIcon className="w-5 h-5" />
        {triggerText}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close modal"
              className="absolute inset-0 cursor-pointer border-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.9, opacity: 0, rotateY: "90deg" }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                },
              }}
              exit={{ scale: 0.9, opacity: 0, rotateY: "-90deg" }}
              className="relative z-10 w-full max-w-md cursor-default overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Header with gradient */}
              <div className={`${accentColor} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">
                    {mode === "contact" ? "Get in Touch" : `Visit ${projectName}`}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Body */}
              <div className="p-6 space-y-4">
                {mode === "contact" ? (
                  // Contact Mode — Show options
                  <>
                    <p className="text-gray-600 text-center">
                      Choose how you'd like to reach out to Aurora Creative.
                    </p>
                    
                    <div className="space-y-3 pt-2">
                      {contactOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleContact(option)}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl ${option.color} ${option.hoverColor} text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]`}
                          >
                            {typeof Icon === 'function' && Icon.prototype ? (
                              <Icon className="w-6 h-6" />
                            ) : (
                              <Icon />
                            )}
                            <span>Chat on {option.label}</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                          </button>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  // Redirect Mode — Original behavior
                  <>
                    <p className="text-gray-600 text-center">
                      You are about to leave Aurora Creative and visit the live {projectName} website.
                    </p>
                    
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleRedirect}
                        className={`flex-1 py-3 rounded-xl ${accentColor} text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Continue
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}