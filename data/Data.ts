type NavbarData = { name: String; link: string }[];

export const navbarData: NavbarData = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Services", link: "#services" },
  { name: "FAQ", link: "#faq" },
  { name: "Projects", link: "#projects" },
  { name: "Stack", link: "#stack" },
  { name: "Contact Us", link: "#contactUs" },
];

type IconName = "globe" | "ai" | "catalog" | "scw" | "scm" | "scmw";

type ServicesData = {
  name: string;
  iconName: IconName[];
  description: string;
  elements: string[];
  monthPrice: number;
  anualMonthPrice: number;
}[];

export const servicesDataEs: ServicesData = [
  {
    name: "Sitio Web",
    iconName: ["ai", "globe", "catalog"],
    description:
      "Ideal para startups y pequeños negocios que buscan establecer presencia online",
    elements: [
      "Diseño de páginas: Landing Page, Blog, Artículo",
      "Refresco de UI anual",
      "Despliegue (1 TB/mes)",
      "IA Chat (1K consultas/mes)",
    ],
    monthPrice: 200,
    anualMonthPrice: 160,
  },
  {
    name: "Catálogo Web",
    iconName: ["globe", "catalog", "scw"],
    description:
      "Ideal para negocios en crecimiento que quieren mostrar sus productos o servicios",
    elements: [
      "Diseño de 6 páginas: Inicio, Catálogo, Producto/Servicio, Contáctenos, Blog, Artículo",
      "Refresco de UI cada 2 años",
      "Despliegue (1 TB/mes)",
      "IA Chat (1K consultas/mes)",
    ],
    monthPrice: 400,
    anualMonthPrice: 320,
  },
  {
    name: "Tienda Web",
    iconName: ["catalog", "scw", "scm"],
    description:
      "Ideal para empresas listas para vender online y gestionar pedidos",
    elements: [
      "Diseño de 11 páginas: Inicio, Catálogo, Producto/Servicio, Carrito, Checkout, Inicio de sesión, Pedidos, Pedido individual, Contáctenos, Blog, Artículo",
      "Refresco de UI cada 2 años",
      "Despliegue (1 TB/mes)",
      "IA Chat (1K consultas/mes)",
    ],
    monthPrice: 600,
    anualMonthPrice: 480,
  },
  {
    name: "Tienda Móvil",
    iconName: ["scw", "scm", "scmw"],
    description:
      "Ideal para negocios enfocados en ventas a través de dispositivos móviles",
    elements: [
      "Interfaz móvil con: Catálogo, Producto, Carrito de compras, Checkout, Inicio de sesión, Pedidos, Pedido individual, Formulario de soporte",
      "Refresco de UI cada 2 años",
      "Despliegue (1 TB/mes)",
      "IA Chat (1K consultas/mes)",
    ],
    monthPrice: 1000,
    anualMonthPrice: 800,
  },
  {
    name: "Tienda Móvil & Web",
    iconName: ["scm", "scmw", "ai"],
    description:
      "Ideal para empresas que buscan una solución omnicanal completa",
    elements: [
      "Todos los servicios de Tienda Móvil",
      "Todos los servicios de Tienda Web",
      "Sincronización perfecta entre plataformas",
    ],
    monthPrice: 1400,
    anualMonthPrice: 1120,
  },
  {
    name: "IA Chat",
    iconName: ["scmw", "ai", "globe"],
    description:
      "Ideal para cualquier negocio que quiera mejorar la atención al cliente 24/7",
    elements: [
      "1K Consultas / mes",
      "Contextualización basada en Sitio Web / Base de Datos de Conocimiento",
      "Integración con Sitio Web",
    ],
    monthPrice: 100,
    anualMonthPrice: 80,
  },
];

export const servicesDataEn: ServicesData = [
  {
    name: "Website",
    iconName: ["ai", "globe", "catalog"],
    description:
      "Ideal for startups and small businesses looking to establish an online presence",
    elements: [
      "Page design: Landing Page, Blog, Article",
      "Annual UI refresh",
      "Deployment (1 TB/month)",
      "AI Chat (1K queries/month)",
    ],
    monthPrice: 200,
    anualMonthPrice: 160,
  },
  {
    name: "Web Catalog",
    iconName: ["globe", "catalog", "scw"],
    description:
      "Ideal for growing businesses that want to showcase their products or services",
    elements: [
      "Design of 6 pages: Home, Catalog, Product/Service, Contact Us, Blog, Article",
      "UI refresh every 2 years",
      "Deployment (1 TB/month)",
      "AI Chat (1K queries/month)",
    ],
    monthPrice: 400,
    anualMonthPrice: 320,
  },
  {
    name: "Web Store",
    iconName: ["catalog", "scw", "scm"],
    description: "Ideal for companies ready to sell online and manage orders",
    elements: [
      "Design of 11 pages: Home, Catalog, Product/Service, Cart, Checkout, Login, Orders, Individual Order, Contact Us, Blog, Article",
      "UI refresh every 2 years",
      "Deployment (1 TB/month)",
      "AI Chat (1K queries/month)",
    ],
    monthPrice: 600,
    anualMonthPrice: 480,
  },
  {
    name: "Mobile Store",
    iconName: ["scw", "scm", "scmw"],
    description: "Ideal for businesses focused on sales through mobile devices",
    elements: [
      "Mobile interface with: Catalog, Product, Shopping Cart, Checkout, Login, Orders, Individual Order, Support Form",
      "UI refresh every 2 years",
      "Deployment (1 TB/month)",
      "IA Chat (1K consultas/mes)",
    ],
    monthPrice: 1000,
    anualMonthPrice: 800,
  },
  {
    name: "Mobile & Web Store",
    iconName: ["scm", "scmw", "ai"],
    description: "Ideal for companies seeking a complete omnichannel solution",
    elements: [
      "All Mobile Store services",
      "All Web Store services",
      "Seamless synchronization between platforms",
    ],
    monthPrice: 1400,
    anualMonthPrice: 1120,
  },
  {
    name: "AI Chat",
    iconName: ["scmw", "ai", "globe"],
    description:
      "Ideal for any business wanting to improve customer service 24/7",
    elements: [
      "1K Queries/month",
      "Contextualization based on Website/Knowledge Base",
      "Website Integration",
    ],
    monthPrice: 100,
    anualMonthPrice: 80,
  },
];

export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
