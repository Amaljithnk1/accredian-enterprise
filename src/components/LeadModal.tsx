"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  phone: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  workEmail: "",
  companyName: "",
  teamSize: "",
  phone: "",
  message: "",
};

export default function LeadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (!form.fullName.trim()) newErrors.fullName = true;
    if (!form.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail))
      newErrors.workEmail = true;
    if (!form.companyName.trim()) newErrors.companyName = true;
    if (!form.teamSize) newErrors.teamSize = true;
    if (!form.phone.trim()) newErrors.phone = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialForm);
      }
    } catch {
      // Handle error silently
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setErrors({});
    onClose();
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur border text-sm text-heading placeholder:text-body/40 outline-none transition-all focus:ring-2 focus:ring-accent/40 ${
      errors[field] ? "border-red-400 ring-2 ring-red-200" : "border-white/30"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-accent/10 transition-colors text-heading/60 hover:text-heading cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {success ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl mb-6"
                >
                  🦋
                </motion.div>
                <h3 className="text-2xl font-bold text-heading mb-3">
                  Thank You!
                </h3>
                <p className="text-body/70">
                  We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="btn-glow mt-6"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              /* Form */
              <>
                <h3 className="text-2xl font-bold text-heading mb-1">
                  Enquire Now
                </h3>
                <p className="text-sm text-body/60 mb-6">
                  Tell us about your enterprise learning needs
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      className={inputClass("fullName")}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Work Email *"
                      value={form.workEmail}
                      onChange={(e) =>
                        setForm({ ...form, workEmail: e.target.value })
                      }
                      className={inputClass("workEmail")}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company Name *"
                      value={form.companyName}
                      onChange={(e) =>
                        setForm({ ...form, companyName: e.target.value })
                      }
                      className={inputClass("companyName")}
                    />
                  </div>

                  <div>
                    <select
                      value={form.teamSize}
                      onChange={(e) =>
                        setForm({ ...form, teamSize: e.target.value })
                      }
                      className={inputClass("teamSize")}
                    >
                      <option value="">Team Size *</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className={inputClass("phone")}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Message (optional)"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClass("message")} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-glow w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
