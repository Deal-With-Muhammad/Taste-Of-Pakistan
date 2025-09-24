"use client";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { HeartIcon, MapPinIcon, StarIcon } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Authentic Pakistani cuisine at Taste of Pakistan"
          fill
          priority
          className="object-cover object-center"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center mt-20 xl:mt-24 2xl:mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.85] tracking-tight">
                  Taste <span className="text-primary">of</span> Pakistan
                </h1>

                <p className="text-xl sm:text-2xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl font-light">
                  Experience authentic Pakistani flavors crafted with
                  traditional recipes and premium ingredients. From aromatic
                  biryanis to tender karahi, discover the true essence of
                  Pakistani cuisine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  as={Link}
                  href="/menu"
                  size="lg"
                  color="primary"
                  className="px-10 py-7 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  View Our Menu
                </Button>
                <Button
                  as={Link}
                  href="/reservations"
                  variant="bordered"
                  size="lg"
                  className="border-3 border-white bg-white/20 backdrop-blur-lg text-white px-10 py-7 text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Make Reservation
                </Button>
              </div>

              {/* Quick Info Tags */}
              <div className="hidden md:flex flex-wrap gap-3 pt-4">
                <Chip
                  startContent={<MapPinIcon className="w-4 h-4" />}
                  variant="flat"
                  className="bg-white/20 text-white backdrop-blur-sm px-4 py-2"
                >
                  Prime Location
                </Chip>
                <Chip
                  startContent={<HeartIcon className="w-4 h-4" />}
                  variant="flat"
                  className="bg-white/20 text-white backdrop-blur-sm px-4 py-2"
                >
                  Family Recipes
                </Chip>
                <Chip
                  startContent={<StarIcon className="w-4 h-4" />}
                  variant="flat"
                  className="bg-white/20 text-white backdrop-blur-sm px-4 py-2"
                >
                  5-Star Rated
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-3 text-white/80">
          <span className="text-sm font-bold tracking-widest uppercase">
            Explore Menu
          </span>
          <div className="w-0.5 h-12 bg-white/60 animate-pulse rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
