import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main
      className={`${styles.main} w-full bg-background max-w-screen-xl flex`}
    >
      <Header />
    </main>
  );
}
