import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export const HeroSection: FC = () => (
  <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Unlock Your Business Potential with Our SaaS Solution
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Streamline your operations, boost productivity, and drive growth
              with our cutting-edge SaaS platform.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Free Trial
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
);
