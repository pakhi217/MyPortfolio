import { education } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function EducationCard({ item, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="relative flex gap-8">
        {/* Timeline dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-4 h-4 rounded-full border-2 border-sage-400 bg-warm-white dark:bg-charcoal z-10" />
          {index < education.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-gradient-to-b from-sage-300/60 to-transparent" />
          )}
        </div>

        <div className="pb-10 flex-1">
          <span className="inline-block font-poppins text-xs text-sage-500 dark:text-sage-300 tracking-wider uppercase
            bg-sage-50 dark:bg-sage-900/20 px-3 py-1 rounded-full mb-3">
            {item.duration}
          </span>

          <div className="bg-white dark:bg-charcoal-light/20 rounded-2xl p-6
            border border-taupe-100 dark:border-taupe-700/40
            hover:shadow-md hover:border-sage-300/40 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
              <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-ivory leading-snug">
                {item.degree}
              </h3>
              {item.grade && (
                <span className="font-poppins text-xs font-semibold text-sage-500 dark:text-sage-400
                  bg-sage-50 dark:bg-sage-900/30 px-3 py-1 rounded-full flex-shrink-0">
                  {item.grade}
                </span>
              )}
            </div>
            <p className="font-poppins text-sm font-medium text-sage-500 dark:text-sage-400 mb-1">{item.institution}</p>
            <p className="font-inter text-xs text-taupe-400 mb-3">{item.location}</p>
            <p className="font-inter text-sm text-taupe-600 dark:text-taupe-300 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-warm-white dark:bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="The foundation that informs everything I build."
        />

        <div className="mt-4">
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
