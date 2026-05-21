import {
  FaCode,
  FaComments,
  FaEnvelope,
  FaGamepad,
  FaGithub,
  FaJava,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaShoppingCart,
  FaStore,
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiSass,
} from 'react-icons/si';

import bootstrapLogo from '../assets/img/logo-tecnologia/bootstrap-5-logo.jpg';
import cssLogo from '../assets/img/logo-tecnologia/png-logo-css.png';
import expressLogo from '../assets/img/logo-tecnologia/express-js.png';
import gitLogo from '../assets/img/logo-tecnologia/git-logo.png';
import htmlLogo from '../assets/img/logo-tecnologia/png-logo-html.png';
import javascriptLogo from '../assets/img/logo-tecnologia/javascript-logo.png';
import mongodbLogo from '../assets/img/logo-tecnologia/mongodb.svg';
import nestLogo from '../assets/img/logo-tecnologia/nestJS-logo.png';
import nodeLogo from '../assets/img/logo-tecnologia/nodejs-inner.png';
import reactLogo from '../assets/img/logo-tecnologia/React-logo.png';
import sassLogo from '../assets/img/logo-tecnologia/sass-logo.png';

export const personal = {
  name: 'Roque Molina',
  role: 'Software Developer',
  email: 'molinaroque871@gmail.com',
  phone: '+54 92940 403000',
  github: 'https://github.com/Roquemg18',
  linkedin: 'https://www.linkedin.com/in/roquemolina/',
  location: 'Bariloche, Argentina',
  languages: 'Español nativo, Inglés B1',
};

export const navLinks = [
  { href: '#experiencia', label: 'Experiencia', id: 'experiencia' },
  { href: '#sobre-mi', label: 'Sobre mí', id: 'sobre-mi' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
];

export const socialLinks = [
  { label: 'GitHub', href: personal.github, icon: FaGithub },
  { label: 'LinkedIn', href: personal.linkedin, icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${personal.email}`, icon: FaEnvelope },
  { label: 'Teléfono', href: 'tel:+5492940403000', icon: FaPhoneAlt },
];

export const skills = {
  frontend: [
    { name: 'HTML', logo: htmlLogo, icon: SiHtml5 },
    { name: 'CSS', logo: cssLogo, icon: SiCss },
    { name: 'Sass', logo: sassLogo, icon: SiSass },
    { name: 'JavaScript', logo: javascriptLogo, icon: SiJavascript },
    { name: 'React', logo: reactLogo, icon: FaReact },
    { name: 'Bootstrap', logo: bootstrapLogo, icon: SiBootstrap },
  ],
  backend: [
    { name: 'Node.js', logo: nodeLogo, icon: SiNodedotjs },
    { name: 'Express.js', logo: expressLogo, icon: SiExpress },
    { name: 'NestJS', logo: nestLogo, icon: SiNestjs },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'MongoDB', logo: mongodbLogo, icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Git', logo: gitLogo, icon: SiGit },
  ],
};

export const experiences = [
  {
    company: 'INVAP',
    role: 'Desarrollador de Software (Pasantía)',
    period: 'Julio 2025 - Junio 2026',
    tasks: [
      'Diseño y desarrollo de software en Python y C++ para sistemas de mensajería',
      'Configuración y mantenimiento de bases de datos NoSQL',
      'Pruebas de performance y despliegue de servidores de bases de datos',
      'Redacción de documentación técnica tradicional y en lenguaje MkDocs',
    ],
    tags: ['Python', 'C++', 'NoSQL', 'MkDocs'],
  },
  {
    company: 'Proyecto Freelance',
    role: 'Desarrollador Front End',
    period: 'Febrero 2023 - Marzo 2023',
    tasks: ['Diseño y desarrollo de páginas web', 'Maquetación'],
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

export const projects = [
  {
    title: 'Project Ecommerce',
    category: 'Ecommerce',
    icon: FaShoppingCart,
    description:
      'Ecommerce inspirado en la pagina de Nike. Incluye pagina de inicio, carrito de compras, login, filtros de productos, buscador y detalles de cada producto.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Roquemg18/project-1-ecommerce',
    demo: 'https://project-1-ecommerce-9as1.vercel.app/',
    demoIcon: FiExternalLink,
  },
  {
    title: 'Chat Real Time',
    category: 'Backend',
    icon: FaComments,
    description:
      'Backend de un chat con frontend simple. Incluye chat general, creacion de chats privados y busqueda de grupos de chat en tiempo real.',
    tags: ['React', 'Socket.io', 'Node.js'],
    github: 'https://github.com/Roquemg18/project-2-chatRealTime.git',
    demo: 'https://chat-realtime-a6y0.onrender.com',
    demoIcon: FiExternalLink,
  },
  {
    title: 'Sistema de Gestion de Supermercado',
    category: 'Desktop App',
    icon: FaStore,
    description:
      'Proyecto final de Programacion 2. Gestion de productos, descuentos y clientes premium con interfaz Swing y listado de inventario.',
    tags: ['Java', 'Swing'],
    github: 'https://github.com/Roquemg18/storeManagementSystem',
    demo: 'https://github.com/Roquemg18/storeManagementSystem',
    demoIcon: FiExternalLink,
  },
  {
    title: 'Casino Mines Game',
    category: 'Juego',
    icon: FaGamepad,
    description:
      'Proyecto final de Programacion 1 con minas ajustables, ganancias basadas en apuestas y ranking de jugadores con mayores ganancias.',
    tags: ['C', 'Archivos', 'Logica de juego'],
    github: 'https://github.com/Roquemg18/Project-Casino-Mines-Game',
    demo: 'https://github.com/Roquemg18/Project-Casino-Mines-Game',
    demoIcon: FiExternalLink,
  },
  {
    title: 'Portfolio Personal',
    category: 'Portfolio',
    icon: FaCode,
    description:
      'Sitio web personal con diseño responsivo, animaciones y despliegue en Vercel. Primera versión en HTML, CSS y JavaScript vanilla.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    github: 'https://github.com/Roquemg18',
  },
  {
    title: 'App React - Coder House',
    category: 'SPA',
    icon: FaReact,
    description:
      'Proyecto final del curso Front-End: aplicación SPA con React, manejo de estado con hooks, rutas con React Router y consumo de API REST.',
    tags: ['React', 'React Router', 'API REST', 'CSS'],
    github: 'https://github.com/Roquemg18',
  },
  {
    title: 'Proyectos en GitHub',
    category: 'Open Source',
    icon: FaGithub,
    description:
      'Colección de repositorios con ejercicios, experimentos y mini-proyectos de aprendizaje en JavaScript, React y utilidades CSS.',
    tags: ['JavaScript', 'React', 'Open Source'],
    github: 'https://github.com/Roquemg18',
    demo: 'https://github.com/Roquemg18',
    demoIcon: FiExternalLink,
  },
];

export const stats = [
  { value: '1 año+', label: 'Experiencia profesional' },
  { value: '10+', label: 'Tecnologías en stack' },
  { value: 'B1', label: 'Inglés' },
];

export const education = [
  {
    title: 'Ingeniería en Computación',
    institution: 'Universidad Nacional de Río Negro',
    period: 'Marzo 2023 - Diciembre 2028',
    featured: true,
  },
  {
    title: 'Desarrollador Backend',
    institution: 'Coder House',
    period: 'Febrero 2023 - Agosto 2023',
  },
  {
    title: 'Desarrollador Front End',
    institution: 'Coder House',
    period: 'Junio 2022 - Enero 2023',
  },
];
