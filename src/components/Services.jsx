import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import services from "../data/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FF2095]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              Creative solutions built
              <span className="block text-[#00A8FF]">
                for your business.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-600 lg:text-right">
            From production to visual communication, we provide the creative
            and printing expertise businesses need to bring their projects
            to life.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-[#111111] p-7 sm:p-9 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Let&apos;s create something impactful.
            </h3>
          </div>

          <Link
            to="/start-project"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#FFCC00]"
          >
            Start a Project

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;