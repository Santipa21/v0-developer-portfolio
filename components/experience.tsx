"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "./language-provider"

const experiencesData = {
  es: [
    {
      period: "2021 — Presente",
      title: "Webmaster / Frontend Developer Junior",
      company: "Flare",
      companyUrl: "#",
      description:
        "Diseño y desarrollo de email templates optimizados para diferentes dispositivos. Maquetación de landing pages atractivas y funcionales orientadas a conversión de leads. Gestión y actualización de contenidos a través de CMS. Planificación, segmentación y ejecución de campañas de email marketing con envíos masivos efectivos. Implementación de automatizaciones que optimizan procesos y reducen tiempos de ejecución. Desarrollo Front-End utilizando HTML5, CSS3, JavaScript y Tailwind.",
      technologies: ["JavaScript", "Emarsys", "AWS", "HubSpot", "WordPress", "AI", "React", "PHP"],
    },
    {
      period: "2020 — 2021",
      title: "Webmaster",
      company: "Destiny CO SAS",
      companyUrl: "#",
      description:
        "Diseño y envío de piezas de email marketing orientadas a comunicación efectiva y engagement. Actualización y gestión de briefs, asegurando claridad y alineación con los objetivos del proyecto. Carga, organización y depuración de bases de datos para campañas digitales. Implementación de automatizaciones que optimizaron procesos internos y mejoraron la eficiencia.",
      technologies: ["HTML", "CSS", "JavaScript", "Salesforce Marketing Cloud", "Responsys", "HubSpot", "Photoshop", "Illustrator"],
    },
  ],
  en: [
    {
      period: "2021 — Present",
      title: "Webmaster / Junior Frontend Developer",
      company: "Flare",
      companyUrl: "#",
      description:
        "Design and development of email templates optimized for different devices. Layout of attractive and functional landing pages focused on lead conversion. Content management and updates through CMS. Planning, segmentation, and execution of email marketing campaigns with effective mass mailings. Implementation of automations that optimize processes and reduce execution times. Front-End development using HTML5, CSS3, JavaScript, and Tailwind.",
      technologies: ["JavaScript", "Emarsys", "AWS", "HubSpot", "WordPress", "AI", "React", "PHP"],
    },
    {
      period: "2020 — 2021",
      title: "Webmaster",
      company: "Destiny CO SAS",
      companyUrl: "#",
      description:
        "Design and sending of email marketing pieces focused on effective communication and engagement. Updating and managing briefs, ensuring clarity and alignment with project objectives. Loading, organizing, and cleaning databases for digital campaigns. Implementation of automations that optimized internal processes and improved efficiency.",
      technologies: ["HTML", "CSS", "JavaScript", "Salesforce Marketing Cloud", "Responsys", "HubSpot", "Photoshop", "Illustrator"],
    },
  ],
}

function ExperienceCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiencesData.es)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background" />

      <div className="space-y-3">
        <span className="text-sm font-mono text-muted-foreground">
          {experience.period}
        </span>

        <h3 className="text-xl font-semibold text-foreground">
          {experience.title}{" "}
          <span className="text-accent">·</span>{" "}
          <Link
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            {experience.company}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t, language } = useLanguage()
  const experiences = experiencesData[language]

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-accent font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.experience.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t.experience.subtitle}
          </p>

          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title + experience.company}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
