import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-8 border-b border-outline-variant/30 pb-4">
            PRIVACY POLICY
          </h1>

          <div className="space-y-8 text-on-surface-variant font-body-md leading-relaxed">
            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">1. Data Protection</h2>
              <p className="mb-2">We implement appropriate security measures to protect your data including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Secure cloud infrastructure</li>
                <li>Data encryption</li>
                <li>Access control systems</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">2. Data Sharing</h2>
              <p className="mb-2">Sewarth Cloud does not sell or rent user data. Information may be shared only when:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Required by law</li>
                <li>Necessary to provide services</li>
                <li>To protect our legal rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">3. Cookies</h2>
              <p>Our website may use cookies to enhance user experience and analyze website performance.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">4. Policy Updates</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
