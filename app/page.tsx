import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Hero } from "@/components/Hero";
import { IMCards } from "@/components/IMCards";

export default function Home() {
  return (
    <main
      className={`${styles.main} w-full relative bg-[#1A1C1E] max-w-screen-xl flex flex-col`}
    >
      <Header />
      <Hero />
      <Services />
      <IMCards />
    </main>
  );
}
