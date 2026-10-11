import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiImage,
  FiPlay,
  FiCheck,
  FiPrinter,
  FiZap,
  FiShield,
  FiPenTool,
} from "react-icons/fi";

import projects from "../data/projects";

const categories = [
  "All",
  "Printing",
  "Branding",
  "Frames",
  "Apparel",
  "Promotional",
];

const strengths = [
  {
    icon: FiPrinter,
    title: "Quality Production",
    description:
      "Careful attention to print quality, materials, and finishing.",
    accent: "#FFCC00",
  },
  {
    icon: FiZap,
    title: "Creative Thinking",
    description:
      "Solutions developed around each project's goals and requirements.",
    accent: "#00A8FF",
  },
  {
    icon: FiShield,
    title: "Reliable Process",
    description:
      "Clear communication and attention to agreed specifications.",
    accent: "#FF2095",
  },
  {
    icon: FiPenTool,
    title: "Purposeful Design",
    description:
      "Visual materials created to communicate a brand's message clearly.",
    accent: "#111111",
  },
];

function ProjectMedia({ project, featured = false }) {
  const mediaClass =
    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]";

  if (project.video) {
    return (
      <div className="absolute inset-0">
        <video
          className={mediaClass}
          src={project.video}
          poster={project.poster || project.image || undefined}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} video`}
        />

        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#111111] shadow-lg">
          <FiPlay size={16} fill="currentColor" />
        </span>
      </div>
    );
  }

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading={featured ? "eager" : "lazy"}
        className={mediaClass}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E9ECEF] p-5 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#111111] shadow-sm">
        <FiImage size={25} />
      </div>

      <p className="mt-4 text-sm font-bold text-[#111111]">
        {project.category} Project
      </p>

      <p className="mt-1 text-xs text-gray-500">
        Add the real project image or video
      </p>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="group min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E9ECEF]">
        <ProjectMedia project={project} />

        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#111111] shadow-sm">
          {project.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-[#111111]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xs font-semibold text-gray-500">
            {project.category}
          </span>

          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#111111] transition-all duration-300 group-hover:border-[#FFCC00] group-hover:bg-[#FFCC00]"
          >
            <FiArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </article>
  );
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject =
    projects.find((project) => project.video || project.image) ||
    projects[0];

  return (
    <main>
      {/* =====================================================
          PORTFOLIO HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[430px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Our Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Work with
              <span className="block text-[#FFCC00]">
                purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Explore printing, branding, frames, apparel, and promotional
              project categories. Every featured project should reflect
              the real work and production capabilities of CMYK Studios.
            </p>

            <Link
              to="/start-project"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white"
            >
              Start a Project

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FFCC00] sm:-right-5 sm:-top-5" />

            <div className="group relative z-10 aspect-[4/3] overflow-hidden rounded-2xl bg-[#252525]">
              <ProjectMedia project={featuredProject} featured />

              {!featuredProject.image && !featuredProject.video && (
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6">
                  <p className="text-sm font-semibold text-white">
                    CMYK Studios Project Showcase
                  </p>
                </div>
              )}
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT GALLERY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00A8FF]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Selected Work
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
                Explore our
                <span className="block text-[#FF2095]">
                  project categories.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Browse by category to find the kind of production or creative
                work that matches your brief.
              </p>
            </div>

            <p
              className="text-sm text-gray-500"
              aria-live="polite"
            >
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-9 flex flex-wrap gap-2.5" aria-label="Filter projects by category">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-gray-200 bg-[#F7F9FA] text-gray-600 hover:border-[#111111] hover:text-[#111111]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* FILTERED PROJECT CARDS */}
          {filteredProjects.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-[#F7F9FA] px-6 py-16 text-center">
              <FiImage
                size={32}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-4 text-xl font-bold text-[#111111]">
                No projects in this category yet
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Choose another category to explore more work.
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-5 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FFCC00] hover:text-[#111111]"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="bg-[#F7F9FA] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#FF2095]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Our Approach
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
                Good work starts
                <span className="block text-[#FF2095]">
                  with a good brief.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                Every business has different production needs. We work to
                understand the brief, identify the required output, and
                coordinate the process around the agreed specifications.
              </p>

              <Link
                to="/services"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#111111] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-white"
              >
                Explore Our Services

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    key={strength.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: strength.accent,
                        color:
                          strength.accent === "#FFCC00"
                            ? "#111111"
                            : "#FFFFFF",
                      }}
                    >
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-5 text-lg font-bold text-[#111111]">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {strength.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PROCESS
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-9 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Working With CMYK
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-4xl">
                  From your brief
                  <span className="block text-[#00A8FF]">
                    to finished work.
                  </span>
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "Share your project brief.",
                  "Review the requirements together.",
                  "Agree on scope and production details.",
                  "Coordinate production and delivery.",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xs font-bold text-white">
                      0{index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          START A PROJECT CTA
      ===================================================== */}
      <section className="bg-[#F7F9FA] px-5 py-12 md:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#00A8FF]" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FFCC00]" />
          <div className="pointer-events-none absolute -bottom-8 right-20 h-20 w-20 rounded-full bg-[#FF2095]" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Have a project in mind?
              <span className="block text-[#FFCC00]">
                Let&apos;s discuss it.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Share your requirements with CMYK Studios and start a
              conversation about your next printing, branding, or
              production project.
            </p>
          </div>

          <Link
            to="/start-project"
            className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white"
          >
            Start a Project

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;