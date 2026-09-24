const reasons = [
  {
    number: "01",
    title: "Quality",
    description:
      "We pay attention to the details that make every project look and feel professional.",
  },
  {
    number: "02",
    title: "Expertise",
    description:
      "Our experience across printing, branding, apparel, and creative production helps us deliver better results.",
  },
  {
    number: "03",
    title: "Reliability",
    description:
      "We value our commitments and work to deliver projects with consistency and professionalism.",
  },
  {
    number: "04",
    title: "Creative Thinking",
    description:
      "We combine creativity and practical production knowledge to turn ideas into impactful work.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#111111] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#FFCC00]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Why CMYK Studios
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            More than printing.
            <span className="block text-[#00A8FF]">
              We create impact.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            We combine quality production, creative thinking, and dependable
            service to help businesses turn their ideas into work that gets
            noticed.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#1a1a1a] sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-bold text-[#FF2095]">
                  {reason.number}
                </span>

                <span className="h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#FFCC00]" />
              </div>

              <h3 className="mt-12 text-2xl font-black sm:text-3xl">
                {reason.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;