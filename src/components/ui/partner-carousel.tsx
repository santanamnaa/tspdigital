"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const partners = [
    { name: "Kementrian Lingkungan Hidup", logo: "/clients/klhk.webp" },
    { name: "BINUS University", logo: "/clients/binus.webp" },
    { name: "PT Gunung Amal Solutions International", logo: "/clients/amal.webp" },
    { name: "PT Aitiserve", logo: "/clients/aiti.webp" },
    { name: "PT Zhafran Mandiri Logistik", logo: "/clients/zhafran.webp" },
    { name: "PT Lumina Media Digital", logo: "https://placehold.co/200x80?text=LUMINA" },
    { name: "PT Hita Loka Manava", logo: "/clients/hita_loka_manava.webp" },
    { name: "Kejaksaan Negeri", logo: "/clients/kejaksaan_negeri.webp" },
    { name: "Pemerintah Kabupaten Kotabaru", logo: "/clients/kotabaru.webp" },
    { name: "Suma Barber", logo: "/clients/suma.webp" },
    { name: "BRIN", logo: "/clients/brin.webp" },
    { name: "SMA PGRI", logo: "/clients/sma_pgri.webp" },
    { name: "Agency Strategive", logo: "/clients/strategive.webp" },
];

export const PartnerCarousel = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
            }),
        ]
    );

    return (
        <div className="w-screen ml-[50%] -translate-x-[50%]">
            <div
                className="w-full relative overflow-hidden py-8 bg-transparent cursor-grab active:cursor-grabbing"
                ref={emblaRef}
            >
                <div className="flex touch-pan-y">
                    {/* Repeat partners 4 times to ensure seamless infinite scroll (no visible rollback) on all screen sizes */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_auto] mx-8 md:mx-16 flex flex-col items-center justify-center gap-4 hover:scale-110 transition-all duration-300 select-none"
                        >
                            {partner.logo.includes("placehold.co") ? (
                                <div className="h-16 w-[150px] flex items-center justify-center bg-blue-600 rounded-lg px-2 text-center">
                                    <span className="text-white text-xs font-bold leading-tight uppercase">
                                        {partner.name.replace("PT ", "").replace("Agency ", "")}
                                    </span>
                                </div>
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 w-auto object-contain max-w-[150px]"
                                    draggable={false}
                                />
                            )}
                            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
