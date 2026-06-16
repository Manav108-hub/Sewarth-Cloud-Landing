import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-6 border-b border-outline-variant/30 pb-4">
            TERMS & CONDITIONS
          </h1>
          
          <p className="font-body-lg text-on-surface-variant mb-8 italic">
            Welcome to Sewarth Cloud. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <div className="space-y-8 text-on-surface-variant font-body-md leading-relaxed">
            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">1. Acceptance of Terms</h2>
              <p>By using Sewarth Cloud services including cloud storage, hosting, backup services, and SaaS applications, you agree to comply with these Terms and Conditions.</p>
              <p>If you do not agree with these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">2. Services</h2>
              <p className="mb-2">Sewarth Cloud provides the following services:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Cloud storage solutions</li>
                <li>Data backup services</li>
                <li>Cloud hosting services</li>
                <li>SaaS software access</li>
              </ul>
              <p>We reserve the right to modify or discontinue services at any time.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">3. User Responsibilities</h2>
              <p className="mb-2">Users agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Provide accurate account information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Use the services only for lawful purposes</li>
                <li>Avoid storing illegal, harmful, or malicious content</li>
              </ul>
              <p>Users are solely responsible for the content they store on Sewarth Cloud.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">4. Account Security</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. Sewarth Cloud is not liable for losses caused by unauthorized account access.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">5. Payment & Billing</h2>
              <p>Some services may require subscription payments. Payments must be made according to the selected pricing plan.</p>
              <p>Failure to pay may result in suspension or termination of services.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">6. Service Availability</h2>
              <p>While we aim to provide reliable services with high uptime, Sewarth Cloud does not guarantee uninterrupted access due to maintenance, technical issues, or external factors.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">7. Limitation of Liability</h2>
              <p>Sewarth Cloud will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">8. Termination</h2>
              <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">9. Changes to Terms</h2>
              <p>We may update these terms periodically. Continued use of our services constitutes acceptance of the updated terms.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
