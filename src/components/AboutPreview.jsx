import { Link } from "react-router-dom";

import { FiArrowUpRight } from "react-icons/fi";

const AboutPreview = () => {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Content */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#00A8FF]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              About CMYK Studios
            </span>
          </div>

          <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
            Turning ideas into
            <span className="block text-[#FF2095]">
              impactful experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            CMYK Studios is an indigenous print and marketing communications
            company based in Lagos, Nigeria. We provide printing, graphic
            design, branding, and creative production solutions that help
            businesses bring their ideas to life.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            From the first idea to the final production, we combine creativity,
            quality, expertise, and attention to detail to deliver work that
            makes an impact.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
          >
            Learn More
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -right-3 -top-3 h-20 w-20 rounded-2xl bg-[#FFCC00] sm:-right-5 sm:-top-5" />

          <div className="relative z-10 aspect-[3/2] overflow-hidden rounded-[2rem] bg-gray-200">
            <img
              src="https://res.cloudinary.com/lglx4hzk/image/upload/v1790203712/cmyk-studio-office.png"
              alt="CMYK Studios Project Image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;