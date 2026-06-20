import { Link } from "react-router-dom";

const LOGO_DARK = "https://api.builder.io/api/v1/image/assets/TEMP/bda7bb5fe1773134e0628be4ee212746ed30ef1f?width=554";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-6 md:px-10 lg:px-[70px] py-[22px] border-b border-black/10">
        <Link to="/">
          <img src={LOGO_DARK} alt="Artifex" className="h-[47px] w-auto" />
        </Link>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="font-unispace font-bold text-[#191919] text-3xl md:text-[48px] leading-[109%] tracking-[-0.05em] mb-6">
          Contact Us
        </h1>
        <p className="font-ibm text-[#191919] text-lg md:text-xl leading-[135%] max-w-xl mb-10">
          This page is coming soon. Continue prompting to build out the full contact form and page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#191919] text-white font-unispace font-bold text-sm px-6 py-[18px] rounded-[10px] hover:bg-black transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
