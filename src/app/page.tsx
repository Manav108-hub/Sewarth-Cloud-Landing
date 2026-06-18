import ContactForm from "../components/ContactForm";
export default function Home() {
  return (
    <>
      {" "}
      {/* TopNavBar */}{" "}
      <nav className="fixed top-0 w-full z-50 bg-pure-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant/20 transition-all duration-300">
        {" "}
        <div className="flex justify-between items-center h-16 px-4 md:px-12 w-full max-w-7xl mx-auto">
          {" "}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            {" "}
            <img
              alt="Sewarth Cloud Logo"
              className="h-8 w-auto"
              src="/image.png"
            />{" "}
            <div className="hidden sm:flex flex-col">
              <span className="font-headline-md text-headline-md font-bold text-primary">
                {" "}
                Sewarth Cloud Pvt Ltd{" "}
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-on-surface-variant">
                SECURE - RELIABLE - SCALABLE - SMART SOLUTIONS
              </span>
            </div>
          </div>{" "}
          <div className="hidden md:flex items-center gap-6">
            {" "}
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md hover:bg-primary-container/10 transition-all duration-300 px-2 rounded-t"
              href="#"
            >
              {" "}
              Home{" "}
            </a>{" "}
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
              href="#services"
            >
              {" "}
              Services{" "}
            </a>{" "}
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
              href="#who-we-serve"
            >
              {" "}
              Who We Serve{" "}
            </a>{" "}
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary-container/10 duration-300 px-2 py-1 rounded"
              href="#why-us"
            >
              {" "}
              Why Choose Us{" "}
            </a>{" "}
          </div>{" "}
          <div className="flex items-center">
            {" "}

            <button className="md:hidden text-on-surface p-2">
              {" "}
              <span className="material-symbols-outlined">menu</span>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
      <main className="pt-20">
        {" "}
        {/* Hero Section */}{" "}
        <section className="relative min-h-[90vh] flex items-center px-4 md:px-12 py-16 overflow-hidden">
          {" "}
          {/* Decorative Background Elements */}{" "}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tertiary-fixed rounded-full blur-[120px] opacity-40 -z-10 translate-x-1/3 -translate-y-1/4"></div>{" "}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-fixed rounded-full blur-[100px] opacity-30 -z-10 -translate-x-1/4 translate-y-1/4"></div>{" "}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {" "}
            <div className="flex flex-col gap-6 z-10">
              {" "}
              <div>
                {" "}
                <span className="inline-block py-1 px-3 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mb-4 uppercase tracking-wider">
                  {" "}
                  Welcome to the New Dawn{" "}
                </span>{" "}
                <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-2">
                  {" "}
                  Sewarth Cloud{" "}
                </h1>{" "}
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">
                  {" "}
                  SECURE – RELIABLE – SCALABLE - SMART SOLUTIONS{" "}
                </h2>{" "}
              </div>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                {" "}
                Empowering small businesses and individuals with
                enterprise-grade cloud solutions. Experience the perfect blend
                of warmth and precision in cloud infrastructure, designed to
                scale with your ambitions.{" "}
              </p>{" "}
              <div className="flex flex-wrap gap-4 mt-4">
                {" "}
                <a
                  className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
                  href="#contact"
                >
                  {" "}
                  Start Storing Today{" "}
                  <span className="material-symbols-outlined text-[18px]">
                    {" "}
                    arrow_forward{" "}
                  </span>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative z-10 hidden md:block">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-tr from-tertiary-fixed to-transparent rounded-3xl -rotate-3 scale-105 opacity-50"></div>{" "}
              <img
                alt="Isometric Cloud Server Representation"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover glass-panel hover:-translate-y-2 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQGoOZA1URtcAxeQiJyRF7RSsSTw4CQhH4adv71nOTRsvcou03lFh3Qq5sq2tgZ0R2p8r_MFcKLvRnpNs7okjV1kXlPuAXZz0PPMgc4lCfeobgmhb4nnlEnDtuZn1rPp_mOr1xcqJEZxUpIILsnloEQ3KuPXeR2UfN4VL5y1puoHnFjGlZc22ic-zqFm6CRFfuaJsLVf9teOJ5hsP2C6wWOOD3J0pylE_N9Mqq7eJxdlZUMMkdOmUqx60dgqCoCkUwAM89w8fcn-k"
              />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* About & Vision Section */}{" "}
        <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-surface to-tertiary-fixed/20 relative">
          {" "}
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 glass-panel p-10 rounded-3xl shadow-sm">
            {" "}
            <span className="material-symbols-outlined text-4xl text-secondary-container mb-2">
              {" "}
              wb_sunny{" "}
            </span>{" "}
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              {" "}
              Our Vision...{" "}
            </h2>{" "}
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {" "}
              To be the catalyst for growth in the digital age, providing
              accessible, robust, and intuitive cloud solutions that democratize
              technology for every ambition.{" "}
            </p>{" "}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary-container mx-auto my-4 rounded-full"></div>{" "}
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              {" "}
              Our Mission...{" "}
            </h3>{" "}
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" "}
              At Sewarth Cloud, we believe that powerful infrastructure
              shouldn't be complicated. We bridge the gap between complex
              technology and everyday business needs, offering a personalized
              approach to cloud computing that feels less like a service and
              more like a partnership.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* Services Grid */}{" "}
        <section
          className="py-16 px-4 md:px-12 bg-surface relative"
          id="services"
        >
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <div className="text-center mb-10">
              {" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                {" "}
                Our Customized Services...{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                {" "}
                Comprehensive solutions tailored for optimal performance and
                peace of mind.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              {/* Service Card 1 */}{" "}
              <div className="bg-pure-white p-10 rounded-2xl shadow-sm border border-outline-variant/30 hover-glow transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative overflow-hidden">
                {" "}
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary-container group-hover:scale-110 transition-transform">
                  {" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {" "}
                    cloud{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Cloud Storage{" "}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Secure, scalable, and instantly accessible storage for all
                  your critical data needs.{" "}
                </p>{" "}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>{" "}
              </div>{" "}
              {/* Service Card 2 */}{" "}
              <div className="bg-pure-white p-10 rounded-2xl shadow-sm border border-outline-variant/30 hover-glow transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative overflow-hidden">
                {" "}
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary-container group-hover:scale-110 transition-transform">
                  {" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {" "}
                    backup{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Data Backup{" "}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Automated, resilient backup solutions ensuring your data is
                  protected against any eventuality.{" "}
                </p>{" "}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>{" "}
              </div>{" "}
              {/* Service Card 3 */}{" "}
              <div className="bg-pure-white p-10 rounded-2xl shadow-sm border border-outline-variant/30 hover-glow transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative overflow-hidden">
                {" "}
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary-container group-hover:scale-110 transition-transform">
                  {" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {" "}
                    dns{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Cloud Hosting{" "}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  High-performance, reliable hosting environments for your
                  applications and websites.{" "}
                </p>{" "}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>{" "}
              </div>{" "}
              {/* Service Card 4 */}{" "}
              <div className="bg-pure-white p-10 rounded-2xl shadow-sm border border-outline-variant/30 hover-glow transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative overflow-hidden">
                {" "}
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary-container group-hover:scale-110 transition-transform">
                  {" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {" "}
                    apps{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  SaaS Software{" "}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Access to powerful, ready-to-use software applications hosted
                  on our robust infrastructure.{" "}
                </p>{" "}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-tertiary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Target Audience Section */}{" "}
        <section
          className="py-16 px-4 md:px-12 bg-surface-container-low"
          id="who-we-serve"
        >
          {" "}
          <div className="max-w-7xl mx-auto">
            {" "}
            <div className="text-center mb-10">
              {" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                {" "}
                Who We Serve...{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                {" "}
                Designed for those who need enterprise power with intuitive
                simplicity.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {" "}
              {/* Audience 1 */}{" "}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-pure-white rounded-2xl shadow-sm">
                {" "}
                <div className="w-16 h-16 rounded-2xl bg-primary-fixed/50 flex items-center justify-center text-primary mb-2">
                  {" "}
                  <span className="material-symbols-outlined text-3xl">
                    {" "}
                    storefront{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Small Retail Businesses{" "}
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Streamline your inventory, customer data, and point-of-sale
                  systems with secure, always-on cloud storage.{" "}
                </p>{" "}
              </div>{" "}
              {/* Audience 2 */}{" "}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-pure-white rounded-2xl shadow-sm relative -translate-y-4">
                {" "}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-fixed/20 to-transparent rounded-2xl pointer-events-none"></div>{" "}
                <div className="w-16 h-16 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-secondary-container mb-2">
                  {" "}
                  <span className="material-symbols-outlined text-3xl">
                    {" "}
                    rocket_launch{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Start-ups{" "}
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Scale your infrastructure dynamically as you grow, without the
                  overhead of physical servers.{" "}
                </p>{" "}
              </div>{" "}
              {/* Audience 3 */}{" "}
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-pure-white rounded-2xl shadow-sm">
                {" "}
                <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-2">
                  {" "}
                  <span className="material-symbols-outlined text-3xl">
                    {" "}
                    person{" "}
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {" "}
                  Individuals{" "}
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Protect your personal memories, documents, and digital life
                  with military-grade encryption and ease of use.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Why Choose Us */}{" "}
        <section
          className="py-16 px-4 md:px-12 bg-surface relative overflow-hidden"
          id="why-us"
        >
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {" "}
            <div className="order-2 lg:order-1 relative">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed to-tertiary-fixed rounded-3xl blur-2xl opacity-30 -z-10"></div>{" "}
              <img
                alt="A modern, abstract digital art representation of cloud data security."
                className="rounded-3xl shadow-lg border border-outline-variant/20 w-full h-auto object-cover glass-panel"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKlY25TBqWXLBEY-2gqdgOFDSAKWQJBWkuKOltWH6kP-HS8NFJR9ftDe-6bPxQPQBLsP8INE9JfGvYb9ehb8hIu8LU3gHTwwpvpDqhKvx2y_drqD8XM1M7DOr9HE1l8r_7dlkDgWZiszwLSOOsEnd43MZphnNyA129a96qFZ_ZyEa2H2IvN-cJbayJmUsJToDCmE0wZDpOMY7xtzuG_wYlODT756PXwbhZKFlzzKS0iCC1bPAeOXL46lgQePUsSoN6O5eVk1x5pRI"
              />{" "}
            </div>{" "}
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              {" "}
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                {" "}
                Why Choose Us...{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {" "}
                We combine cutting-edge technology with a human-centric approach
                to deliver solutions that simply work better.{" "}
              </p>{" "}
              <ul className="flex flex-col gap-4">
                {" "}
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed/50 flex items-center justify-center flex-shrink-0">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[16px] text-tertiary-container"
                      style={{ fontVariationSettings: "'wght' 600" }}
                    >
                      {" "}
                      check{" "}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-body-lg text-on-surface font-semibold">
                      {" "}
                      Secure Storage{" "}
                    </h4>{" "}
                    <p className="font-body-sm text-on-surface-variant">
                      {" "}
                      End-to-end encryption ensuring your data remains yours
                      alone.{" "}
                    </p>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed/50 flex items-center justify-center flex-shrink-0">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[16px] text-tertiary-container"
                      style={{ fontVariationSettings: "'wght' 600" }}
                    >
                      {" "}
                      check{" "}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-body-lg text-on-surface font-semibold">
                      {" "}
                      Affordable Pricing{" "}
                    </h4>{" "}
                    <p className="font-body-sm text-on-surface-variant">
                      {" "}
                      Transparent, flexible plans that fit small business
                      budgets.{" "}
                    </p>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed/50 flex items-center justify-center flex-shrink-0">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[16px] text-tertiary-container"
                      style={{ fontVariationSettings: "'wght' 600" }}
                    >
                      {" "}
                      check{" "}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-body-lg text-on-surface font-semibold">
                      {" "}
                      Easy Access{" "}
                    </h4>{" "}
                    <p className="font-body-sm text-on-surface-variant">
                      {" "}
                      Intuitive interfaces designed for users, not just
                      engineers.{" "}
                    </p>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed/50 flex items-center justify-center flex-shrink-0">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[16px] text-tertiary-container"
                      style={{ fontVariationSettings: "'wght' 600" }}
                    >
                      {" "}
                      check{" "}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-body-lg text-on-surface font-semibold">
                      {" "}
                      Reliable Infrastructure{" "}
                    </h4>{" "}
                    <p className="font-body-sm text-on-surface-variant">
                      {" "}
                      99.9% uptime guarantee with redundant backup systems.{" "}
                    </p>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="flex items-start gap-4">
                  {" "}
                  <div className="mt-1 w-6 h-6 rounded-full bg-tertiary-fixed/50 flex items-center justify-center flex-shrink-0">
                    {" "}
                    <span
                      className="material-symbols-outlined text-[16px] text-tertiary-container"
                      style={{ fontVariationSettings: "'wght' 600" }}
                    >
                      {" "}
                      check{" "}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-body-lg text-on-surface font-semibold">
                      {" "}
                      Scalable Solutions{" "}
                    </h4>{" "}
                    <p className="font-body-sm text-on-surface-variant">
                      {" "}
                      Seamlessly upgrade resources as your business demands
                      grow.{" "}
                    </p>{" "}
                  </div>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Contact Form */}{" "}
        <section
          className="py-16 px-4 md:px-12 bg-primary-fixed/30 relative"
          id="contact"
        >
          {" "}
          <div className="max-w-3xl mx-auto bg-pure-white p-10 rounded-3xl shadow-sm border border-outline-variant/20 relative z-10">
            {" "}
            <div className="text-center mb-8">
              {" "}
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                {" "}
                For Customized Solution... Get In Touch Today{" "}
              </h2>{" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                Our team is ready to design the perfect cloud architecture for
                you.{" "}
              </p>{" "}
            </div>{" "}
            <ContactForm />{" "}
          </div>{" "}
          {/* Decorative blur behind form */}{" "}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-pure-white/50 blur-3xl -z-0"></div>{" "}
        </section>{" "}
      </main>{" "}
      {/* Footer */}{" "}
      <footer className="bg-[#1A1A1A] w-full py-16 px-4 md:px-12 border-t border-outline-variant/30 text-pure-white">
        {" "}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {" "}
          {/* Brand */}{" "}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="font-headline-sm text-headline-sm font-bold text-primary-fixed-dim">
                {" "}
                Sewarth Cloud{" "}
              </span>{" "}
            </div>{" "}
            <p className="font-body-sm text-body-sm text-outline-variant">
              {" "}
              Precision in cloud infrastructure. Empowering your digital
              tomorrow.{" "}
            </p>{" "}
          </div>{" "}
          {/* Links */}{" "}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {" "}
            <div className="flex flex-col gap-3">
              {" "}
              <h4 className="font-label-md text-label-md text-pure-white uppercase tracking-wider mb-2">
                {" "}
                Legal{" "}
              </h4>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="/privacy-policy"
              >
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="/terms-of-service"
              >
                {" "}
                Terms of Service{" "}
              </a>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="/compliance"
              >
                {" "}
                Compliance{" "}
              </a>{" "}
            </div>{" "}
            {/* <div className="flex flex-col gap-3">
              {" "}
              <h4 className="font-label-md text-label-md text-pure-white uppercase tracking-wider mb-2">
                {" "}
                Resources{" "}
              </h4>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="#"
              >
                {" "}
                Security Guidelines{" "}
              </a>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="#"
              >
                {" "}
                Support{" "}
              </a>{" "}
              <a
                className="font-body-sm text-body-sm text-outline-variant hover:text-primary-fixed-dim transition-colors"
                href="#"
              >
                {" "}
                Sitemap{" "}
              </a>{" "}
            </div>{" "} */}
          </div>{" "}
        </div>{" "}
        <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-4 text-center">
          {" "}
          <p className="font-body-sm text-body-sm text-outline-variant">
            {" "}
            © 2024 Sewarth Cloud. All rights reserved.{" "}
          </p>{" "}
          <p className="font-body-sm text-[10px] text-outline-variant/60 max-w-4xl leading-relaxed">
            {" "}
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
            website.{" "}
          </p>{" "}
        </div>{" "}
      </footer>{" "}
    </>
  );
}
