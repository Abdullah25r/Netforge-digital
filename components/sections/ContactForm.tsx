"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { CheckCircle, CaretDown, Check } from "@phosphor-icons/react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";

const GOALS = [
  { label: "New Website", value: "new-website" },
  { label: "Marketing Campaign", value: "marketing-campaign" },
  { label: "SEO", value: "seo" },
  { label: "Social Media", value: "social-media" },
  { label: "Full Retainer", value: "full-retainer" },
];
const BUDGETS = [
  { label: "Under AED 2,000", value: "under-2000" },
  { label: "AED 2,000–5,000", value: "2000-5000" },
  { label: "AED 5,000–10,000", value: "5000-10000" },
  { label: "AED 10,000+", value: "10000-plus" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [goal, setGoal] = useState(GOALS[0].value);
  const [budget, setBudget] = useState(BUDGETS[0].value);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      businessName: String(formData.get("businessName") ?? ""),
      email: String(formData.get("email") ?? ""),
      whatsappNumber: String(formData.get("whatsappNumber") ?? ""),
      primaryGoal: goal,
      monthlyBudget: budget,
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard className="p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <CheckCircle size={72} weight="fill" className="text-[var(--brand-cyan)] mb-6" />
            </motion.div>
            <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
            <p className="text-[var(--text-secondary)] max-w-xs">
              We&rsquo;ll respond within 24 hours via WhatsApp or email.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name">
                <input required name="fullName" type="text" className="form-input" placeholder="Your name" />
              </Field>
              <Field label="Business Name">
                <input required name="businessName" type="text" className="form-input" placeholder="Your company" />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email Address">
                <input required name="email" type="email" className="form-input" placeholder="you@company.com" />
              </Field>
              <Field label="WhatsApp Number">
                <input required name="whatsappNumber" type="tel" className="form-input" defaultValue="+971 " />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Primary Goal">
                <SelectField value={goal} onChange={setGoal} options={GOALS} />
              </Field>
              <Field label="Monthly Budget">
                <SelectField value={budget} onChange={setBudget} options={BUDGETS} />
              </Field>
            </div>

            <Field label="Tell us about your project">
              <textarea required name="message" rows={4} className="form-input resize-none" placeholder="What are you looking to build or grow?" />
            </Field>

            <MagneticButton type="submit" className="w-full justify-center mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message →"}
            </MagneticButton>
            {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
          </motion.form>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 0.9rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form-input:focus {
          border-color: var(--brand-cyan);
        }
        .form-input::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </GlassCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-[var(--text-secondary)] mb-2">{label}</span>
      {children}
    </label>
  );
}

function SelectField({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        data-cursor-hover
        className="form-input flex items-center justify-between w-full"
      >
        <Select.Value />
        <Select.Icon>
          <CaretDown size={14} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={6}
          className="glass-card bg-[var(--bg-overlay)] p-1 z-[70] overflow-hidden"
        >
          <Select.Viewport>
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                data-cursor-hover
                className="text-sm px-3 py-2.5 rounded-md flex items-center justify-between gap-2 outline-none cursor-pointer data-[highlighted]:bg-[var(--brand-cyan)]/10 data-[highlighted]:text-[var(--brand-cyan)]"
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={14} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
