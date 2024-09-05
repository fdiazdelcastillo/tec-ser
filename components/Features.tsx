"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Features() {
  return (
    <section
      id="features"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-xl w-full px-3"
    >
      <WobbleCard
        containerClassName="col-span-1 h-full bg-secondary min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Always Fresh Design
          </h2>
          <p className="mt-4 text-left  text-base/6 text-text font-pop font-light">
            Say goodbye to outdated pages. We update your design periodically to keep your brand always attractive and modern.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-primary">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
          Scalable Growth
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
          Start with the basics and expand your services as your business grows, without hassles or painful migrations.
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
            Custom Solutions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
            From a simple landing page to a complete store, we have the perfect package for your business and budget.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-secondary min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Multiplatform Presence
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 text-text font-pop font-light">
            Conquer both web and mobile with our integrated solutions, reaching your customers wherever they are.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-secondaryBg min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            AI Power at Your Service
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 text-text font-pop font-light">
            Our integrated AI chat responds to inquiries 24/7, improving your customers' experience and freeing up your time.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-secondaryBg min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-text font-mont">
            Comprehensive Support
          </h2>
          <p className="mt-4 text-left  text-base/6 text-text font-pop font-light">
            From design to maintenance, we take care of everything. You only need to focus on growing your business.
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
          Worry-Free Deployment
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 text-text font-pop font-light">
          With 1 TB of monthly deployment included, your site will always be available to your customers, without surprise costs.
        </p>
      </WobbleCard>
    </section>
  );
}
