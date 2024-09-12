import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ContactInfo } from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import products from "@/data/products.json";
import ComparisonTable from "@/components/ComparisonTable";
import { Projects } from "@/components/Projects";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function Home() {
  return (
    <main
      className={`${styles.main} w-full relative bg-[#1A1C1E] max-w-screen-xl flex flex-col gap-16 md:gap-24 px-1 md:px-4`}
    >
      <Header />
      <Hero />
      <Features />
      <Services />
      <ComparisonTable card={products} />
      <Faq />
      <SkillsCarousel />
      <Projects />
      <ContactInfo />
      <Footer />
    </main>
  );
}
