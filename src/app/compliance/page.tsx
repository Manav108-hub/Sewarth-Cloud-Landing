import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Compliance() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-8 border-b border-outline-variant/30 pb-4">
            LEGAL INFORMATION
          </h1>

          <div className="space-y-10 text-on-surface-variant font-body-md leading-relaxed">
            
            <section className="bg-surface-container-low p-6 rounded-2xl">
              <p className="mb-1"><span className="font-semibold text-on-surface">Company Name:</span> Sewarth Cloud Pvt Ltd</p>
              <p className="mb-4"><span className="font-semibold text-on-surface">Service Type:</span> Cloud Storage & Cloud Services Provider</p>
              <p>Sewarth Cloud provides cloud-based technology services including data storage, hosting, backup solutions, and SaaS software.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Intellectual Property</h2>
              <p className="mb-2">All content on the Sewarth Cloud website including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Logos</li>
                <li>Text</li>
                <li>Design</li>
                <li>Graphics</li>
                <li>Software</li>
              </ul>
              <p>is the intellectual property of Sewarth Cloud and may not be copied or reproduced without permission.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">Governing Law</h2>
              <p>These terms and policies shall be governed by the laws of India.</p>
              <p>Any disputes related to Sewarth Cloud services shall fall under the jurisdiction of the appropriate courts in India.</p>
            </section>

            <section className="border-t border-outline-variant/30 pt-8 mt-8">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase tracking-wide">Disclaimer</h2>
              <p className="text-sm">
                Services provided "as-is" without warranties. Sewarth Cloud is not liable for data loss by external factors, downtime beyond 99.9% uptime SLA, or third-party integrations. Users must maintain login security and comply with Indian laws (IT Act 2000). No refunds after 7 days; cancel anytime. Links to external sites are user responsibility. Pricing/terms subject to change with 30-day notice.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
