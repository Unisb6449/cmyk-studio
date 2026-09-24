import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const PortfolioPreview = () => {
  return (
    <section className="bg-[#F7F9FA] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A8FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Work
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              Work that makes an
              <span className="block text-[#FF2095]">
                impact.
              </span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
          >
            View All Projects

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;