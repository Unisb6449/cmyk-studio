import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiEye,
  FiTarget,
} from "react-icons/fi";

const impactValues = [
  {
    letter: "I",
    title: "Integrity",
    description: "We keep to our word.",
    color: "#00A8FF",
  },
  {
    letter: "M",
    title: "Mastery",
    description:
      "We pursue excellence through quality and expertise.",
    color: "#FF2095",
  },
  {
    letter: "P",
    title: "Passionate",
    description:
      "We bring energy and commitment to every task.",
    color: "#FFCC00",
  },
  {
    letter: "A",
    title: "Agile",
    description:
      "We are fast, flexible, and responsive.",
    color: "#111111",
  },
  {
    letter: "C",
    title: "Creativity",
    description:
      "We innovate, improve, and think differently.",
    color: "#00A8FF",
  },
  {
    letter: "T",
    title: "Thoughtful",
    description:
      "We make smart decisions and treat people with respect.",
    color: "#FF2095",
  },
];

const companyStats = [
  {
    number: "10+",
    label: "Years of Experience",
    description:
      "Building expertise across printing, branding, and creative production.",
    color: "#00A8FF",
  },
  {
    number: "500+",
    label: "Projects Delivered",
    description:
      "Helping businesses turn ideas into professional visual products.",
    color: "#FF2095",
  },
  {
    number: "100+",
    label: "Clients Served",
    description:
      "Supporting businesses and organisations with reliable creative solutions.",
    color: "#FFCC00",
  },
  {
    number: "4+",
    label: "Creative Services",
    description:
      "Bringing print, branding, apparel, and design solutions together.",
    color: "#111111",
  },
];

const About = () => {
  return (
    <main>
      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                About CMYK Studios
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Where ideas
              <span className="block text-[#FFCC00]">
                meet impact.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              CMYK Studios is an indigenous print and marketing
              communications company based in Lagos, Nigeria. We combine
              printing, branding, apparel, and creative solutions to help
              businesses bring their ideas to life.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#FFCC00]" />

            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-[#00A8FF]" />

            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#222222]">
              {/* Replace with your real CMYK Studio image */}
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-gray-500">
                  CMYK Studios Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A8FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Story
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              From ideas to
              <span className="block text-[#FF2095]">
                impactful results.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
              CMYK Studios is built around the belief that great visual
              communication can help businesses connect, communicate, and
              grow.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              From traditional print services and graphic design to modern
              digital and wide-format production, we bring together
              creativity, expertise, and production knowledge to deliver
              quality work for businesses and organisations.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Every project starts with an idea. Our role is to understand
              that idea, develop it carefully, and turn it into a finished
              product that communicates with purpose.
            </p>

            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
            >
              Explore Our Services

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-[#FFCC00] sm:-right-5 sm:-top-5" />

            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F7F9FA]">
              {/* Replace with your real CMYK Studio production image */}
              <div className="flex h-full items-center justify-center">
                <span className="text-sm text-gray-400">
                  CMYK Studios Production Image
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION / MISSION / IMPACT
      ========================================================= */}
      <section className="bg-[#F7F9FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1.2fr] lg:gap-0">
            {/* Vision */}
            <div className="lg:border-r lg:border-gray-200 lg:pr-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-white">
                <FiEye size={24} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111111]">
                Leading through innovation.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                To be a leading force in innovative marketing communications
                and creative production in Nigeria, setting direction through
                quality, innovation, and exceptional customer experiences.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:border-r lg:border-gray-200 lg:px-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-white">
                <FiTarget size={24} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111111]">
                Creating meaningful impact.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                To provide quality printing, branding, apparel, and creative
                solutions that help businesses communicate their identity and
                bring their ideas to life.
              </p>
            </div>

            {/* IMPACT */}
            <div className="lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Core Values
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-[#111111]">
                IMPACT
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                Our values shape every product we create and every customer
                experience we deliver.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {impactValues.map((value) => (
                  <div
                    key={value.letter}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-black"
                      style={{
                        backgroundColor: value.color,
                        color:
                          value.color === "#FFCC00"
                            ? "#111111"
                            : "#ffffff",
                      }}
                    >
                      {value.letter}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold text-[#111111]">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BY THE NUMBERS
      ========================================================= */}
      <section className="bg-[#111111] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                By the Numbers
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Experience that
              <span className="block text-[#00A8FF]">
                makes an impact.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
              Our work is driven by experience, creativity, attention to
              detail, and a commitment to delivering quality results.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111111] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-9"
              >
                <span
                  className="mb-6 block h-1 w-10 rounded-full"
                  style={{
                    backgroundColor: stat.color,
                  }}
                />

                <p className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">
                  {stat.number}
                </p>

                <h3 className="mt-4 text-lg font-bold">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND STATEMENT
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            What We Believe
          </p>

          <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-8xl">
            IMAGE IS
            <span className="block text-[#FF2095]">
              EVERYTHING.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Every detail matters. From the first concept to the finished
            product, we believe strong visual communication has the power
            to shape how businesses are seen, remembered, and experienced.
          </p>
        </div>
      </section>

      {/* =========================================================
          START A PROJECT CTA
      ========================================================= */}
      <section className="bg-[#F7F9FA] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FFCC00]" />

            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#00A8FF]" />

            <div className="absolute bottom-0 right-20 h-16 w-16 rounded-tl-full bg-[#FF2095]" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  Let's Work Together
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                  Ready to bring your
                  <span className="block text-[#FFCC00]">
                    ideas to life?
                  </span>
                </h2>

                <p className="mt-5 text-base leading-7 text-gray-400">
                  Tell us about your project and let's discuss how CMYK
                  Studios can bring it to life.
                </p>
              </div> 

              <Link
                to="/start-project"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#111111] transition-all duration-300 hover:bg-[#FFCC00]">
                Start a Project

                <FiArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;