
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiLock,
  FiPrinter,
  FiLayers,
} from "react-icons/fi";

const CONTACT = {
  // Add the verified business details to your .env file.
  phone: import.meta.env.VITE_CMYK_PHONE || "",
  email: import.meta.env.VITE_CMYK_EMAIL || "",
  hours: import.meta.env.VITE_CMYK_BUSINESS_HOURS || "",
  address:
    "No. 1 Omotayo Ojo Street, Off Allen Avenue, Ikeja, Lagos 100001, Nigeria",
  heroImage: import.meta.env.VITE_CMYK_CONTACT_HERO_IMAGE || "",
};

const serviceOptions = [
  "Sublimation Printing",
  "DTF Printing (Boardless)",
  "Branding",
  "Sewing",
  "Graphic Design",
  "Multiple Services",
  "Other Project",
];

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus(null);

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setFormStatus({
        type: "error",
        message:
          "The contact form is not connected yet. Please configure the EmailJS settings before submitting.",
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
          "Your project enquiry has been sent successfully. Thank you for contacting CMYK Studios.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setFormStatus({
        type: "error",
        message:
          "We could not send your enquiry. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#111111] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/10";

  return (
    <main>
      {/* =====================================================
          CONTACT HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[400px] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FFCC00]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let's talk about
              <span className="block text-[#FFCC00]">
                your project.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Have a project in mind? Tell us what you need, and let's
              discuss how CMYK Studios can turn your ideas into quality
              finished work.
            </p>

            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-white">
              Tell Us About Your Project

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </a>
          </div>

          {/* HERO IMAGE WITH ORIGINAL WRITE-UP */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#FFCC00] sm:-right-5 sm:-top-5" />

            {/* Image fills the complete box */}
            <div className="group relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#202020]">
              <img
                src={
                  CONTACT.heroImage ||
                  "https://res.cloudinary.com/lglx4hzk/image/upload/v1792035330/IMG_4593.png"
                }
                alt="CMYK Studios workspace"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"/>

              {/* Dark overlay for readable text */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Original write-up */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-2 -skew-x-12 bg-[#00A8FF]" />
                  <span className="h-10 w-2 -skew-x-12 bg-[#FF2095]" />
                  <span className="h-10 w-2 -skew-x-12 bg-[#FFCC00]" />

                  <span className="text-sm font-black tracking-widest text-white">
                    CMYK STUDIOS
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-200">
                    Print · Brand · Create
                  </p>

                  <h2 className="mt-4 max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                    Every great project starts with a conversation.
                  </h2>

                  <div className="mt-6 flex items-center gap-3 text-sm text-gray-200">
                    <FiLayers size={16} />
                    Let's discuss your next project.
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#00A8FF] sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10">
          {/* PHONE */}
          <article className="rounded-2xl bg-[#F7F9FA] p-6 transition-colors duration-300 hover:bg-gray-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFCC00] text-[#111111]">
              <FiPhone size={21} />
            </span>

            <h2 className="mt-5 text-lg font-bold text-[#111111]">
              Phone / WhatsApp
            </h2>

            {CONTACT.phone ? (
              <>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-3 block break-words text-sm font-medium text-gray-700 hover:text-[#00A8FF]">
                  {CONTACT.phone}
                </a>

                <a
                  href={`https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-[#111111]">
                  Chat on WhatsApp
                  <FiArrowUpRight size={13} />
                </a>
              </>
            ) : (
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Official business number to be added before launch.
              </p>
            )}
          </article>

          {/* EMAIL */}
          <article className="rounded-2xl bg-[#F7F9FA] p-6 transition-colors duration-300 hover:bg-gray-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00A8FF] text-white">
              <FiMail size={21} />
            </span>

            <h2 className="mt-5 text-lg font-bold text-[#111111]">
              Email
            </h2>

            {CONTACT.email ? (
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block break-words text-sm leading-6 text-gray-700 hover:text-[#00A8FF]">
                {CONTACT.email}
              </a>
            ) : (
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Official business email to be added before launch.
              </p>
            )}

            <p className="mt-3 text-xs leading-5 text-gray-500">
              You can also send an enquiry using the form below.
            </p>
          </article>

          {/* LOCATION */}
          <article className="rounded-2xl bg-[#F7F9FA] p-6 transition-colors duration-300 hover:bg-gray-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF2095] text-white">
              <FiMapPin size={21} />
            </span>

            <h2 className="mt-5 text-lg font-bold text-[#111111]">
              Our Location
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              No. 1 Omotayo Ojo Street,
              <br />
              Off Allen Avenue,
              <br />
              Ikeja, Lagos 100001, Nigeria
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                CONTACT.address
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#00A8FF]">
              Get Directions
              <FiArrowUpRight size={14} />
            </a>
          </article>

          {/* PROJECT ENQUIRIES */}
          <article className="rounded-2xl bg-[#F7F9FA] p-6 transition-colors duration-300 hover:bg-gray-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
              <FiClock size={21}/>
            </span>

            <h2 className="mt-5 text-lg font-bold text-[#111111]">
              Project Enquiries
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Share your requirements, expected quantity, and desired
              timeline so we can better understand your project.
            </p>

            <a
              href="#contact-form"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#111111] hover:text-[#FF2095]">
              Send an Enquiry
              <FiArrowUpRight size={14} />
            </a>
          </article>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM AND MAP
      ===================================================== */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          {/* FORM */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00A8FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Send Us a Message
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#111111] sm:text-5xl">
              Tell us about
              <span className="block text-[#FF2095]">
                your project.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Fill out the form below with a few details about your
              requirements. The more we understand your brief, the better
              we can discuss the right production solution.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5">
              {/* NAME AND COMPANY */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-[#111111]">
                    Full Name <span className="text-[#FF2095]">*</span>
                  </label>

                  <input
                    id="fullName"
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
                    htmlFor="companyName"
                    className="text-sm font-semibold text-[#111111]">
                    Company / Organisation
                  </label>

                  <input
                    id="companyName"
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
                    htmlFor="email"
                    className="text-sm font-semibold text-[#111111]">
                    Email Address <span className="text-[#FF2095]">*</span>
                  </label>

                  <input
                    id="email"
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
                    htmlFor="phone"
                    className="text-sm font-semibold text-[#111111]">
                    Phone / WhatsApp <span className="text-[#FF2095]">*</span>
                  </label>

                  <input
                    id="phone"
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
                    htmlFor="service"
                    className="text-sm font-semibold text-[#111111]">
                    Service Interested In{" "}
                    <span className="text-[#FF2095]">*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className={inputClass}
                    required>
                    <option value="" disabled>
                      Select a service
                    </option>

                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="text-sm font-semibold text-[#111111]">
                    Estimated Quantity
                  </label>

                  <input
                    id="quantity"
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
                  htmlFor="timeline"
                  className="text-sm font-semibold text-[#111111]">
                  Expected Timeline
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className={inputClass}>
                  <option value="">
                    Select your preferred timeline
                  </option>
                  <option value="As soon as possible">
                    As soon as possible
                  </option>
                  <option value="Within 1–2 weeks">
                    Within 1–2 weeks
                  </option>
                  <option value="Within 1 month">
                    Within 1 month
                  </option>
                  <option value="Flexible timeline">
                    Flexible timeline
                  </option>
                  <option value="To be discussed">
                    To be discussed
                  </option>
                </select>
              </div>

              {/* PROJECT DETAILS */}
              <div>
                <label
                  htmlFor="projectDetails"
                  className="text-sm font-semibold text-[#111111]">
                  Project Details <span className="text-[#FF2095]">*</span>
                </label>

                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={6}
                  placeholder="Tell us about your project, specifications, quantity, preferred materials, deadline, or any special requirements..."
                  className={`${inputClass} resize-y`}
                  required
                  minLength={10}
                  maxLength={5000}/>
              </div>

              {/* SUBMISSION FEEDBACK */}
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
                    <FiMail
                      size={20}
                      className="mt-0.5 shrink-0"/>
                  )}

                  <p>{formStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFCC00] px-7 py-4 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#111111] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {isSubmitting ? "Sending Enquiry..." : "Send Message"}

                <FiSend
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"/>
              </button>

              <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                <FiLock size={14} className="mt-0.5 shrink-0" />

                Your information will be used to respond to your project
                enquiry. Please don't include passwords or sensitive
                personal information.
              </p>
            </form>
          </div>

          {/* LOCATION MAP */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#FF2095]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Find Our Studio
              </span>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F7F9FA]">
              <iframe
                title="Map showing the CMYK Studios location in Ikeja, Lagos"
                src="https://maps.google.com/maps?q=No%201%20Omotayo%20Ojo%20Street%2C%20Off%20Allen%20Avenue%2C%20Ikeja%2C%20Lagos%20100001%2C%20Nigeria&output=embed"
                className="h-[350px] w-full border-0 sm:h-[430px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>

              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white">
                    <FiMapPin size={22} />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      CMYK Studios
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      No. 1 Omotayo Ojo Street,
                      <br />
                      Off Allen Avenue,
                      <br />
                      Ikeja, Lagos 100001, Nigeria
                    </p>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        CONTACT.address
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#00A8FF]">
                      Open in Google Maps

                      <FiArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                    </a>
                  </div>
                </div>
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
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Ready to bring your
              <span className="block text-[#FFCC00]">
                ideas to life?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Share your project brief and let's discuss the right
              production solution for your business.
            </p>
          </div>

          <Link
            to="/start-project"
            className="group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#111111] transition-colors duration-300 hover:bg-[#FFCC00]">
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

export default Contact;