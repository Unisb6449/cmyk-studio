import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* CMYK accents */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FFCC00]" />
          <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#00A8FF]" />
          <div className="absolute right-24 bottom-0 h-20 w-20 rounded-tl-full bg-[#FF2095]" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Start a Project
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
              Have an idea?
              <span className="block text-[#FFCC00]">
                Let&apos;s bring it to life.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Tell us what you need, and let&apos;s discuss how CMYK Studios
              can turn your project into impactful finished work.
            </p>

            <Link
              to="/start-project"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#FFCC00]"
            >
              Start a Project

              <FiArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;