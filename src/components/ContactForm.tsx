"use client";

import { useState } from "react";
import { submitContactForm } from "../app/actions";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const businessType = formData.get("businessType") as string;
    const message = formData.get("message") as string;

    // Call server action
    const result = await submitContactForm(formData);

    setLoading(false);

    if (result.success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      form.reset();
    } else {
      setStatus({ type: "error", message: result.error || "Failed to send message." });
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {status && (
        <div className={`p-4 rounded-lg font-body-sm ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {status.message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface" htmlFor="name">Name</label>
          <input required name="name" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" id="name" placeholder="John Doe" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email</label>
          <input required name="email" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" id="email" placeholder="john@example.com" type="email" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface" htmlFor="phone">Phone Number</label>
          <input required name="phone" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" id="phone" placeholder="+1 234 567 890" type="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface" htmlFor="business-type">Business Type</label>
          <select required name="businessType" defaultValue="" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm appearance-none" id="business-type">
            <option disabled value="">Select an option</option>
            <option value="retail">Small Retail Business</option>
            <option value="startup">Start-ups</option>
            <option value="individual">Individual</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Message</label>
        <textarea required name="message" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm resize-none" id="message" placeholder="Tell us about your needs..." rows={4}></textarea>
      </div>
      <div className="flex justify-center sm:justify-start w-full mt-4">
        <button disabled={loading} className="bg-primary text-on-primary font-label-md text-label-md text-lg px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
          <div className="flex -space-x-2">
            <div className="bg-pure-white rounded-full p-1 shadow-sm flex items-center justify-center z-10 text-primary">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </div>
            <div className="bg-[#25D366] rounded-full p-1 shadow-sm flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[16px]">chat</span>
            </div>
          </div>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
