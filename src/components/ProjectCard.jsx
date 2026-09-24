import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-[#F7F9FA]">
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        {project.image ? (
          project.type === "video" ? (
            <video
              src={project.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            Project Image
          </div>
        )}

        {/* Arrow */}
        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <FiArrowUpRight size={19} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-black tracking-[-0.02em] text-[#111111]">
          {project.title}
        </h3>
      </div>
    </article>
  );
};

export default ProjectCard;