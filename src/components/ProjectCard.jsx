import { motion } from "framer-motion";

export default function ProjectCard({ project, index, total }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-warm md:aspect-[16/10]">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute left-0 top-0 bg-cream/90 px-3 py-2 backdrop-blur-sm">
          <span className="editorial-eyebrow text-ink">
            {project.number} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-6">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-[13px] text-ink-faint">{project.location}</p>
        </div>
        <p className="hidden text-[12px] italic text-ink-faint md:block">
          {project.note}
        </p>
      </div>
    </motion.article>
  );
}
