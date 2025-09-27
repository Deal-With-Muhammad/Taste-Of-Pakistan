"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";

const Categories = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-gray-900">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 opacity-10">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden w-auto h-auto max-w-full"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block w-auto h-auto max-w-full"
          unoptimized={true}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-start lg:items-center gap-6 lg:gap-10">
          {/* Left Content */}
          <div className="lg:col-span-6 col-span-12 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon icon="mdi:food" className="text-2xl text-primary" />
              </div>
              <span className="text-primary font-semibold text-lg">
                Authentic Flavors
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-52 mb-4 font-bold leading-[1.2] text-dark dark:text-white">
              Discover the Rich{" "}
              <span className="text-primary">Taste of Pakistan</span>
            </h2>

            <p className="text-dark/70 dark:text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              From aromatic biryanis to sizzling kebabs, explore our authentic
              Pakistani cuisine crafted with traditional recipes and the finest
              spices from across the nation.
            </p>

            <Button
              as={Link}
              href="/menu"
              className="bg-primary text-white px-8 py-6 text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              radius="full"
              size="lg"
            >
              <Icon icon="mdi:silverware-fork-knife" className="text-xl" />
              Explore Our Menu
            </Button>
          </div>

          {/* Right Content - Category Cards */}
          <div className="lg:col-span-6 col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Biryani & Rice Dishes */}
              <Card className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl border-1 border-gray-100 dark:border-gray-800">
                <CardBody className="p-0 relative overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.deliveryhero.io/image/fd-my/products/1478348249.jpg"
                      alt="Pakistani Biryani"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-white rounded-full p-2">
                        <Icon icon="mdi:arrow-right" className="text-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-2 flex items-center gap-2">
                      <Icon icon="mdi:rice" className="text-primary" />
                      Biryani & Rice
                    </h3>
                    <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed">
                      Fragrant basmati rice layered with tender meat and
                      aromatic spices, cooked to perfection.
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* BBQ & Grills */}
              <Card className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl border-1 border-gray-100 dark:border-gray-800">
                <CardBody className="p-0 relative overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://images.deliveryhero.io/image/fd-my/products/1482119682.jpg"
                      alt="Pakistani Kebabs"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-white rounded-full p-2">
                        <Icon icon="mdi:arrow-right" className="text-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-2 flex items-center gap-2">
                      <Icon icon="mdi:grill" className="text-primary" />
                      BBQ & Grills
                    </h3>
                    <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed">
                      Sizzling seekh kebabs, chicken tikka, and other grilled
                      specialties marinated in traditional spices.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
