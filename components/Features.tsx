"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mb-24 px-3 xl:px-0 ">
      <WobbleCard
        containerClassName="col-span-1 h-full bg-secondary min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Diseño Siempre Fresco
          </h2>
          <p className="mt-4 text-left  text-base/6 text-text font-pop font-light">
            Olvídate de páginas anticuadas. Actualizamos tu diseño
            periódicamente para mantener tu marca siempre atractiva y moderna.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-primary">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
          Crecimiento Escalable
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
          Comienza con lo básico y amplía tus servicios a medida que tu negocio
          crece, sin complicaciones ni migraciones dolorosas.
        </p>
        <Image
          src="/scalable-growth.png"
          width={186}
          height={124}
          alt="linear demo image"
          className="absolute -right-4 bottom-2 object-contain rounded-2xl max-w-36 sm:max-w-full"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1  bg-primary min-h-[300px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Soluciones a tu Medida
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
            Desde una simple landing page hasta una tienda completa, tenemos el
            paquete perfecto para tu negocio y presupuesto.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-secondary min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Presencia Multiplataforma
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 text-text font-pop font-light">
            Conquista tanto la web como el móvil con nuestras soluciones
            integradas, llegando a tus clientes donde estén.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-secondaryBg min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Potencia de IA a tu servicio
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 text-text font-pop font-light">
            Desde una simple landing page hasta una tienda completa, tenemos el
            paquete perfecto para tu negocio y presupuesto.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-secondaryBg min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Soporte Integral
          </h2>
          <p className="mt-4 text-left  text-base/6 text-text font-pop font-light">
            Desde el diseño hasta el mantenimiento, nos encargamos de todo. Tú
            solo preocúpate por hacer crecer tu negocio.
          </p>
        </div>
        <Image
          src="/multiplatform_support.png"
          width={223}
          height={152}
          alt="linear demo image"
          className="absolute right-8 bottom-0.5 object-contain rounded-2xl max-w-36 sm:max-w-full"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-primary">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
          Despliegue Sin Preocupaciones
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
          Con 1 TB de despliegue mensual incluido, tu sitio estará siempre
          disponible para tus clientes, sin costos sorpresa.
        </p>
      </WobbleCard>
    </div>
  );
}
