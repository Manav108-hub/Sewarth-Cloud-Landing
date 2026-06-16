import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] w-full py-16 px-4 md:px-12 border-t border-outline-variant/30 text-pure-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-headline-sm font-bold text-primary-fixed-dim">
              Sewarth Cloud
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-outline-variant">
            Precision in cloud infrastructure. Empowering your digital tomorrow.
          </p>
        </div>
        {/* Links */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-label-md text-pure-white uppercase tracking-wider mb-2">
              Legal
            </h4>
            <Link
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="/compliance"
            >
              Compliance
            </Link>
          </div>
          {/* <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-label-md text-pure-white uppercase tracking-wider mb-2">
              Resources
            </h4>
            <a
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Security Guidelines
            </a>
            <a
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Support
            </a>
            <a
              className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
              href="#"
            >
              Sitemap
            </a>
          </div> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-4 text-center">
        <p className="font-body-sm text-body-sm text-outline-variant">
          © 2024 Sewarth Cloud. All rights reserved.
        </p>
        <p className="font-body-sm text-[10px] text-outline-variant/60 max-w-4xl leading-relaxed">
          Disclaimer: The information provided on this website is for general
          informational purposes only. Sewarth Cloud makes no representations
          or warranties of any kind, express or implied, about the
          completeness, accuracy, reliability, suitability, or availability
          with respect to the website or the information, products, services,
          or related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk. In no event will we be liable for any loss or damage
          including without limitation, indirect or consequential loss or
          damage, or any loss or damage whatsoever arising from loss of data
          or profits arising out of, or in connection with, the use of this
          website.
        </p>
      </div>
    </footer>
  );
}
