import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ViewSiteModal({ liveUrl, projectName, accentColor = "bg-red-600" }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = () => {
    if (liveUrl && liveUrl !== "#") {
      window.open(liveUrl, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-8 py-4 ${accentColor} text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity shadow-lg`}
      >
        <ExternalLink className="w-5 h-5" />
        View Live Site
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
                  <h3 className="text-xl font-bold">Visit {projectName}</h3>
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}