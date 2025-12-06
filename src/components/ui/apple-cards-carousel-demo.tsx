"use client";

import React, { useMemo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useLanguage } from "@/contexts/language-context";

export default function AppleCardsCarouselDemo() {
  const { t } = useLanguage();

  const projectsData = useMemo(() => {
    return projectsDataRaw.map((project) => {
      const projectData = t(`projectCarousel.projects.${project.key}`) as any;
      const hasClient = projectData.client;
      const clientOrTypeLabel = hasClient
        ? t("projectCarousel.labels.client")
        : t("projectCarousel.labels.type");
      const clientOrTypeValue = hasClient ? projectData.client : projectData.type;

      return {
        category: projectData.category,
        title: projectData.title,
        src: project.src,
        clientOrType: `${clientOrTypeLabel}: ${clientOrTypeValue}`,
        description: projectData.description,
        technologies: project.technologies,
        features: project.features,
        content: <ProjectContent project={{
          clientOrType: `${clientOrTypeLabel}: ${clientOrTypeValue}`,
          description: projectData.description,
          technologies: project.technologies,
          features: project.features
        }} />
      };
    });
  }, [t]);

  const cards = projectsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-black dark:text-white max-w-4xl mx-auto text-center">
        {t("projectCarousel.title")}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-12 mx-auto text-center">
        {t("projectCarousel.description")}
      </p>
      <Carousel items={cards} />
    </div>
  );
}

interface ProjectData {
  clientOrType: string;
  description: string;
  technologies?: string[];
  features?: string[];
}

const ProjectContent = ({ project }: { project: ProjectData }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {project.clientOrType}
          </span>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-4xl">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 rounded-2xl">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            {t("projectCarousel.labels.technologiesUsed")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 rounded-2xl">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            {t("projectCarousel.labels.keyFeatures")}
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            {project.features?.map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const projectsDataRaw = [
  {
    key: "aerial",
    src: "/projects/Futuristic Aircraft Inspection_simple_compose_01k1cvc3bce9are1g6bj8xzrph.webp",
    technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Drone Integration"],
    features: [
      "Real-time damage detection",
      "Automated inspection reports",
      "High accuracy detection",
      "Drone footage processing"
    ]
  },
  {
    key: "attendance",
    src: "/projects/Modern Office Dusk Scene_simple_compose_01k1cvc95dfbk8gq7xh8nsf1m7.webp",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT"],
    features: [
      "Task management system",
      "Attendance tracking",
      "Leave management",
      "Real-time dashboards"
    ]
  },
  {
    key: "health",
    src: "/projects/Glowing Neural Network_simple_compose_01k1cvcfkhfkqv2z4nem4pzrzr.webp",
    technologies: ["Random Forest", "XGBoost", "Streamlit", "Python", "Scikit-learn"],
    features: [
      "Heart disease prediction",
      "Diabetes risk assessment",
      "Interactive web interface",
      "Real-time predictions"
    ]
  },
  {
    key: "bloodBank",
    src: "/projects/Holographic Indonesia Map_simple_compose_01k1cvcn7gex79t826836hpnwj.webp",
    technologies: ["Go", "gRPC", "React", "PostgreSQL", "Docker"],
    features: [
      "Donor-recipient matching",
      "Real-time notifications",
      "Scalable architecture",
      "High-performance backend"
    ]
  },
  {
    key: "pothole",
    src: "/projects/Twilight AR Street View_simple_compose_01k1cvcw1zehdrdbawf6qn5b2b.webp",
    technologies: ["TensorFlow", "OpenCV", "Python", "PDF Generation", "Computer Vision"],
    features: [
      "Pothole detection",
      "Automated reporting",
      "PDF generation",
      "Infrastructure monitoring"
    ]
  },
  {
    key: "identity",
    src: "/projects/Cinematic Crystal Fingerprint_simple_compose_01k1cvesj7f0dssddfzppgx86c.webp",
    technologies: ["Motoko", "Internet Computer", "React", "Blockchain", "Identity Management"],
    features: [
      "Decentralized identity",
      "Unique ID generation",
      "Privacy-focused design",
      "Company integration"
    ]
  },
  {
    key: "emergency",
    src: "/projects/Highlighted Red Data Point_simple_compose_01k1cvha8mfwt9makvafhn63hs.webp",
    technologies: ["TensorFlow", "Computer Vision", "Python", "Emergency Response", "Image Processing"],
    features: [
      "Accident detection",
      "Automated response",
      "20K image training",
      "Real-time processing"
    ]
  },
  {
    key: "commercial",
    src: "/projects/Elegant Data Visualization_simple_compose_01k1cvps9cf3b9ymd009dfcy42.webp",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    features: [
      "Online booking systems",
      "Dynamic dashboards",
      "Commercial applications",
      "Full-stack development"
    ]
  },
];
