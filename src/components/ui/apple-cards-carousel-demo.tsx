"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = projectsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="font-bold text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl mx-auto text-center">
        Our Strategic Portfolio.
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto text-center">
        A showcase of high-impact projects delivered for clients in critical industries.
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
            Technologies Used
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
            Key Features
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
    category: "AI & Computer Vision",
    title: "AI-Powered Aerial Inspection System",
    src: "/projects/Futuristic Aircraft Inspection_simple_compose_01k1cvc3bce9are1g6bj8xzrph.webp",
    clientOrType: "Client: National Research and Innovation Agency (BRIN)",
    description: "Developed and integrated a YOLOv8 computer vision system to detect aircraft body damage from drone footage, enhancing inspection speed and accuracy in a high-stakes environment.",
    technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Drone Integration"],
    features: [
      "Real-time damage detection",
      "Automated inspection reports",
      "High accuracy detection",
      "Drone footage processing"
    ]
  },
  {
    category: "Full-Stack Development",
    title: "Real-Time Project & Attendance Platform",
    src: "/projects/Modern Office Dusk Scene_simple_compose_01k1cvc95dfbk8gq7xh8nsf1m7.webp",
    clientOrType: "Client: PT. Gunung Amal Solutions Internasional",
    description: "Engineered a full-stack system to streamline task management, attendance, and leave tracking, providing total operational visibility for business teams.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JWT"],
    features: [
      "Task management system",
      "Attendance tracking",
      "Leave management",
      "Real-time dashboards"
    ]
  },
  {
    category: "Machine Learning",
    title: "Predictive Health Modeling",
    src: "/projects/Glowing Neural Network_simple_compose_01k1cvcfkhfkqv2z4nem4pzrzr.webp",
    clientOrType: "Type: R&D Case Study",
    description: "Designed and deployed machine learning models (Random Forest & XGBoost) in functional web apps to provide real-time disease risk predictions based on user health data.",
    technologies: ["Random Forest", "XGBoost", "Streamlit", "Python", "Scikit-learn"],
    features: [
      "Heart disease prediction",
      "Diabetes risk assessment",
      "Interactive web interface",
      "Real-time predictions"
    ]
  },
  {
    category: "Systems Architecture",
    title: "Nationwide Blood Bank Application",
    src: "/projects/Holographic Indonesia Map_simple_compose_01k1cvcn7gex79t826836hpnwj.webp",
    clientOrType: "Type: Systems Architecture Case Study",
    description: "Architected a complex, scalable web platform to connect blood donors with recipients, featuring a high-performance backend built with Go and gRPC.",
    technologies: ["Go", "gRPC", "React", "PostgreSQL", "Docker"],
    features: [
      "Donor-recipient matching",
      "Real-time notifications",
      "Scalable architecture",
      "High-performance backend"
    ]
  },
  {
    category: "AI Infrastructure",
    title: "AI-Powered Infrastructure Monitoring",
    src: "/projects/Twilight AR Street View_simple_compose_01k1cvcw1zehdrdbawf6qn5b2b.webp",
    clientOrType: "Client: Binus University (PKM-KC Nominee)",
    description: "Developed and fine-tuned a pothole detection system that generates automated PDF reports for infrastructure maintenance.",
    technologies: ["TensorFlow", "OpenCV", "Python", "PDF Generation", "Computer Vision"],
    features: [
      "Pothole detection",
      "Automated reporting",
      "PDF generation",
      "Infrastructure monitoring"
    ]
  },
  {
    category: "Blockchain & Identity",
    title: "Decentralized Identity Platform",
    src: "/projects/Cinematic Crystal Fingerprint_simple_compose_01k1cvesj7f0dssddfzppgx86c.webp",
    clientOrType: "Type: R&D Case Study",
    description: "Engineered a secure identity management platform using Motoko Backend, allowing users to generate unique ID addresses for seamless and private integration with companies.",
    technologies: ["Motoko", "Internet Computer", "React", "Blockchain", "Identity Management"],
    features: [
      "Decentralized identity",
      "Unique ID generation",
      "Privacy-focused design",
      "Company integration"
    ]
  },
  {
    category: "Emergency Response AI",
    title: "Emergency Autoresponder System",
    src: "/projects/Highlighted Red Data Point_simple_compose_01k1cvha8mfwt9makvafhn63hs.webp",
    clientOrType: "Type: R&D Case Study",
    description: "Trained a TensorFlow model on 20,000 images to detect traffic accidents, forming the core of an automated emergency response system.",
    technologies: ["TensorFlow", "Computer Vision", "Python", "Emergency Response", "Image Processing"],
    features: [
      "Accident detection",
      "Automated response",
      "20K image training",
      "Real-time processing"
    ]
  },
  {
    category: "Commercial Web Apps",
    title: "Full-Stack Booking & Dashboard Systems",
    src: "/projects/Elegant Data Visualization_simple_compose_01k1cvps9cf3b9ymd009dfcy42.webp",
    clientOrType: "Client: Suma Barber, PT Aitiserve, and Others",
    description: "Developed and maintained multiple commercial web applications, including online booking systems and dynamic data dashboards using React, Next.js, and Node.js.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    features: [
      "Online booking systems",
      "Dynamic dashboards",
      "Commercial applications",
      "Full-stack development"
    ]
  },
];

const projectsData = projectsDataRaw.map((project) => ({
  ...project,
  content: <ProjectContent project={project} />
})); 