import { Link } from "react-router-dom";

import { FiArrowUpRight, FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-14 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* =========================
            LEFT — HERO CONTENT
        ========================== */}
        <div className="relative z-10 max-w-2xl">

          {/* Small Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#FF2095]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Print • Brand • Create
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl">
            We turn your

            <span className="block">
              <span className="text-[#00A8FF]">ideas</span> into
            </span>

            <span className="block">
              <span className="text-[#FF2095]">impact.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            From printing and branding to creative production, CMYK Studios
            helps businesses bring their ideas to life with quality,
            creativity, and precision.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/start-project"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FFCC00] hover:text-[#111111]"
            >
              Start a Project

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust / Experience Row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-gray-200 pt-6">
            <div>
              <p className="text-xl font-bold text-[#111111]">
                Quality
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Every project matters
              </p>
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div>
              <p className="text-xl font-bold text-[#111111]">
                Creative
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Ideas that stand out
              </p>
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div>
              <p className="text-xl font-bold text-[#111111]">
                Reliable
              </p>

              <p className="mt-1 text-xs text-gray-500">
                We keep to our word
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT — HERO VIDEO
        ========================== */}
        <div className="relative">

          {/* CMYK Decorative Blocks */}
          <div className="absolute -right-3 -top-3 z-0 h-20 w-20 rounded-2xl bg-[#FFCC00] sm:-right-5 sm:-top-5" />

          <div className="absolute -bottom-3 -left-3 z-0 h-20 w-20 rounded-2xl bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />

          {/* Video Container */}
          <div className="group relative z-10 overflow-hidden rounded-[2rem] bg-black shadow-2xl">
            <video
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[520px] lg:h-[600px]"
              src="https://res.cloudinary.com/lglx4hzk/video/upload/v1790204482/cmyk-7.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            {/* Subtle Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Video Label */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2.5 backdrop-blur-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-white">
                <FiPlay size={11} fill="currentColor" />
              </span>

              <span className="text-xs font-semibold text-[#111111]">
                Bringing ideas to life
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;