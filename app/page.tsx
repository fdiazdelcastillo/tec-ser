import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ContactInfo } from "@/components/ContactInfo";
import ComparisonTable from "@/components/ComparisonTable";
import Check from "@/public/Check.svg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className={`${styles.main} w-full relative bg-[#1A1C1E] max-w-screen-xl flex flex-col md:gap-[7rem] sm:gap-[5rem]`}
    >
      <Header />
      <Hero />
      <Features />
      <Services />
      <ComparisonTable
        card={[
          {
            title: "Sitio Web",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">200</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">160</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "3",
            despliegue: "1 TB/mes",
            refrescoUi: "Anual",
            iaChat: Check,
          },
          {
            title: "Catálogo Web",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">400</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">320</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "6",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Web",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">600</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">480</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "11",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Movil",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">1000</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">800</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "8",
            despliegue: "1 TB/mes",
            refrescoUi: "Cada 2 años",
            iaChat: Check,
          },
          {
            title: "Tienda Web y Movil",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">1400</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">1120</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "12",
            despliegue: "1 TB/mes",
            refrescoUi: "Anual",
            iaChat: Check,
          },
          {
            title: "IA Chat",
            precio: (
              <>
                <div>
                  us$ <span className="font-bold text-xl font-mont">100</span>
                  mes <br />
                  us$ <span className="font-bold text-xl font-mont">80</span>
                  mes
                </div>
              </>
            ),
            paginasIncluidas: "N/A",
            despliegue: "N/A",
            refrescoUi: "N/A",
            iaChat: "",
          },
        ]}
      />
      <Faq />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </main>
  );
}
