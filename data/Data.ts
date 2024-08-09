type NavbarData = { name: String; link: string }[];

export const navbarData: NavbarData = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Services", link: "#services" },
  { name: "FAQ", link: "#faq" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact Us", link: "#contactUs" },
];

type ServicesData = {
  name: String;
  description: string;
  elements: string[];
  monthPrice: number;
  anualMonthPrice: number;
}[];

export const servicesData: ServicesData = [
  {
    name: "Sitio Web",
    description:
      "Ideal para startups y pequeños negocios que buscan establecer presencia online",
    elements: ["x"],
    monthPrice: 100,
    anualMonthPrice: 100,
  },
];
