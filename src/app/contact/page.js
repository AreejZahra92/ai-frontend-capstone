"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full">
      <PageHeader
        title="Contact Us"
        description="Got any questions, feedback, or inquiries? Get in touch with our team."
      />

      <Card className="border-t-4 border-t-brand-blue">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-200">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
                placeholder="Jane Doe"
                className={`block w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-slate-350 focus:border-brand-blue dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 font-medium mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
                placeholder="jane.doe@example.com"
                className={`block w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-slate-350 focus:border-brand-blue dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-slate-200">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === "sending"}
              placeholder="Inquiry about capstone features"
              className={`block w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                errors.subject ? "border-red-500 focus:border-red-500" : "border-slate-350 focus:border-brand-blue dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              }`}
            />
            {errors.subject && <p className="text-xs text-red-500 font-medium mt-1">{errors.subject}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              placeholder="Tell us what you think..."
              className={`block w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                errors.message ? "border-red-500 focus:border-red-500" : "border-slate-350 focus:border-brand-blue dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              }`}
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 font-medium mt-1">{errors.message}</p>}
          </div>

          {status === "success" && (
            <div className="flex items-center space-x-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 p-4 text-emerald-800 dark:text-emerald-300" role="status">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-sm font-medium">Message sent successfully! We will get back to you shortly.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center space-x-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 p-4 text-rose-800 dark:text-rose-300" role="alert">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span className="text-sm font-medium">Failed to send message. Please try again.</span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-sm hover:shadow dark:bg-brand-blue dark:hover:bg-brand-blue-hover disabled:bg-brand-blue/50"
            >
              {status === "sending" && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
