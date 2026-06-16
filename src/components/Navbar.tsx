import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-pure-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant/20 transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-4 md:px-12 w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img
            alt="Sewarth Cloud Logo"
            className="h-8 w-auto"
            src="/image.png"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary hidden sm:block">
            Sewarth Cloud
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md hover:bg-primary-container/10 transition-all duration-300 px-2 rounded-t"
            href="/#home"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
            href="/#who-we-serve"
          >
            Who We Serve
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
            href="/#why-us"
          >
            Why Us
          </Link>
        </div>
        <div className="flex items-center">
          <button className="md:hidden text-on-surface p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
