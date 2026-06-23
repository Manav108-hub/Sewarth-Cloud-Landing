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

  // 1. Send Emails via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendDomain = process.env.RESEND_DOMAIN || "resend.dev";
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  try {
    if (resend) {
      const targetEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";
      const trimmedDomain = resendDomain.trim();
      const fromEmail = trimmedDomain.includes("@") ? trimmedDomain : `onboarding@${trimmedDomain}`;
      
      console.log(`[Resend] Sending emails. From: ${fromEmail}, Admin Target: ${targetEmail}, Customer Target: ${email}`);

      // Render HTML content
      const adminHtml = getAdminEmailHtml(name, email, phone, businessType, message);
      const customerHtml = getCustomerEmailHtml(name, businessType, message);

      // Send to Admin
      const adminResponse = await resend.emails.send({
        from: `Sewarth Cloud <${fromEmail}>`,
        to: targetEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: adminHtml,
      });
      console.log("[Resend] Admin Email Response:", JSON.stringify(adminResponse));

      // Send to Customer (Best Effort)
      const customerResponse = await resend.emails.send({
        from: `Sewarth Cloud <${fromEmail}>`,
        to: email,
        subject: `Thank you for contacting Sewarth Cloud`,
        html: customerHtml,
      });
      console.log("[Resend] Customer Email Response:", JSON.stringify(customerResponse));

      if (adminResponse.error) {
        console.error("[Resend] Admin Email API Error Details:", adminResponse.error);
        errorMsg += `Admin email failed: ${adminResponse.error.message}. `;
      } else {
        emailSuccess = true;
      }

      if (customerResponse.error) {
        console.error("[Resend] Customer Email API Error Details:", customerResponse.error);
        // We don't fail the whole submission if only the auto-reply fails, but we log it
      }
    } else {
      console.log("[Resend] API key missing (process.env.RESEND_API_KEY). Mocking email send.");
      emailSuccess = true;
    }
  } catch (error: any) {
    console.error("[Resend] Exception sending email:", error);
    errorMsg += `Email failed: ${error.message || error}. `;
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
      
      const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "new_query";
      console.log(`[WhatsApp] Sending message to ${adminPhone} using template "${templateName}" at URL: ${waUrl}`);

      const requestBody = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: adminPhone,
        type: "template",
        template: {
          name: templateName,
          language: {
            code: "en"
          },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name || "N/A" },
                { type: "text", text: email || "N/A" },
                { type: "text", text: phone || "N/A" },
                { type: "text", text: businessType || "N/A" },
                { type: "text", text: message || "N/A" }
              ]
            }
          ]
        },
        biz_opaque_callback_data: "contact_form_submission"
      };

      console.log("[WhatsApp] Request Payload:", JSON.stringify(requestBody, null, 2));

      const response = await fetch(waUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${waToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      
      console.log(`[WhatsApp] Response Status: ${response.status} ${response.statusText}`);
      const respText = await response.text();
      console.log("[WhatsApp] Response Body:", respText);

      if (!response.ok) {
        errorMsg += `WhatsApp failed with status ${response.status}. `;
      } else {
        waSuccess = true;
      }
    } else {
       console.log(`[WhatsApp] Missing configuration. Token present: ${!!waToken}, ID present: ${!!waPhoneNumberId}. Mocking WhatsApp send.`);
       waSuccess = true;
    }
  } catch (error: any) {
    console.error("[WhatsApp] Exception sending message:", error);
    errorMsg += `WhatsApp failed: ${error.message || error}. `;
  }

  if (emailSuccess && waSuccess) {
    return { success: true };
  } else {
    return { success: false, error: errorMsg || "Failed to send message." };
  }
}

function getAdminEmailHtml(name: string, email: string, phone: string, businessType: string, message: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Query Received</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 32px; }
    .lead { font-size: 16px; margin-bottom: 24px; color: #475569; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .details-table td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
    .details-table td.label { font-weight: 600; color: #64748b; width: 35%; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
    .details-table td.value { color: #0f172a; font-size: 15px; }
    .message-box { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
    .footer { background: #f1f5f9; text-align: center; padding: 16px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Query Received</h1>
    </div>
    <div class="content">
      <p class="lead">A visitor has submitted a new inquiry from the Sewarth Cloud Landing Page:</p>
      <table class="details-table">
        <tr>
          <td class="label">Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Business Type</td>
          <td class="value" style="text-transform: capitalize;">${businessType}</td>
        </tr>
      </table>
      <div style="font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Message</div>
      <div class="message-box">${message}</div>
    </div>
    <div class="footer">
      This is an automated notification from Sewarth Cloud Landing Page.
    </div>
  </div>
</body>
</html>`;
}

function getCustomerEmailHtml(name: string, businessType: string, message: string): string {
  const currentYear = new Date().getFullYear();
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>We have received your query - Sewarth Cloud</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
    .header .logo { font-size: 24px; font-weight: 700; color: #3b82f6; margin-bottom: 8px; letter-spacing: 0.5px; }
    .header h1 { margin: 0; font-size: 18px; font-weight: 500; color: #f1f5f9; }
    .content { padding: 32px; }
    .greeting { font-size: 20px; font-weight: 600; color: #0f172a; margin-bottom: 16px; }
    .body-text { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px; }
    .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .summary-title { font-weight: 600; color: #334155; font-size: 14px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .summary-item { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .summary-item strong { color: #1e293b; }
    .footer { background: #f1f5f9; text-align: center; padding: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .footer a { color: #3b82f6; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Sewarth Cloud</div>
      <h1>We have received your query</h1>
    </div>
    <div class="content">
      <div class="greeting">Hi ${name},</div>
      <p class="body-text">
        Thank you for reaching out to Sewarth Cloud! We have successfully received your query and our team is currently reviewing the details.
      </p>
      <p class="body-text">
        We understand your time is valuable and we will get back to you shortly with the best options tailored to your needs.
      </p>
      <div class="summary-card">
        <div class="summary-title">Your Submission Details</div>
        <div class="summary-item"><strong>Business Type:</strong> ${businessType.charAt(0).toUpperCase() + businessType.slice(1)}</div>
        <div class="summary-item"><strong>Your Message:</strong> "${message}"</div>
      </div>
      <p class="body-text" style="margin-bottom: 0;">
        If you have any additional details or urgent requirements, feel free to reply directly to this email.
      </p>
    </div>
    <div class="footer">
      © ${currentYear} Sewarth Cloud Pvt Ltd. All rights reserved.<br>
      <a href="https://sewarthcloud.in">Website</a> | <a href="mailto:info@sewarthcloud.in">Support</a>
    </div>
  </div>
</body>
</html>`;
}

