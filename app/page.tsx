import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features"

export default function Home() {
  return (
    <main
      className={`${styles.main} w-full bg-[#1A1C1E] max-w-screen-xl flex flex-col`}
    >
      <Header />
      <Hero />
      <Features />
      <Services />
    </main>
  );
}
