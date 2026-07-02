import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="text-center mb-16">
      {eyebrow && (
        <p className="font-poppins text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-playfair text-4xl md:text-5xl text-charcoal dark:text-ivory font-bold leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-inter text-taupe-500 dark:text-taupe-300 text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative rule */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-12 bg-taupe-200 dark:bg-taupe-600" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="h-px w-12 bg-taupe-200 dark:bg-taupe-600" />
      </div>
    </Reveal>
  );
}
