"use client";

import { Accordion } from "./Accordion";

export const Faq = () => {
  return (
    <section id="faq" className="mt-24 px-3 md:px-10">
      <Accordion
        title={
          <span className="text-xl">
            ¿Qué significa el despliegue de 1 TB/mes?
          </span>
        }
        answer={
          <>
            <p className="mt-6">
              Imagina poder enviar hasta 1 terabyte (1,000 gigabytes) de
              contenido a tus visitantes cada mes. Eso es lo que significa un
              despliegue de 1 TB/mes.
            </p>
            <p>Ejemplo Real:</p>
            <ul className="list-disc list-outside ml-5">
              <li>
                Contenido: Texto, imágenes, CSS, JavaScript y algunos videos
                incrustados.
              </li>
              <li>Peso medio por página: 4 MB.</li>
              <li>
                Ancho de banda disponible: 1 TB (1,000 GB) = 1,000,000 MB.
              </li>
              <li>
                Número de vistas de página posibles: 1,000,000 MB / 4 MB =
                250,000 vistas.
              </li>
            </ul>
            <p>
              Si cada visitante ve, en promedio, 2 páginas, podrías recibir
              hasta 125,000 visitantes al mes sin preocuparte por exceder tu
              límite.
            </p>
            <p>
              Recuerda, si superas este límite, se aplicará una cuota adicional.
              ¡Así que nuestro equipo de desarrolladores velará para aprovechar
              al máximo tu ancho de banda!
            </p>
          </>
        }
      />
      <Accordion
        title={
          <span className="text-xl">¿Cómo funciona el refresco de UI?</span>
        }
        answer={
          <>
            <p className="mt-5">
              El refresco de la interfaz de usuario (UI) es un proceso esencial
              para mantener, tu aplicación o sitio web, actualizados y
              receptivos. Aquí te explicamos cómo funciona y por qué es
              importante para ti:
            </p>
            <ol className="list-decimal list-outside ml-4">
              <li>
                Atención al Cliente 24/7: Con el IA Chat, tus clientes pueden
                obtener respuestas inmediatas a sus preguntas en cualquier
                momento del día, mejorando significativamente la satisfacción
                del cliente.
              </li>
              <li>
                Aumento de la Eficiencia: Automatiza tareas repetitivas como
                responder preguntas frecuentes, gestionar citas o procesar
                pedidos, permitiendo que tu equipo se enfoque en tareas más
                estratégicas.
              </li>
              <li>
                Experiencia Personalizada: El IA Chat puede analizar las
                interacciones de los clientes y ofrecer recomendaciones
                personalizadas, lo que aumenta la probabilidad de conversión y
                fidelización.
              </li>
              <li>
                Reducción de Costos: Al automatizar la atención al cliente,
                puedes reducir los costos operativos asociados con la
                contratación y capacitación de personal adicional, sin
                comprometer la calidad del servicio.
              </li>
              <li>
                Integración Sencilla: Se puede integrar fácilmente con tu sitio
                web, redes sociales y otras plataformas de comunicación,
                asegurando una experiencia coherente y fluida para tus clientes.
              </li>
            </ol>
            <p>
              En resumen, el IA Chat no solo mejora la atención al cliente y la
              eficiencia operativa, sino que también ofrece una experiencia
              personalizada. Implementar esta tecnología puede marcar una gran
              diferencia en la satisfacción del cliente y en el crecimiento de
              tu negocio.
            </p>
          </>
        }
      />
      <Accordion
        title={
          <span className="text-xl">
            {" "}
            ¿Qué es la IA Chat y cómo beneficia a mi negocio?
          </span>
        }
        answer={
          <>
            <p className="mt-6">
              El IA Chat es una herramienta avanzada de inteligencia artificial
              que permite la interacción automatizada y en tiempo real con tus
              clientes a través de chat. Aquí te explicamos cómo funciona y los
              beneficios que puede aportar a tu negocio:
            </p>
            <p>Experiencia de Usuario Fluida e Interactiva</p>
            <p>
              El refresco periódico de UI ofrece una experiencia de usuario
              excepcional. Esta tecnología permite una navegación fluida y una
              interactividad en tiempo real. El sistema actúa de manera
              predictiva, anticipándose a las necesidades del usuario. Cada
              interacción se optimiza para mayor satisfacción, transformando la
              navegación convencional en una experiencia digital avanzada. El
              resultado es una interfaz altamente eficiente y atractiva que
              mejora significativamente la interacción del usuario con la
              aplicación.
            </p>
            <p>
              En resumen, el refresco de UI es una técnica que asegura que tu
              aplicación o sitio web esté siempre actualizado, proporcionando
              una experiencia de usuario superior y manteniendo a tus visitantes
              comprometidos y satisfechos.
            </p>
          </>
        }
      />
    </section>
  );
};
