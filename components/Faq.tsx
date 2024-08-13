"use client";
import { Space_Mono } from "next/font/google";
import {Accordion} from "./Accordion";

export const Faq = () => {

    return (
        <div className="mt-24 px-10">
           <Accordion
           title={<span>¿Qué significa el despliegue de 1 TB/mes?</span>}
           answer={<p className="mt-4">Imagina poder enviar hasta 1 terabyte (1,000 gigabytes) de contenido a tus visitantes cada mes. Eso es lo que significa un despliegue de 1 TB/mes.</p>}
           />
           <Accordion
           title={<span>¿Cómo funciona el refresco de UI?</span>}
           answer={<p className="mt-4">El refresco de la interfaz de usuario (UI) es un proceso esencial para mantener, tu aplicación o sitio web, actualizados y receptivos. Aquí te explicamos cómo funciona y por qué es importante para ti:</p>}
           />
        </div>
    );
}