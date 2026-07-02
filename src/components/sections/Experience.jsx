import { experience } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

function TimelineItem({ item, index, isLast }) {
  return (
    <Reveal delay={index * 0.12}>
      <div className="relative flex gap-8">
        {/* Line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-4 h-4 rounded-full border-2 border-gold bg-ivory dark:bg-charcoal-dark z-10" />
          {!isLast && (
            <div className="w-px flex-1 mt-2 bg-gradient-to-b from-gold/40 to-taupe-200/0 dark:from-gold/30 dark:to-transparent" />
          )}
        </div>

        {/* Card */}
        <div className={`pb-12 flex-1 ${isLast ? "" : ""}`}>
          {/* Duration pill */}
          <span className="inline-block font-poppins text-xs text-gold tracking-wider uppercase
            bg-taupe-100 dark:bg-taupe-700/30 px-3 py-1 rounded-full mb-3">
            {item.duration}
          </span>

          <div className="bg-white dark:bg-charcoal rounded-2xl p-6
            border border-taupe-100 dark:border-taupe-700/40 shadow-sm
            hover:shadow-md hover:border-gold/30 transition-all duration-300">
            <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-ivory leading-snug mb-1">
              {item.role}
            </h3>
            <p className="font-poppins text-sm font-medium text-gold mb-1">{item.company}</p>
            <p className="font-inter text-xs text-taupe-400 dark:text-taupe-400 mb-4">{item.location}</p>
            <p className="font-inter text-sm text-taupe-600 dark:text-taupe-300 leading-relaxed mb-4">
              {item.description}
            </p>
            {item.highlights && (
              <ul className="space-y-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 font-inter text-sm text-taupe-500 dark:text-taupe-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-ivory dark:bg-charcoal-dark">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="The roles and challenges that have shaped how I think about software."
        />

        <div className="mt-4">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
