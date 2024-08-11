import { GoCopilot, GoGlobe } from "react-icons/go";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { IconType } from "react-icons";

type NavbarData = { name: String; link: string }[];

export const navbarData: NavbarData = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Services", link: "#services" },
  { name: "FAQ", link: "#faq" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact Us", link: "#contactUs" },
];

type IconName = "copilot" | "globe" | "ai" | "catalog";

type ServicesData = {
  name: string;
  iconName: IconName;
  description: string;
  elements: string[];
  monthPrice: number;
  anualMonthPrice: number;
}[];

export const servicesData: ServicesData = [
  {
    name: "Sitio Web",
    iconName: "globe",
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
    iconName: "globe",
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
    iconName: "globe",
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
    iconName: "globe",
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
    iconName: "globe",
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
    iconName: "globe",
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
