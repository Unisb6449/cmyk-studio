
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiMessageCircle,
  FiFileText,
  FiCheckCircle,
  FiSettings,
  FiTruck,
  FiPrinter,
  FiLayers,
  FiPackage,
  FiScissors,
  FiPenTool,
  FiPhone,
  FiClock,
  FiLock,
} from "react-icons/fi";

const services = [
  {
    title: "Sublimation Printing",
    icon: FiPrinter,
    color: "#FFCC00",
  },
  {
    title: "DTF Printing (Boardless)",
    icon: FiLayers,
    color: "#FF2095",
  },
  {
    title: "Branding",
    icon: FiPackage,
    color: "#00A8FF",
  },
  {
    title: "Sewing",
    icon: FiScissors,
    color: "#FFCC00",
  },
  {
    title: "Graphic Design",
    icon: FiPenTool,
    color: "#FF2095",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us what you need, your requirements, quantity, and preferred timeline.",
    icon: FiMessageCircle,
    color: "#FFCC00",
  },
  {
    number: "02",
    title: "Review the Brief",
    description:
      "We review your requirements and discuss the best approach for your project.",
    icon: FiFileText,
    color: "#FF2095",
  },
  {
    number: "03",
    title: "Agree on the Details",
    description:
      "We discuss the scope, quotation, specifications, and expected timeline.",
    icon: FiSettings,
    color: "#00A8FF",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Once the details are approved, the agreed work moves into production.",
    icon: FiPrinter,
    color: "#FFCC00",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "The completed work is prepared for collection or delivery as agreed.",
    icon: FiTruck,
    color: "#FF2095",
  },
];

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const businessPhone = import.meta.env.VITE_CMYK_PHONE || "";
const businessEmail = import.meta.env.VITE_CMYK_EMAIL || "";

// Cloudinary office image for the Start Project hero section.
const heroImage =
  "https://res.cloudinary.com/lglx4hzk/image/upload/v1790203712/cmyk-studio-office.png";

const inputClass =
  "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#111111] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/10";

