import { submitContactForm } from "./src/app/actions";

async function run() {
  const formData = new FormData();
  formData.append("name", "Test User");
  formData.append("email", "test@example.com");
  formData.append("phone", "+1234567890");
  formData.append("businessType", "startup");
  formData.append("message", "This is a test message to verify the API connections.");

  console.log("Submitting form...");
  const result = await submitContactForm(formData);
  console.log("Result:", result);
}

run();
