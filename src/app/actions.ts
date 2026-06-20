"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const businessType = formData.get("businessType") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phone || !message) {
    return { success: false, error: "Please fill out all required fields." };
  }

  const content = `New Query from Sewarth Cloud Landing Page:
  
Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${businessType}

Message:
${message}`;

  let emailSuccess = false;
  let waSuccess = false;
  let errorMsg = "";

  // 1. Send Email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendDomain = process.env.RESEND_DOMAIN || "resend.dev";
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  try {
    if (resend) {
      await resend.emails.send({
        from: `Sewarth Cloud <onboarding@${resendDomain}>`,
        to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
        subject: `New Contact Form Submission from ${name}`,
        text: content,
      });
      emailSuccess = true;
    } else {
      console.log("Resend API key missing. Mocking email send.");
      emailSuccess = true;
    }
  } catch (error: any) {
    console.error("Error sending email via Resend:", error);
    errorMsg += "Email failed. ";
  }

  // 2. Send WhatsApp Message via Fortius API
  const waToken = process.env.WHATSAPP_API_TOKEN;
  const waPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  try {
    if (waToken && waPhoneNumberId) {
      const waUrl = `https://wafortius.in.net/V23.0/${waPhoneNumberId}/messages`;
      
      // Default to sending the message to the admin's WhatsApp number
      let adminPhone = process.env.ADMIN_WHATSAPP_NUMBER || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
      // Ensure the phone number has a country code. If it's a 10 digit Indian number, add '91'
      adminPhone = adminPhone.replace(/\D/g, ""); // Remove non-numeric chars like '+'
      if (adminPhone.length === 10) {
        adminPhone = "91" + adminPhone;
      }
      
      console.log("Sending WhatsApp message to:", adminPhone);

      const response = await fetch(waUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${waToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: adminPhone,
          type: "template",
          template: {
            name: process.env.WHATSAPP_TEMPLATE_NAME || "new_contact_query",
            language: {
              code: "en_US" // Change to "en" or "en_GB" depending on what you selected in Fortius
            },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: name },
                  { type: "text", text: email },
                  { type: "text", text: phone },
                  { type: "text", text: businessType },
                  { type: "text", text: message }
                ]
              }
            ]
          }
        }),
      });
      
      if (!response.ok) {
        const errText = await response.text();
        console.error("WhatsApp API Error:", errText);
        errorMsg += "WhatsApp failed. ";
      } else {
        waSuccess = true;
      }
    } else {
       console.log("WhatsApp API token missing. Mocking WhatsApp send.");
       waSuccess = true;
    }
  } catch (error: any) {
    console.error("Error sending WhatsApp message:", error);
    errorMsg += "WhatsApp failed. ";
  }

  if (emailSuccess || waSuccess) {
    return { success: true };
  } else {
    return { success: false, error: errorMsg || "Failed to send message." };
  }
}