const StartProject = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus(null);

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setFormStatus({
        type: "error",
        message:
          "The project form is not connected yet. Please configure the EmailJS settings before submitting.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("fullName"),
      from_email: formData.get("email"),
      reply_to: formData.get("email"),
      phone: formData.get("phone"),
      company_name: formData.get("companyName") || "Not provided",
      service_interest: formData.get("service"),
      quantity: formData.get("quantity") || "Not specified",
      timeline: formData.get("timeline") || "Not specified",
      project_details: formData.get("projectDetails"),
    };

    try {
      setIsSubmitting(true);

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        templateParams,
        { publicKey: emailPublicKey }
      );

      setFormStatus({
        type: "success",
        message:
          "Your project brief has been sent successfully. Thank you for contacting CMYK Studios. We look forward to discussing your requirements.",
      });

      form.reset();
    } catch (error) {
      console.error("Project form submission failed:", error);

      setFormStatus({
        type: "error",
        message:
          "We could not send your project brief. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[430px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Start a Project
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn your ideas
              <span className="block text-[#FFCC00]">
                into real results.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Tell us about your project and let&apos;s discuss the right
              production solution for your business. From printing and
              branding to apparel and graphic design, we&apos;re ready to
              understand your brief.
            </p>

            <a
              href="#project-form"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white">
              Get Started
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </a>
          </div>

          {/* CLOUDINARY OFFICE IMAGE */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FF2095] sm:-right-5 sm:-top-5" />

            <div className="group relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#202020]">
              <img
                src={heroImage}
                alt="CMYK Studios office and production workspace"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}/>
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* PROJECT PROCESS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00A8FF]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Why Start a Project?
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
                A clear process.
                <span className="block text-[#FF2095]">
                  Work with purpose.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-gray-600">
              Start by sharing a few details. We&apos;ll review your brief
              together, discuss the requirements, and agree on the next
              steps before production begins.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full text-[#111111]"
                      style={{ backgroundColor: step.color }}>
                      <Icon size={23} />
                    </span>

                    <span className="text-sm font-bold text-gray-400">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#111111]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (
                    <div className="absolute right-0 top-7 hidden translate-x-1/2 text-gray-300 lg:block">
                      <FiArrowUpRight size={18} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT FORM AND SERVICE SIDEBAR */}
      <section
        id="project-form"
        className="scroll-mt-24 bg-[#F7F9FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-7 px-5 md:px-8 lg:grid-cols-[1.55fr_0.85fr] lg:px-10">
          {/* PROJECT BRIEF FORM */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A8FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Project Details
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-4xl">
              Tell us about
              <span className="text-[#FF2095]"> your project.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Complete the form below so we can understand your needs and
              discuss the next steps with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* NAME AND COMPANY */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-fullName"
                    className="text-sm font-semibold text-[#111111]">
                    Full Name <span className="text-[#FF2095]">*</span>
                  </label>
                  <input
                    id="project-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                    required
                    maxLength={100}/>
                </div>

                <div>
                  <label
                    htmlFor="project-companyName"
                    className="text-sm font-semibold text-[#111111]">
                    Company / Organisation
                  </label>
                  <input
                    id="project-companyName"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    className={inputClass}
                    maxLength={150}/>
                </div>
              </div>

              {/* EMAIL AND PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-email"
                    className="text-sm font-semibold text-[#111111]">
                    Email Address <span className="text-[#FF2095]">*</span>
                  </label>
                  <input
                    id="project-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                    maxLength={254}/>
                </div>

                <div>
                  <label
                    htmlFor="project-phone"
                    className="text-sm font-semibold text-[#111111]">
                    Phone / WhatsApp{" "}
                    <span className="text-[#FF2095]">*</span>
                  </label>
                  <input
                    id="project-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 ..."
                    className={inputClass}
                    required
                    maxLength={30}/>
                </div>
              </div>

              {/* SERVICE AND QUANTITY */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="project-service"
                    className="text-sm font-semibold text-[#111111]">
                    Service Interested In{" "}
                    <span className="text-[#FF2095]">*</span>
                  </label>
                  <select
                    id="project-service"
                    name="service"
                    defaultValue=""
                    className={inputClass}
                    required>
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}

                    <option value="Multiple Services">
                      Multiple Services
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-quantity"
                    className="text-sm font-semibold text-[#111111]">
                    Estimated Quantity
                  </label>
                  <input
                    id="project-quantity"
                    name="quantity"
                    type="text"
                    placeholder="e.g. 200 pieces"
                    className={inputClass}
                    maxLength={100}/>
                </div>
              </div>

              {/* TIMELINE */}
              <div>
                <label
                  htmlFor="project-timeline"
                  className="text-sm font-semibold text-[#111111]">
                  Expected Timeline
                </label>
                <select
                  id="project-timeline"
                  name="timeline"
                  defaultValue=""
                  className={inputClass}>
                  <option value="">Select your preferred timeline</option>
                  <option value="As soon as possible">
                    As soon as possible
                  </option>
                  <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Flexible timeline">Flexible timeline</option>
                  <option value="To be discussed">To be discussed</option>
                </select>
              </div>

              {/* PROJECT DESCRIPTION */}
              <div>
                <label
                  htmlFor="project-details"
                  className="text-sm font-semibold text-[#111111]">
                  Project Details <span className="text-[#FF2095]">*</span>
                </label>
                <textarea
                  id="project-details"
                  name="projectDetails"
                  rows={6}
                  placeholder="Tell us about your project, specifications, quantity, preferred materials, deadline, or any special requirements..."
                  className={`${inputClass} resize-y`}
                  required
                  minLength={10}
                  maxLength={5000}/>
              </div>

              {/* FORM FEEDBACK */}
              {formStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    formStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}>
                  {formStatus.type === "success" ? (
                    <FiCheckCircle
                      size={20}
                      className="mt-0.5 shrink-0"/>
                  ) : (
                    <FiMessageCircle
                      size={20}
                      className="mt-0.5 shrink-0"/>
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}

              {/* SUBMIT */}
              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FFCC00] px-7 py-4 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-white disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending Brief..." : "Submit Project Brief"}
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                </button>

                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                  <FiLock size={14} className="mt-0.5 shrink-0" />
                  Your information will be used to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* SERVICES */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-xl font-black text-[#111111]">
                Our Services
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Tell us which service your project requires.
              </p>

              <div className="mt-6 space-y-4">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#111111]"
                        style={{ backgroundColor: service.color }}>
                        <Icon size={18} />
                      </span>

                      <span className="text-sm font-semibold text-gray-700">
                        {service.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/services"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#111111] transition-colors hover:text-[#FF2095]">
                Explore All Services
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </Link>
            </div>

            {/* NEED HELP */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-xl font-black text-[#111111]">
                Need Help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Have questions before submitting your brief? Contact our team.
              </p>

              {businessPhone && (
                <a
                  href={`https://wa.me/${businessPhone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00A8FF] text-white">
                    <FiPhone size={19}/>
                  </span>

                  <span>
                    <span className="block text-sm font-bold text-[#111111]">
                      Phone / WhatsApp
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      {businessPhone}
                    </span>
                  </span>
                </a>
              )}

              {businessEmail && (
                <a
                  href={`mailto:${businessEmail}`}
                  className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF2095] text-white">
                    <FiMessageCircle size={19} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-[#111111]">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-xs text-gray-500">
                      {businessEmail}
                    </span>
                  </span>
                </a>
              )}

              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-[#111111] transition-all duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-white">
                Visit Contact Page
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </Link>
            </div>

            {/* PROCESS NOTE */}
            <div className="rounded-2xl bg-[#111111] p-6 text-white sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFCC00] text-[#111111]">
                <FiClock size={21} />
              </span>

              <h2 className="mt-5 text-lg font-bold">
                Every project starts with a conversation.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                We review your requirements and discuss scope, pricing,
                production details, and timeline before work begins.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-12 md:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#00A8FF]" />

          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FFCC00]" />

          <div className="pointer-events-none absolute -bottom-8 right-20 h-20 w-20 rounded-full bg-[#FF2095]" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Ready to bring your
              <span className="block text-[#FFCC00]">
                ideas to life?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Share your project requirements and take the first step
              toward turning your idea into finished work.
            </p>
          </div>

          <a
            href="#project-form"
            className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white">
            Complete Your Brief
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
          </a>
        </div>
      </section>
    </main>
  );
};

export default StartProject;
