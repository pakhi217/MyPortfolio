import { useState } from "react";
import { motion } from "framer-motion";
import { personal, social, contact } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: social.github, label: "GitHub" },
  { icon: FaLinkedin, href: social.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: social.instagram, label: "Instagram" },
  { icon: FaTwitter, href: social.twitter, label: "Twitter" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "sent" | null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission — replace with your own API/Formspree/etc.
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-warm-white dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        {/* Availability badge */}
        <Reveal>
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center gap-2 font-inter text-sm text-sage-600 dark:text-sage-400
              bg-sage-50 dark:bg-sage-900/20 border border-sage-200 dark:border-sage-700/40
              px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
              {contact.availability}
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <Reveal>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-ivory mb-6">
                Let's Connect
              </h3>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-pale dark:bg-rose-dusty/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope size={14} className="text-rose-dusty" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-taupe-400 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${personal.email}`}
                      className="font-inter text-sm text-charcoal dark:text-ivory hover:text-gold transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                {personal.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-50 dark:bg-sage-900/20 flex items-center justify-center flex-shrink-0">
                      <FaPhone size={14} className="text-sage-500" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-taupe-400 uppercase tracking-wider">Phone</p>
                      <a href={`tel:${personal.phone}`}
                        className="font-inter text-sm text-charcoal dark:text-ivory hover:text-gold transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-taupe-100 dark:bg-taupe-700/30 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt size={14} className="text-taupe-500" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-taupe-400 uppercase tracking-wider">Location</p>
                    <p className="font-inter text-sm text-charcoal dark:text-ivory">{personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="font-inter text-xs text-taupe-400 uppercase tracking-widest mb-4">Social</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-taupe-200 dark:border-taupe-700
                        flex items-center justify-center text-taupe-500 dark:text-taupe-400
                        hover:border-gold hover:text-gold transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <div className="bg-white dark:bg-charcoal-light/20 rounded-3xl p-8
              border border-taupe-100 dark:border-taupe-700/40 shadow-sm">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="text-4xl mb-4">✉️</div>
                  <h4 className="font-playfair text-2xl font-bold text-charcoal dark:text-ivory mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-inter text-sm text-taupe-500 dark:text-taupe-300">
                    Thank you for reaching out. I'll be in touch soon.
                  </p>
                  <button
                    onClick={() => { setStatus(null); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-gold text-gold text-sm font-inter
                      hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-taupe-500 uppercase tracking-wider block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-taupe-200 dark:border-taupe-700/50
                          bg-ivory dark:bg-charcoal font-inter text-sm text-charcoal dark:text-ivory
                          placeholder:text-taupe-300 dark:placeholder:text-taupe-600
                          focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-taupe-500 uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-taupe-200 dark:border-taupe-700/50
                          bg-ivory dark:bg-charcoal font-inter text-sm text-charcoal dark:text-ivory
                          placeholder:text-taupe-300 dark:placeholder:text-taupe-600
                          focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-taupe-500 uppercase tracking-wider block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Let's work together"
                      className="w-full px-4 py-3 rounded-xl border border-taupe-200 dark:border-taupe-700/50
                        bg-ivory dark:bg-charcoal font-inter text-sm text-charcoal dark:text-ivory
                        placeholder:text-taupe-300 dark:placeholder:text-taupe-600
                        focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-taupe-500 uppercase tracking-wider block mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-taupe-200 dark:border-taupe-700/50
                        bg-ivory dark:bg-charcoal font-inter text-sm text-charcoal dark:text-ivory
                        placeholder:text-taupe-300 dark:placeholder:text-taupe-600
                        focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-full bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal
                      font-inter font-medium text-sm hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-white
                      transition-all duration-300 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
