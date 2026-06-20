import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-2">
            SEWARTH CLOUD PVT LTD - LEGAL DOCUMENT SUITE
          </h1>
          <div className="text-sm text-on-surface-variant mb-8 border-b border-outline-variant/30 pb-4">
            *All policies are subject to amendment without prior notice. Continued use of SEWARTH CLOUD PVT LTD services constitutes acceptance of the latest published versions.*
          </div>
          
          <div className="space-y-10 text-on-surface-variant font-body-md leading-relaxed">
            
            {/* 1. TERMS OF SERVICE */}
            <section>
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">1. TERMS OF SERVICE (TOS)</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.1 Introduction</h3>
                  <p>These Terms of Service govern the use of all services provided by Sewarth Cloud including VPS Hosting, Dedicated Servers, Cloud Storage, Cloud Backup, Object Storage, Website Hosting, Domain Services, and related infrastructure solutions.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.2 Eligibility</h3>
                  <p>Users must be at least 18 years of age and legally capable of entering into binding contracts under Indian law.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.3 Account Registration</h3>
                  <p>Users must provide accurate and complete information. <strong>SEWARTH CLOUD PVT LTD</strong> reserves the right to verify customer identity.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.4 Customer Responsibilities</h3>
                  <p className="mb-2">Customers are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Server administration</li>
                    <li>Software licensing</li>
                    <li>Data backups</li>
                    <li>Security configurations</li>
                    <li>Compliance with laws</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.5 Service Provision</h3>
                  <p>Services are provided on an "as available" basis and may be modified, suspended, or discontinued.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.6 Suspension & Termination</h3>
                  <p className="mb-2">Accounts may be suspended for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Non-payment</li>
                    <li>Abuse complaints</li>
                    <li>Illegal activities</li>
                    <li>Security threats</li>
                    <li>AUP violations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.7 Limitation of Liability</h3>
                  <p>Total liability shall not exceed fees paid during the previous thirty (30) days for the affected service.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">1.8 Governing Law</h3>
                  <p>Governed by Indian law with exclusive jurisdiction in Lucknow, Uttar Pradesh, India.</p>
                </div>
              </div>
            </section>

            {/* 3. AUP */}
            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">3. ACCEPTABLE USE POLICY (AUP)</h2>
              <p className="mb-4">Customers shall NOT use services for:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">Illegal Activities</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fraud</li>
                    <li>Identity theft</li>
                    <li>Money laundering</li>
                    <li>Cybercrime</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">Network Abuse</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Port scanning</li>
                    <li>DDoS attacks</li>
                    <li>Botnets</li>
                    <li>Network flooding</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">Content Violations</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Child exploitation material</li>
                    <li>Terrorism-related content</li>
                    <li>Hate speech prohibited by law</li>
                    <li>Copyright infringement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">Email & Crypto Abuse</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Spam or Bulk unsolicited email</li>
                    <li>Email spoofing</li>
                    <li>Fraudulent mining operations</li>
                    <li>Illegal token activities</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 font-semibold text-error">Violation may result in immediate suspension without refund.</p>
            </section>

            {/* 4. REFUND & CANCELLATION */}
            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">4. REFUND & CANCELLATION POLICY</h2>
              <div className="space-y-4">
                <p><strong>VPS & Dedicated Servers:</strong> No refunds after provisioning unless required by law.</p>
                <p><strong>Shared Hosting:</strong> Eligible for refund within seven (7) days of initial purchase unless abused.</p>
                <p><strong>Domain Registrations:</strong> Non-refundable after registration.</p>
                <p><strong>Cancellation:</strong> Customers may cancel at any time through the customer portal.</p>
                <p><strong>Chargebacks:</strong> Fraudulent chargebacks may result in account termination.</p>
              </div>
            </section>

            {/* 5. SLA */}
            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">5. SERVICE LEVEL AGREEMENT (SLA)</h2>
              <div className="space-y-4">
                <p><strong>Network Availability:</strong> Target uptime: 99.9% per calendar month.</p>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">Exclusions:</h3>
                  <p className="mb-2">Downtime resulting from:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scheduled maintenance</li>
                    <li>DDoS attacks</li>
                    <li>Customer misconfiguration</li>
                    <li>Third-party failures</li>
                    <li>Force majeure</li>
                  </ul>
                </div>
                <p><strong>Service Credits:</strong> Where applicable, service credits may be issued according to published SLA schedules.</p>
                <p><strong>No Cash Refunds:</strong> SLA remedies are limited to service credits unless otherwise required by law.</p>
              </div>
            </section>

            {/* 6. ABUSE & 7. COPYRIGHT */}
            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">6. ABUSE REPORTING & 7. COPYRIGHT POLICY</h2>
              <div className="space-y-4">
                <p>Abuse reports may be submitted to: <a href="mailto:abuse@sewarthcloud.com" className="text-primary underline">abuse@sewarthcloud.com</a></p>
                <p>Reports should include IP Address, Date & Time, Evidence, and Description of the incident.</p>
                <p>Sewarth Cloud reserves the right to investigate, suspend, restrict, or terminate accounts where abuse is reasonably suspected.</p>
                <h3 className="font-semibold text-on-surface mt-4 mb-1">Copyright / Takedown Policy:</h3>
                <p><strong>SEWARTH CLOUD PVT LTD</strong> respects intellectual property rights. Copyright owners may submit notices containing ownership details, description of infringing content, URL or IP address involved, and contact information. Counter-notices may be submitted where content has been removed in error. Repeated infringement may result in account termination.</p>
              </div>
            </section>

            {/* 8. DPA & 9. KYC */}
            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">8. DATA PROCESSING AGREEMENT (DPA)</h2>
              <div className="space-y-4">
                <p><strong>Roles:</strong> Customer = Data Controller | Sewarth Cloud = Data Processor</p>
                <p><strong>Processing Activities:</strong> Storage, Transmission, Backup, Hosting</p>
                <p><strong>Security Measures:</strong> Encryption, Access Controls, Audit Logging, Infrastructure Monitoring</p>
                <p><strong>Confidentiality:</strong> Personnel with access to customer data shall be subject to confidentiality obligations.</p>
                <p><strong>Sub-Processors:</strong> Third-party infrastructure providers may be used where necessary for service delivery.</p>
              </div>
            </section>

            <section className="border-t border-outline-variant/30 pt-8">
              <h2 className="font-headline-sm text-headline-md text-on-surface mb-4">9. KYC & VERIFICATION POLICY</h2>
              <div className="space-y-4">
                <p>To comply with legal obligations and prevent abuse, <strong>SEWARTH CLOUD PVT LTD</strong> may require identity verification before activating certain services.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-on-surface mb-1">Verification Documents</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Individuals:</strong> PAN Card, Aadhaar (masked), Passport, Driving License</li>
                      <li><strong>Businesses:</strong> GST Certificate, Certificate of Incorporation, PAN, Authorized Signatory Proof</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-surface mb-1">Verification Triggers</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>VPS Hosting & Dedicated Servers</li>
                      <li>High-risk Orders & Bulk Purchases</li>
                      <li>Abuse Investigations</li>
                    </ul>
                  </div>
                </div>
                <p><strong>Failure to Verify:</strong> May result in order cancellation, service suspension, or refund processing subject to company policy.</p>
                <p><strong>Record Retention:</strong> Verification records may be retained in accordance with legal and regulatory requirements.</p>
              </div>
            </section>

            {/* Legal Notice */}
            <section className="bg-surface-container p-6 rounded-2xl mt-8">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">CONTACT INFORMATION</h2>
              <p>For legal inquiries, abuse complaints, or privacy matters: <a href="mailto:sewarthcloud@gmail.com" className="text-primary underline">sewarthcloud@gmail.com</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
