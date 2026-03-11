export const translations = {
  es: {
    // Navigation
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    // Hero
    hero: {
      greeting: "Hola, soy",
      title: "Frontend Developer",
      description: "Creo experiencias web modernas y accesibles con React, Next.js y TypeScript. Apasionado por el código limpio y el diseño centrado en el usuario.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
    },
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Conóceme mejor",
      paragraph1: "Hola! Soy Santiago Patiño, un Frontend Developer apasionado por crear experiencias web elegantes y centradas en el usuario. Mi viaje en el desarrollo web comenzó hace varios años, y desde entonces he tenido el privilegio de trabajar en diversos proyectos que han dado forma a mis habilidades y perspectiva.",
      paragraph2: "Me especializo en construir aplicaciones web modernas usando React, Next.js y TypeScript. Estoy particularmente interesado en crear aplicaciones accesibles y de alto rendimiento que brinden experiencias de usuario excepcionales. Cuando no estoy programando, me encuentro explorando nuevas tecnologías y contribuyendo a proyectos open-source.",
      yearsExp: "Años de Experiencia",
      projectsCompleted: "Proyectos Completados",
      techStack: "Stack Tecnológico",
    },
    // Projects
    projects: {
      title: "Proyectos",
      subtitle: "Mis repositorios de GitHub",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      stars: "estrellas",
      forks: "forks",
      loading: "Cargando proyectos...",
      error: "Error al cargar los proyectos",
      noDescription: "Sin descripción disponible",
    },
    // Tech Stack
    techStack: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
      tools: "Herramientas",
    },
    // Experience
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
      present: "Presente",
    },
    // Contact
    contact: {
      title: "Contacto",
      subtitle: "Trabajemos juntos",
      description: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme!",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      emailMe: "Envíame un email a",
      orConnect: "O conéctate conmigo en",
    },
    // Footer
    footer: {
      description: "Frontend Developer creando experiencias web modernas con pasión y precisión.",
      quickLinks: "Enlaces Rápidos",
      connect: "Conectar",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    // Navigation
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hi, I'm",
      title: "Frontend Developer",
      description: "I build modern and accessible web experiences with React, Next.js, and TypeScript. Passionate about clean code and user-centered design.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    // About
    about: {
      title: "About Me",
      subtitle: "Get to know me",
      paragraph1: "Hello! I'm Santiago Patiño, a Frontend Developer passionate about creating elegant and user-centered web experiences. My journey in web development started several years ago, and since then I've had the privilege of working on diverse projects that have shaped my skills and perspective.",
      paragraph2: "I specialize in building modern web applications using React, Next.js, and TypeScript. I'm particularly interested in creating accessible, high-performance applications that provide exceptional user experiences. When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.",
      yearsExp: "Years of Experience",
      projectsCompleted: "Projects Completed",
      techStack: "Tech Stack",
    },
    // Projects
    projects: {
      title: "Projects",
      subtitle: "My GitHub repositories",
      viewProject: "View Project",
      viewCode: "View Code",
      stars: "stars",
      forks: "forks",
      loading: "Loading projects...",
      error: "Error loading projects",
      noDescription: "No description available",
    },
    // Tech Stack
    techStack: {
      title: "Tech Stack",
      subtitle: "Technologies I work with",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
    },
    // Experience
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      present: "Present",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      description: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      emailMe: "Email me at",
      orConnect: "Or connect with me on",
    },
    // Footer
    footer: {
      description: "Frontend Developer building modern web experiences with passion and precision.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.es
