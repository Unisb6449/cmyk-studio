import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiPrinter,
  FiLayers,
  FiPackage,
  FiScissors,
  FiPenTool,
  FiThumbsUp,
  FiZap,
  FiShield,
  FiMessageCircle,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Sublimation Printing",
    description:
      "Vibrant, long-lasting prints on fabrics and suitable promotional products, ideal for corporate apparel, events, and bulk orders.",
    icon: FiPrinter,
    accent: "#FFCC00",
  },
  {
    number: "02",
    title: "DTF Printing (Boardless)",
    description:
      "Detailed, durable fabric prints with rich colours, suitable for custom apparel, uniforms, and branded clothing.",
    icon: FiLayers,
    accent: "#FF2095",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Branded mugs, pens, books, notebooks, corporate gifts, packaging, and promotional materials that keep your business visible.",
    icon: FiPackage,
    accent: "#00A8FF",
  },
  {
    number: "04",
    title: "Sewing",
    description:
      "Garment sewing and production for corporate wear, uniforms, event clothing, and other approved apparel projects.",
    icon: FiScissors,
    accent: "#FFCC00",
  },
  {
    number: "05",
    title: "Graphic Design",
    description:
      "Thoughtful visual design for print and branding projects, helping businesses communicate clearly and consistently.",
    icon: FiPenTool,
    accent: "#FF2095",
  },
];

const benefits = [
  {
    icon: FiThumbsUp,
    title: "Quality-Focused",
    description:
      "We pay attention to the details that make finished work look professional.",
  },
  {
    icon: FiZap,
    title: "Responsive Service",
    description:
      "We communicate with clients and coordinate projects around agreed requirements.",
  },
  {
    icon: FiShield,
    title: "Reliable Production",
    description:
      "We approach every brief with care, accountability, and attention to specifications.",
  },
];

const Services = () => {
  return (
    <main>
      {/* SERVICES HERO */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[430px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Our Services
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              High-quality solutions
              <span className="mt-1 block text-[#FFCC00]">
                for your brand.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400">
              From printing and garment production to branding and graphic
              design, we help businesses turn project briefs into quality
              finished products.
            </p>

            <Link
              to="/start-project"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white">
              Discuss Your Project
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#00A8FF] sm:-right-5 sm:-top-5" />

            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#202020]">
              <img
                src="https://res.cloudinary.com/lglx4hzk/image/upload/v1791975883/IMG_4581.png"
                alt="CMYK Studios printing, branding, and creative production"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"/>
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#FF2095] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* FIVE SERVICES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00A8FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  What We Do
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
                Creative solutions
                <span className="block text-[#FF2095]">
                  for every project.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-gray-600 lg:justify-self-end">
              We work with businesses and organisations to understand their
              requirements, coordinate production, and deliver printing and
              creative solutions suited to their briefs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-[#111111]"
                      style={{ backgroundColor: service.accent }}>
                      <Icon size={23}/>
                    </span>

                    <span className="text-sm font-semibold text-gray-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-snug text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to="/start-project"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#111111] transition-colors hover:text-[#FF2095]">
                    Discuss This Service
                    <FiArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"/>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE */}
      <section className="bg-[#F7F9FA] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-2xl bg-[#FFCC00]" />


            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl bg-[#E9ECEF]">
              <img
                src="https://res.cloudinary.com/lglx4hzk/image/upload/v1791973831/IMG_4572.png"
                alt="CMYK Studios sublimation printing production"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"/>
            </div>

            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-2xl bg-[#00A8FF]" />
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A8FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Featured Service
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
              Sublimation
              <span className="block text-[#00A8FF]">Printing.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Sublimation printing is suitable for producing vibrant,
              full-colour designs on compatible materials. It can support
              corporate apparel, event clothing, sportswear, and selected
              promotional products, depending on the project specifications.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Vibrant, detailed designs",
                "Suitable for approved bulk production",
                "Useful for corporate and event projects",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A8FF] text-white">
                    <FiCheck size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/start-project"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-white">
              Start a Project
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CMYK */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#FF2095]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Why CMYK Studios
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
                More than printing.
                <span className="block text-[#FF2095]">
                  We deliver value.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                We take the time to understand your brief, communicate about
                your requirements, and approach production with creativity,
                care, and attention to quality.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="border-b border-gray-200 pb-6">
                    <Icon size={25} className="text-[#00A8FF]" />

                    <h3 className="mt-4 text-lg font-bold text-[#111111]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CTA */}
      <section className="bg-[#F7F9FA] px-5 py-12 md:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#00A8FF]" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FFCC00]" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Ready to bring your
              <span className="text-[#FFCC00]"> ideas to life?</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
              Share your project brief with us and let&apos;s discuss the
              right production solution for your business.
            </p>
          </div>

          <Link
            to="/start-project"
            className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white">
            Start a Project
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;