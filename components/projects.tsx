"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import useSWR from "swr"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { useLanguage } from "./language-provider"

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
  Go: "bg-cyan-500",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  default: "bg-accent",
}

function ProjectSkeleton() {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2 mb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-16" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  )
}

function ProjectCard({ repo, index, noDescription }: { repo: Repository; index: number; noDescription: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {repo.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="sr-only">Live demo</span>
            </Link>
          )}
          <Link
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="sr-only">View on GitHub</span>
          </Link>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
        {repo.description || noDescription}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        {repo.language && (
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                languageColors[repo.language] || languageColors.default
              }`}
            />
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()
  
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Santipa21"
  const { data: repos, error, isLoading } = useSWR<Repository[]>(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-accent font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t.projects.subtitle}
          </p>

          {error && (
            <div className="text-center text-muted-foreground">
              {t.projects.error}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {isLoading && (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            )}
            {repos?.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} noDescription={t.projects.noDescription} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              {t.projects.viewCode} GitHub
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
