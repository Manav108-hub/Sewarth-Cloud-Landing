"use server";

import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
// If not set, we'll log it (for testing purposes)
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const businessType = formData.get("businessType") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phone || !message) {
    return { success: false, error: "Please fill out all required fields." };
  }

  const emailContent = `
    New Query from Sewarth Cloud Landing Page:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Business Type: ${businessType}
    
    Message:
    ${message}
  `;

  try {
    if (resend) {
      await resend.emails.send({
        from: "Sewarth Cloud <onboarding@resend.dev>", // Or your verified domain
        to: process.env.CONTACT_EMAIL || "delivered@resend.dev", // Replace with your email
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
      });
      return { success: true };
    } else {
      // Mock for when API key is missing
      console.log("Resend API key missing. Mocking email send:");
      console.log(emailContent);
      return { success: true, mock: true };
    }
  } catch (error: any) {
    console.error("Error sending email via Resend:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
