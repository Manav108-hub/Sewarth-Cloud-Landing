import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-8 border-b border-outline-variant/30 pb-4 uppercase">
            Privacy Policy (DPDP ACT 2023 COMPLIANT)
          </h1>

          <div className="space-y-8 text-on-surface-variant font-body-md leading-relaxed">
            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Information Collected</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Billing Information</li>
                <li>IP Address</li>
                <li>Usage Logs</li>
                <li>Support Communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Purpose of Processing</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account management</li>
                <li>Service delivery</li>
                <li>Billing</li>
                <li>Security monitoring</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">User Rights</h2>
              <p className="mb-2">Subject to applicable law, users may:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access personal data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Data Retention</h2>
              <p>Data shall be retained only as long as necessary for business, legal, security, and regulatory purposes.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Cross-Border Transfers</h2>
              <p>Data may be processed in India or other jurisdictions where <strong>SEWARTH CLOUD PVT LTD</strong> or its infrastructure partners operate.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Security Measures</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption</li>
                <li>Access Controls</li>
                <li>Monitoring Systems</li>
                <li>Backup Procedures</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
