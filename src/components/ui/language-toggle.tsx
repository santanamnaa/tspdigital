"use client";

import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const LanguageToggle = ({ className }: { className?: string }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={cn("relative flex items-center gap-1 rounded-full bg-gray-100 dark:bg-neutral-800 p-1", className)}>
            <button
                onClick={() => setLanguage('en')}
                className={cn(
                    "relative z-10 px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                    language === 'en'
                        ? "text-black dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                )}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('id')}
                className={cn(
                    "relative z-10 px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                    language === 'id'
                        ? "text-black dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                )}
            >
                ID
            </button>
            <motion.div
                layoutId="language-toggle-bg"
                className="absolute inset-y-1 w-[calc(50%-4px)] bg-white dark:bg-neutral-700 rounded-full shadow-sm"
                initial={false}
                animate={{
                    x: language === 'en' ? 4 : 'calc(100% + 4px)',
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            />
        </div>
    );
};
