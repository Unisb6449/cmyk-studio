import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#FFCC00] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-white transition-all duration-500 group-hover:bg-[#00A8FF] group-hover:text-black">
            <Icon size={24} />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white">
            <FiArrowUpRight size={18} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            0{index + 1}
          </p>

          <h3 className="text-2xl font-black tracking-[-0.02em] text-[#111111]">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {service.description}
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 h-px w-10 bg-[#FF2095] transition-all duration-500 group-hover:w-full" />

      </div>
    </article>
  );
};

export default ServiceCard;