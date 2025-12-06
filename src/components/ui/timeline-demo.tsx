import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useLanguage } from "@/contexts/language-context";

export default function TimelineDemo() {
  const { t } = useLanguage();

  const data = [
    {
      title: t("timeline.phase1.title"),
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {t("timeline.phase1.heading")}
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            {t("timeline.phase1.description")}
          </p>
          <div className="space-y-2">
            {(t("timeline.phase1.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t("timeline.phase2.title"),
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {t("timeline.phase2.heading")}
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            {t("timeline.phase2.description")}
          </p>
          <div className="space-y-2">
            {(t("timeline.phase2.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t("timeline.phase3.title"),
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {t("timeline.phase3.heading")}
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            {t("timeline.phase3.description")}
          </p>
          <div className="space-y-2">
            {(t("timeline.phase3.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t("timeline.phase4.title"),
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {t("timeline.phase4.heading")}
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            {t("timeline.phase4.description")}
          </p>
          <div className="space-y-2">
            {(t("timeline.phase4.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t("timeline.phase5.title"),
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {t("timeline.phase5.heading")}
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            {t("timeline.phase5.description")}
          </p>
          <div className="space-y-2">
            {(t("timeline.phase5.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
