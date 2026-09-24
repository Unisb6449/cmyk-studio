import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "CMYK Studios understood our requirements and delivered with great attention to detail.",
    name: "Client Feedback",
    role: "Corporate Client",
  },
  {
    quote:
      "The quality of the production and the professionalism throughout the project stood out.",
    name: "Client Feedback",
    role: "Business Client",
  },
  {
    quote:
      "From the initial idea to the finished work, the team was responsive and committed to quality.",
    name: "Client Feedback",
    role: "Project Client",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#FFCC00]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Client Experiences
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
            Trusted by businesses
            <span className="block text-[#FF2095]">
              that value quality.
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-gray-200 bg-[#F7F9FA] p-7 sm:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#FFCC00]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-7 text-base leading-7 text-gray-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-gray-200 pt-5">
                <p className="font-bold text-[#111111]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;