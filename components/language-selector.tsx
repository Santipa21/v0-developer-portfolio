"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50">
      <button
        onClick={() => setLanguage("es")}
        className="relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
        aria-label="Cambiar a español"
      >
        {language === "es" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-accent rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className={`relative z-10 ${language === "es" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          ES
        </span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className="relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
        aria-label="Switch to English"
      >
        {language === "en" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-accent rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className={`relative z-10 ${language === "en" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          EN
        </span>
      </button>
    </div>
  )
}

export function LanguageSelectorMobile() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1 p-1 rounded-full bg-secondary/50">
        <button
          onClick={() => setLanguage("es")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            language === "es"
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Español
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            language === "en"
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          English
        </button>
      </div>
    </div>
  )
}
