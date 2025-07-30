import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Strategic Deep Dive
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            We don&apos;t write code until we understand your business. This phase is an intensive immersion into your operational challenges, market position, and strategic goals. We define the precise problem we will solve together.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              Stakeholder Workshops
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              Technical & Business Audit
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              Finalized Strategic Blueprint
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Architectural Design & Prototyping
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Ideas are translated into tangible, testable designs. We create wireframes and high-fidelity interactive prototypes, allowing you to see and feel the solution before a single line of code is written. No surprises, only precision.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              User Flow & Journey Mapping
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              High-Fidelity UI/UX Prototypes
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              Technical Architecture Plan
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Agile Development Sprints
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            This is where the machine is built. We operate in rigorous two-week sprints, delivering functional pieces of the application for your review. You get full transparency and witness progress in real-time, every step of the way.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Backend & API Development
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Frontend Component Construction
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Bi-Weekly Sprint Reviews
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 4",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Rigorous Quality Assurance
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            We hunt for flaws so your users don&apos;t have to. Our process involves comprehensive testing across devices, scenarios, and security vectors to ensure the final product is stable, secure, and market-ready.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              Automated & Manual Testing
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              User Acceptance Testing (UAT)
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              Performance & Security Audits
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 5",
      content: (
        <div>
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Deployment & Strategic Partnership
          </h4>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Launch is not the end; it&apos;s the beginning of your advantage. We manage the full deployment process and transition into a strategic partnership role, monitoring performance and identifying new opportunities for growth.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              Server Configuration & App Store Submission
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              Post-Launch Monitoring
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              Long-Term Growth Roadmap
            </div>
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