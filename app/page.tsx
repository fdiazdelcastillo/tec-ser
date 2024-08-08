import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={`${styles.main} bg-background`}>
      <h1 className="text-primary font-mont">Hola Equipo!</h1>
      <Header />
    </main>
  );
}
