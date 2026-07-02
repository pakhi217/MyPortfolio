import { achievements } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 bg-ivory dark:bg-charcoal-dark">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Honours"
          subtitle="Milestones that mark the journey, each one a reminder of what's possible."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="group relative rounded-3xl p-6
                bg-white dark:bg-charcoal border border-taupe-100 dark:border-taupe-700/40
                hover:shadow-lg hover:border-gold/30 dark:hover:border-gold/20
                transition-all duration-400 overflow-hidden">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20
                  bg-gradient-to-bl from-gold-light/20 to-transparent rounded-bl-3xl" />

                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-charcoal dark:text-ivory mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="font-poppins text-xs text-gold font-medium mb-1">{item.organisation}</p>
                <p className="font-inter text-xs text-taupe-400 dark:text-taupe-500 mb-3">{item.year}</p>
                <p className="font-inter text-sm text-taupe-600 dark:text-taupe-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
