import { Project, SkillGroup, EducationItem, SocialLink } from './types';

export const portfolioData = {
  personal: {
    name: "BORIS JIMENEZ",
    title: "Estudiante de Ingeniería de Software",
    subtitle: "Desarrollo de Software Web & Arquitectura de Sistemas",
    tagline: "Apasionado por crear sistemas eficientes, modulares y escalables, especializándome en estructuración lógica, desarrollo web backend y bases de datos.",
    aboutLong: "Soy estudiante de Ingeniería de Software con un enfoque pragmático y técnico. Me apasiona resolver problemas complejos optimizando la estructura del código y cuidando la persistencia de los datos. Mi experiencia académica y autónoma se centra en el diseño de arquitecturas orientadas a objetos con Java y C++, sistemas de autenticación y bases de datos, complementado con el desarrollo frontend moderno mediante React y Tailwind CSS.",
    location: "Guayaquil, Ecuador", // Standard place or can be general
    email: "borisjimenezleon@gmail.com",
    avatar: "/Foto.png", // Ruta a tu foto, ej. "/avatar.jpg" (colocada en la carpeta public) o un enlace web
    avatarAlt: "Boris Jimenez Avatar"
  },

  socials: [
    {
      platform: 'github' as const,
      url: "https://github.com/Sttam69", // Generic GitHub or placeholder
      label: "GitHub"
    },
    {
      platform: 'linkedin' as const,
      url: "https://www.linkedin.com/in/boris-jim%C3%A9nez-le%C3%B3n-54b236369/", // Generic LinkedIn or placeholder
      label: "LinkedIn"
    },
    {
      platform: 'email' as const,
      url: "mailto:borisjimenezleon@gmail.com",
      label: "Correo Electrónico"
    }
  ] as SocialLink[],

  skills: [
    {
      categoryName: "Lenguajes de Programación",
      iconName: "Code2",
      skills: [
        { name: "Java", level: "Intermedio", category: "Languages" },
        { name: "C++", level: "Intermedio", category: "Languages" },
        { name: "JavaScript", level: "Junior", category: "Languages" },
        { name: "HTML / CSS", level: "Junior", category: "Languages" }
      ]
    },
    {
      categoryName: "Backend & Sistemas Web",
      iconName: "Server",
      skills: [
        { name: "Sistemas de Autenticación", level: "Junior", category: "Web" },
        { name: "Gestión de Múltiples Cuentas", level: "Junior", category: "Web" },
        { name: "Seguridad y Sesiones", level: "Junior", category: "Web" },
        { name: "Arquitectura MVC", level: "Junior", category: "Web" }
      ]
    },
    {
      categoryName: "Bases de Datos & Backend",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", level: "Junior", category: "Data" },
        { name: "MySQL / MariaDB", level: "Junior", category: "Data" },
        { name: "Modelado de Datos (DER/UML)", level: "Intermedio", category: "Data" },
        { name: "API RESTful Architecture", level: "Junior", category: "Data" }
      ]
    },
    {
      categoryName: "Herramientas & Frameworks",
      iconName: "Wrench",
      skills: [
        { name: "React (Vite)", level: "Junior", category: "Tools" },
        { name: "Tailwind CSS", level: "Junior", category: "Tools" },
        { name: "Git & GitHub", level: "Junior", category: "Tools" },
        { name: "Linux / Bash Shell", level: "Junior", category: "Tools" }
      ]
    }
  ] as SkillGroup[],

  projects: [
    {
      id: "proj-1",
      title: "Guardian Quill",
      description: "Videojuego interactivo desarrollado en GDevelop con mecánicas de acción y aventura.",
      longDescription: "Un proyecto de desarrollo de videojuegos creado utilizando GDevelop. 'Guardian Quill' presenta un entorno interactivo con mecánicas de juego pulidas, diseño de niveles dinámico y programación impulsada por eventos, ofreciendo una experiencia inmersiva para el usuario.",
      image: "guardian-quill",
      tags: ["GDevelop", "GameDev", "Lógica de Eventos", "Diseño de Niveles"],
      category: "gamedev",
      githubUrl: "https://github.com/Sttam69/Guardian-Quill.git",
      featured: true
    },
    {
      id: "proj-ligapro",
      title: "Plataforma Web LigaPro",
      description: "Aplicación web interactiva con interfaz moderna para la visualización y gestión de datos deportivos.",
      longDescription: "Desarrollo frontend enfocado en la experiencia de usuario (UX/UI), consumiendo datos estructurados para presentar estadísticas, equipos y métricas de forma dinámica. Desplegado en Netlify para alta disponibilidad.",
      image: "ligapro",
      tags: ["React", "JavaScript", "Tailwind CSS", "Despliegue Web"],
      category: "web",
      githubUrl: "https://github.com/Sttam69/Proyecto-LigaPro.git",
      liveUrl: "https://ligapro-borisjimenez.netlify.app/login",
      featured: true
    },
    {
      id: "proj-fmk",
      title: "Proyecto Web FMK",
      description: "Sitio web responsivo enfocado en la presentación de contenido multimedia y estructuración de interfaces.",
      longDescription: "Plataforma diseñada bajo principios de minimalismo técnico y adaptabilidad móvil (Mobile First). Optimización de recursos estáticos y flujos de navegación fluidos. Desplegado de forma continua mediante Netlify.",
      image: "fmk",
      tags: ["HTML/CSS", "JavaScript", "Diseño Responsivo", "Antigravity", "Netlify"],
      category: "web",
      githubUrl: "https://github.com/Sttam69/Proyecto-FMK.git",
      liveUrl: "https://proyectofmk.netlify.app/index.html",
      featured: false
    },
    {
      id: "proj-4",
      title: "Proyecto Hotel Administrativo",
      description: "Aplicación CRUD en Java con interfaz gráfica para el control centralizado de personal, habitaciones y facturación.",
      longDescription: "Más allá del desarrollo de interfaces, este proyecto representa una solución integral que une la ingeniería de software con el control administrativo y la lógica de negocios. Su arquitectura está diseñada para mantener la integridad de la información, aplicando principios de estructuración de datos y operaciones CRUD (Crear, Leer, Actualizar, Borrar) esenciales en el entorno empresarial. La precisión en el manejo de registros de personal y la exactitud en la generación de facturas demuestran un enfoque orientado a resolver problemas reales, garantizando que las operaciones se manejen con el rigor, la trazabilidad y la eficiencia que exige el control interno de una empresa.",
      image: "estrucdb",
      tags: ["Java (POO)", "Net Beans / Swing", "Estructuras de Datos", "Arquitectura CRUD", "UML"],
      category: "systems",
      githubUrl: "https://github.com/Sttam69/Proyecto-Hotel.git",
      featured: false
    },
    {
      id: "proj-5",
      title: "Portfolio Web Técnico",
      description: "Este portafolio personal interactivo diseñado bajo el paradigma de Minimalismo Técnico y estética visual Glassmorphic.",
      longDescription: "Sitio web modular implementado con React 19, Tailwind CSS y animaciones fluidas con Motion. Enfoque extremo en los estándares de accesibilidad visual, esquemas de diseño interactivo responsivo, micro-ficheros y contrastes de color verdes esmeralda.",
      image: "portfolio",
      tags: ["React", "Tailwind CSS", "Motion", "UX/UI"],
      category: "web",
      githubUrl: "https://github.com/Sttam69/Portafolio.git",
      featured: false
    }
  ] as Project[],

  education: [
    {
      id: "edu-1",
      institution: "Universidad de Guayaquil",
      degree: "Ingeniería en Software - 3 Semestres",
      period: "Actualmente cursando",
      description: "Estudios universitarios en Guayaquil, Ecuador. Enfocado en fundamentos teóricos, análisis algorítmico e ingeniería del ciclo de vida del software.",
      highlights: [
        "Promedio ponderado destacado",
        "Participación en proyectos académicos y prácticos"
      ],
      isCurrent: true
    },
    {
      id: "edu-2",
      institution: "Instituto Superior Tecnológico \"Simón Bolívar\"",
      degree: "Técnico en Electromecánica (Incompleto) - 3 Semestres",
      period: "2018 - 2020",
      description: "Estudios técnicos en modalidad presencial.",
      highlights: [
        "Fundamentos de electricidad, mecánica industrial e instrumentación y control."
      ]
    }
  ] as EducationItem[],

  experience: [
    {
      id: "exp-0",
      company: "Almacenes TÍA",
      role: "Trabajador Operativo",
      period: "Abril 2026 - Actual",
      location: "Guayaquil, Ecuador",
      description: "Gestión operativa integral involucrando diversas áreas de servicio en tienda.",
      highlights: [
        "Atención al cliente.",
        "Cajero.",
        "Perchero.",
        "Bodeguero."
      ]
    },
    {
      id: "exp-1",
      company: "BabySebas",
      role: "Asesor Comercial",
      period: "Junio 2022 - Febrero 2024",
      location: "Guayaquil, Ecuador",
      description: "Atención al cliente en tienda física y plataformas digitales (Instagram, WhatsApp, Facebook).",
      highlights: [
        "Vendedor de ropa femenina e infantil.",
        "Gestión de inventario y control de calidad.",
        "Apoyo en estrategias de marketing para aumentar ventas."
      ]
    },
    {
      id: "exp-2",
      company: "MJDOORS CIA, LDTA",
      role: "Asistente Administrativo",
      period: "Febrero 2019 - Marzo 2020",
      location: "Guayaquil, Ecuador",
      description: "Gestión y administración básica de recursos y atención al cliente en entorno corporativo.",
      highlights: [
        "Control y registros de inventarios y herramientas de bodega.",
        "Control y registros de horarios del personal.",
        "Control, registros y seguimientos de llamadas a clientes potenciales.",
        "Soporte técnico básico a equipos de oficina.",
        "Coordinación de reuniones, transportes y llamadas de cobranzas."
      ]
    }
  ]
};
