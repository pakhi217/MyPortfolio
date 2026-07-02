import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const categoryColors = {
  Frontend: { bar: "from-rose-dusty to-rose-light", bg: "bg-rose-pale dark:bg-rose-dusty/10", text: "text-rose-dusty" },
  Backend: { bar: "from-sage-400 to-sage-300", bg: "bg-sage-50 dark:bg-sage-900/20", text: "text-sage-500" },
  "AI & ML": { bar: "from-gold to-gold-light", bg: "bg-taupe-100 dark:bg-taupe-700/20", text: "text-gold" },
  "Tools & DevOps": { bar: "from-taupe-400 to-taupe-300", bg: "bg-taupe-100/60 dark:bg-taupe-700/10", text: "text-taupe-500" },
};

function SkillBar({ name, level, barClass, delay }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-inter text-sm text-charcoal dark:text-ivory font-medium">{name}</span>
        <span className="font-inter text-xs text-taupe-500 dark:text-taupe-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-taupe-100 dark:bg-taupe-700/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${barClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-ivory dark:bg-charcoal-dark">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="My Expertise"
          title="Skills & Technologies"
          subtitle="A curated selection of the tools and technologies I work with every day."
        />

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          {skills.map((group, gi) => {
            const colors = categoryColors[group.category] || categoryColors["Tools & DevOps"];
            return (
              <Reveal key={group.category} delay={gi * 0.1}>
                <div className={`rounded-3xl p-7 border border-taupe-100/80 dark:border-taupe-700/30
                  ${colors.bg} backdrop-blur-sm hover:shadow-md transition-shadow duration-300`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`font-poppins text-xs tracking-widest uppercase font-semibold ${colors.text}`}>
                      {group.category}
                    </span>
                  </div>
                  {group.items.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      barClass={colors.bar}
                      delay={si * 0.08}
                    />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
