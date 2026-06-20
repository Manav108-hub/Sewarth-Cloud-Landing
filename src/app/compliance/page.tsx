import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Compliance() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-12 max-w-4xl mx-auto flex-grow min-h-screen">
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="font-headline-lg text-headline-xl text-primary mb-2">
            CLOUD HOSTING & VPS SERVICES DISCLAIMER
          </h1>
          <div className="text-sm text-on-surface-variant mb-8 border-b border-outline-variant/30 pb-4">
            *Last Updated: [20/06/2026]*
          </div>

          <div className="space-y-10 text-on-surface-variant font-body-md leading-relaxed">
            
            <section className="bg-surface-container-low p-6 rounded-2xl">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">IMPORTANT LEGAL NOTICE</h2>
              <p className="mb-4">
                <strong>SEWARTH CLOUD PVT LTD.</strong> provides Infrastructure-as-a-Service (IaaS), Virtual Private Servers (VPS), Dedicated Servers, Cloud Storage, Backup Services, Web Hosting, Network Services, and related cloud computing solutions.
              </p>
              <p>
                By purchasing, accessing, or using any <strong>SEWARTH CLOUD PVT LTD</strong> service, you agree to this Disclaimer, Terms of Service, Privacy Policy, Acceptable Use Policy, and all applicable laws of India.
              </p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">NO WARRANTY</h2>
              <p className="mb-2">All services are provided on an "AS IS", "AS AVAILABLE", and "BEST EFFORTS" basis. <strong>SEWARTH CLOUD PVT LTD</strong> makes no representation or warranty, express or implied, regarding:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Continuous service availability</li>
                <li>Uninterrupted network connectivity</li>
                <li>Data integrity</li>
                <li>Server performance</li>
                <li>Error-free operation</li>
                <li>Compatibility with customer applications</li>
                <li>Security against all cyber threats</li>
              </ul>
              <p>No guarantee is provided that services will be free from interruptions, delays, outages, malware, vulnerabilities, or unauthorized access.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">CUSTOMER RESPONSIBILITY</h2>
              <p className="mb-2">Customers are solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Operating systems installed on VPS or dedicated servers</li>
                <li>Software licensing compliance</li>
                <li>Application security</li>
                <li>Firewall configuration</li>
                <li>User account management</li>
                <li>Data backup and recovery</li>
                <li>Password security</li>
                <li>Regulatory compliance</li>
              </ul>
              <p><strong>SEWARTH CLOUD PVT LTD</strong> does not manage customer servers unless expressly agreed under a Managed Services Agreement. Customers retain full responsibility for all content, software, databases, and activities hosted on their infrastructure.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">DATA LOSS DISCLAIMER</h2>
              <p className="mb-2">While <strong>SEWARTH CLOUD PVT LTD</strong> may offer backup services, customers must maintain independent backups of all critical data. We shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Data corruption or deletion</li>
                <li>Storage or Backup failures</li>
                <li>Ransomware attacks</li>
                <li>User errors or Accidental formatting</li>
                <li>Software or Hardware malfunctions</li>
              </ul>
              <p className="font-semibold">Recovery of lost data is not guaranteed.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">SERVICE AVAILABILITY</h2>
              <p className="mb-2"><strong>SEWARTH CLOUD PVT LTD</strong> targets high service availability; however, uptime targets are operational goals and not legally guaranteed unless expressly stated in a separate written Service Level Agreement (SLA). Service interruptions may occur due to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scheduled or Emergency maintenance</li>
                <li>Hardware replacement or Network congestion</li>
                <li>Cybersecurity incidents or Power failures</li>
                <li>Internet backbone issues or Datacenter incidents</li>
                <li>Government actions or Force majeure events</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">PROHIBITED ACTIVITIES</h2>
              <p className="mb-2">Customers shall not use <strong>SEWARTH CLOUD PVT LTD</strong> infrastructure for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Spam distribution or Phishing campaigns</li>
                <li>Malware hosting or Botnets</li>
                <li>DDoS attacks or Cryptocurrency fraud</li>
                <li>Child exploitation material or Terrorist content</li>
                <li>Illegal gambling or Intellectual property infringement</li>
                <li>Unauthorized penetration testing</li>
                <li>Any activity prohibited by Indian law</li>
              </ul>
              <p className="font-semibold text-error">Accounts involved in prohibited activities may be suspended immediately without notice.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">THIRD-PARTY INFRASTRUCTURE</h2>
              <p><strong>SEWARTH CLOUD PVT LTD</strong> may utilize third-party datacenters, carriers, network providers, software vendors, payment processors, and infrastructure partners. We shall not be liable for outages, delays, or losses arising from third-party infrastructure failures.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">LIMITATION OF LIABILITY</h2>
              <p className="mb-2">To the maximum extent permitted under applicable law, <strong>SEWARTH CLOUD PVT LTD</strong> shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Loss of profits, business opportunities, or revenue</li>
                <li>Reputation damage or Business interruption</li>
                <li>Indirect, Consequential, or Punitive damages</li>
              </ul>
              <p>The total aggregate liability of <strong>SEWARTH CLOUD PVT LTD</strong> shall not exceed the amount paid by the customer for the affected service during the preceding thirty (30) days.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">SECURITY DISCLAIMER</h2>
              <p className="mb-2"><strong>SEWARTH CLOUD PVT LTD</strong> employs commercially reasonable security controls; however, no system can be guaranteed to be completely secure. Customers acknowledge that cyber threats including Hacking, Malware, Ransomware, Zero-day exploits, DDoS attacks, and Unauthorized access may occur despite reasonable precautions.</p>
              <p>We shall not be liable for damages resulting from such incidents unless directly caused by proven gross negligence.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">INTELLECTUAL PROPERTY & LAW ENFORCEMENT</h2>
              <p className="mb-2">Customers are solely responsible for ensuring that hosted content does not infringe Copyrights, Trademarks, Patents, Trade secrets, or Proprietary rights. We reserve the right to remove or disable content upon receipt of valid legal complaints or governmental directives.</p>
              <p><strong>SEWARTH CLOUD PVT LTD</strong> may suspend, restrict, disclose, or terminate services where required by Court Orders, Government Directives, Law Enforcement Agencies, or Regulatory Authorities in accordance with applicable Indian laws.</p>
            </section>

            <section>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">GOVERNING LAW</h2>
              <p className="mb-2">This Disclaimer shall be governed by the laws of India, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>Information Technology Act, 2000</li>
                <li>Digital Personal Data Protection Act, 2023</li>
                <li>Indian Contract Act, 1872</li>
                <li>Consumer Protection Act, 2019</li>
              </ul>
              <p>All disputes shall be subject to the exclusive jurisdiction of courts located in Lucknow, Uttar Pradesh, India.</p>
            </section>

            <section className="bg-surface-container p-6 rounded-2xl mt-8">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3 uppercase">CONTACT</h2>
              <p><strong>SEWARTH CLOUD</strong></p>
              <p>Email: <a href="mailto:sewarthcloud@gmail.com" className="text-primary underline">sewarthcloud@gmail.com</a></p>
              <p>Website: <a href="http://www.sewarthcloud.com/" className="text-primary underline" target="_blank" rel="noopener noreferrer">www.sewarthcloud.com</a></p>
              <p>Support: <a href="mailto:sewarthcloud@gmail.com" className="text-primary underline">sewarthcloud@gmail.com</a></p>
              <p className="mt-4 italic">By using SEWARTH CLOUD PVT LTD services, the customer acknowledges and accepts all terms contained herein.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
