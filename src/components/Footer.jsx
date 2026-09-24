import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/lglx4hzk/image/upload/v1790204764/cmyk-studio-footer.png"
                alt="CMYK Studios"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Creating IMPACT through every product. We help businesses turn
              ideas into quality printing, branding, apparel, and creative
              production.
            </p>

            <Link
              to="/start-project"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#FFCC00]"
            >
              Start a Project

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Explore
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Portfolio
              </Link>

              <Link
                to="/contact"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Visit Us
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              No. 1 Omotayo Ojo Street,
              <br />
              Off Allen Avenue,
              <br />
              Ikeja, Lagos 100001, Nigeria
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FiTwitter size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CMYK Studios. All rights reserved.
          </p>

          <p>
            IMAGE IS EVERYTHING
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;