import { submitContactForm } from "./src/app/actions";

async function run() {
  const waToken = process.env.WHATSAPP_API_TOKEN;
  const waPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const adminPhone = "917898226121";

  console.log("Testing WA Template to:", adminPhone);
  
  const waUrl = `https://wafortius.in.net/V23.0/${waPhoneNumberId}/messages`;
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
        name: "appointment_confirmed",
        language: {
          code: "en_US"
        },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: "Test Name" },
              { type: "text", text: "Today" },
              { type: "text", text: "10:00 AM" },
              { type: "text", text: "Dr. Smith" }
            ]
          }
        ]
      }
    }),
  });
  
  if (!response.ok) {
    console.error("WhatsApp API Error:", await response.text());
  } else {
    console.log("Success:", await response.json());
  }
}

run();
