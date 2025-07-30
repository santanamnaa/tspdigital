"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const clients = [
  {
    id: 1,
    name: "Badan Riset dan Inovasi Nasional",
    designation: "BRIN",
    image: "/clients/brin.webp",
  },{
    id: 2,
    name: "Strategive Creative Agency",
    designation: "Creative & Marketing",
    image: "/clients/strategive.webp",
  },
  
  {
    id: 3,
    name: "PT Aitiserve",
    designation: "Digital Services",
    image: "/clients/aiti.webp",
  },
  {
    id: 4,
    name: "Suma Barber",
    designation: "Beauty & Wellness",
    image: "/clients/suma.webp",
  },
  {
    id: 5,
    name: "Coffeeshop Menanti Giliran",
    designation: "Hospitality",
    image: "/clients/menanti.webp",
  }, {
    id: 6,
    name: "PT. Gunung Amal Solutions Internasional",
    designation: "Enterprise Solutions",
    image: "/clients/amal.webp",
  }
];

export default function AnimatedTooltipDemo() {
  return <AnimatedTooltip items={clients} />;
} 