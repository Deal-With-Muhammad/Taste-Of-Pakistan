"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@heroui/react";

// Sample dishes data - replace with your actual data
const featuredDishes = [
  {
    id: 1,
    name: "Chicken Biryani",
    slug: "chicken-biryani",
    category: "Rice Dishes",
    price: "MYR 650",
    spiceLevel: 3,
    isSpecial: true,
    cookTime: "45 mins",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/products/1478348249.jpg",
      },
    ],
    description:
      "Aromatic basmati rice layered with tender chicken and traditional spices",
  },
  {
    id: 2,
    name: "Seekh Kebab",
    slug: "seekh-kebab",
    category: "BBQ",
    price: "MYR 450",
    spiceLevel: 4,
    isSpecial: false,
    cookTime: "25 mins",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/products/1482119556.jpg",
      },
    ],
    description: "Grilled minced meat skewers with aromatic spices",
  },
  {
    id: 3,
    name: "Karahi Gosht",
    slug: "karahi-gosht",
    category: "Curries",
    price: "MYR 850",
    spiceLevel: 4,
    isSpecial: true,
    cookTime: "60 mins",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/Products/1478348279.jpg",
      },
    ],
    description:
      "Traditional mutton curry cooked in a wok with tomatoes and spices",
  },
  {
    id: 4,
    name: "Chicken Tikka",
    slug: "chicken-tikka",
    category: "BBQ",
    price: "MYR 550",
    spiceLevel: 3,
    isSpecial: false,
    cookTime: "30 mins",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/products/1482119556.jpg",
      },
    ],
    description:
      "Tender chicken pieces marinated in yogurt and spices, grilled to perfection",
  },
  {
    id: 5,
    name: "Cheese Naan",
    slug: "Cheese Naan",
    category: "Cheese Naan",
    price: "MYR 750",
    spiceLevel: 3,
    isSpecial: true,
    cookTime: "8 hours",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/products/1478348259.jpg",
      },
    ],
    description: "Slow-cooked beef stew with aromatic spices, served with naan",
  },
  {
    id: 6,
    name: "Beef Shawarma",
    slug: "beef-shawarma",
    category: "BBQ",
    price: "MYR 250",
    spiceLevel: 0,
    isSpecial: false,
    cookTime: "20 mins",
    images: [
      {
        src: "https://images.deliveryhero.io/image/fd-my/Products/1556249601.jpg",
      },
    ],
    description: "Sweet milk dumplings soaked in rose-flavored sugar syrup",
  },
];

export const ParallaxScroll = ({
  className,
  items = featuredDishes,
  isLessColls = false,
}: {
  className?: string;
  items?: typeof featuredDishes;
  isLessColls?: boolean;
}) => {
  const dishes = items;
  const router = useRouter();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(dishes.length / 3);

  const firstPart = dishes.slice(0, third);
  const secondPart = dishes.slice(third, 2 * third);
  const thirdPart = dishes.slice(2 * third);

  const handleClick = (slug: string) => {
    router.push(`/dishes/${slug}`);
  };

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        icon="mdi:chili-hot"
        className={`text-sm ${
          i < level ? "text-red-500" : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "Rice Dishes": "mdi:rice",
      BBQ: "mdi:grill",
      Curries: "mdi:pot-steam",
      Traditional: "mdi:chef-hat",
      Desserts: "mdi:cake-variant",
    };
    return icons[category] || "mdi:food";
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div
        className={cn(
          "container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0",
          className
        )}
        ref={gridRef}
      >
        {!isLessColls && (
          <div className="mb-16 flex flex-col gap-3">
            <div className="flex gap-2.5 items-center justify-center">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon
                  icon="mdi:star-four-points"
                  width={20}
                  height={20}
                  className="text-primary"
                />
              </div>
              <p className="text-base font-semibold text-dark/75 dark:text-white/75">
                Featured Dishes
              </p>
            </div>
            <h2 className="text-40 lg:text-52 font-bold text-black dark:text-white text-center tracking-tight leading-11 mb-2">
              Discover our{" "}
              <span className="text-primary">signature dishes</span>
            </h2>
            <p className="text-lg font-normal text-black/60 dark:text-white/60 text-center max-w-2xl mx-auto">
              Handcrafted with love using authentic recipes passed down through
              generations, each dish tells a story of Pakistani culinary
              heritage.
            </p>
          </div>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isLessColls ? "lg:grid-cols-3" : "lg:grid-cols-3"
          } items-start max-w-full mx-auto gap-8 pt-10 md:pb-40`}
        >
          {/* First Part */}
          <div className="grid gap-8">
            {firstPart.map((dish, idx) => (
              <motion.div
                onClick={() => handleClick(dish.slug)}
                style={{ y: translateFirst }}
                key={"grid-1" + idx}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={dish.images[0].src}
                      className="h-[280px] md:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      height="320"
                      width="400"
                      alt={dish.name}
                      unoptimized={true}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                        <Icon
                          icon={getCategoryIcon(dish.category)}
                          className="text-sm"
                        />
                        {dish.category}
                      </div>
                    </div>
                  </div>

                  {/* Dish Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-primary font-bold text-lg">
                          {dish.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Spice Level */}
                        {dish.spiceLevel > 0 && (
                          <div className="flex items-center gap-1">
                            {getSpiceIcons(dish.spiceLevel)}
                          </div>
                        )}
                      </div>

                      {/* Cook Time */}
                      <div className="flex items-center gap-1 text-xs text-dark/50 dark:text-white/50">
                        <Icon icon="mdi:clock-outline" />
                        {dish.cookTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Part */}
          <div className="grid gap-8 md:-mt-16">
            {secondPart.map((dish, idx) => (
              <motion.div
                onClick={() => handleClick(dish.slug)}
                style={{ y: isSmallScreen ? translateFirst : translateSecond }}
                key={"grid-2" + idx}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={dish.images[0].src}
                      className="h-[280px] md:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      height="320"
                      width="400"
                      alt={dish.name}
                      unoptimized={true}
                    />

                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                        <Icon
                          icon={getCategoryIcon(dish.category)}
                          className="text-sm"
                        />
                        {dish.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-primary font-bold text-lg">
                          {dish.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {dish.spiceLevel > 0 && (
                          <div className="flex items-center gap-1">
                            {getSpiceIcons(dish.spiceLevel)}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-dark/50 dark:text-white/50">
                        <Icon icon="mdi:clock-outline" />
                        {dish.cookTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Part */}
          <div className="grid gap-8">
            {thirdPart.map((dish, idx) => (
              <motion.div
                onClick={() => handleClick(dish.slug)}
                style={{ y: translateThird }}
                key={"grid-3" + idx}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={dish.images[0].src}
                      className="h-[280px] md:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      height="320"
                      width="400"
                      alt={dish.name}
                      unoptimized={true}
                    />

                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                        <Icon
                          icon={getCategoryIcon(dish.category)}
                          className="text-sm"
                        />
                        {dish.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                          {dish.name}
                        </h3>
                        <p className="text-primary font-bold text-lg">
                          {dish.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {dish.spiceLevel > 0 && (
                          <div className="flex items-center gap-1">
                            {getSpiceIcons(dish.spiceLevel)}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-dark/50 dark:text-white/50">
                        <Icon icon="mdi:clock-outline" />
                        {dish.cookTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
