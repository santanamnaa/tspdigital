"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Check, Star, Zap, Crown, Shield, Globe, Mail, Database, Users, CreditCard, Code, Brain, Smartphone, TrendingUp, Palette, Server, Lock, BarChart3 } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/ui/language-toggle";

export default function PricingContent() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("wordpress");

  const navItems = [
    {
      name: t("nav.home"),
      link: "/",
    },
    {
      name: t("nav.about"),
      link: "/about",
    },
    {
      name: t("nav.services"),
      link: "/services",
    },
    {
      name: t("nav.projects"),
      link: "/projects",
    },
    {
      name: t("nav.contact"),
      link: "/contact",
    },
  ];

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Halo! Saya tertarik dengan paket ${packageName}. Bisa minta informasi lebih detail?`;
    const whatsappUrl = `https://wa.me/6285121190261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const pricingCategories = [
    {
      id: "wordpress",
      name: t("pricingPage.categories.wordpress.name"),
      icon: <Globe className="h-5 w-5" />,
      description: t("pricingPage.categories.wordpress.description")
    },
    {
      id: "webdev",
      name: t("pricingPage.categories.webdev.name"),
      icon: <Code className="h-5 w-5" />,
      description: t("pricingPage.categories.webdev.description")
    },
    {
      id: "ai-ml",
      name: t("pricingPage.categories.aiml.name"),
      icon: <Brain className="h-5 w-5" />,
      description: t("pricingPage.categories.aiml.description")
    },
    {
      id: "mobile",
      name: t("pricingPage.categories.mobile.name"),
      icon: <Smartphone className="h-5 w-5" />,
      description: t("pricingPage.categories.mobile.description")
    },
    {
      id: "strategy",
      name: t("pricingPage.categories.strategy.name"),
      icon: <TrendingUp className="h-5 w-5" />,
      description: t("pricingPage.categories.strategy.description")
    }
  ];

  const allPricingPlans = {
    wordpress: [
      {
        name: "WP Landing Page",
        originalPrice: "Rp 1.500.000",
        discountedPrice: "Rp 990.000",
        renewal: "Rp 450.000 / tahun",
        discount: "Rp 510.000",
        icon: <Zap className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "30.000 visitor / bulan",
          "Shared storage",
          "Gratis domain (.com / .net / .my.id)",
          "Gratis SSL (HTTPS)",
          "20 GB bandwidth",
          "1 landing page (maks. 1 page, 10 produk)",
          "Dibantu upload 10 produk",
          "Template premium, mobile friendly",
          "Bonus Click to WhatsApp",
          "Revisi minor tanpa batas",
          "Akses admin"
        ],
        popular: false
      },
      {
        name: "WP Basic",
        originalPrice: "Rp 2.900.000",
        discountedPrice: "Rp 2.600.000",
        renewal: "Rp 850.000 / tahun",
        discount: "Rp 300.000",
        icon: <Star className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "60.000 visitor / bulan",
          "10 GB SSD storage",
          "Gratis domain (.com / .net / .my.id)",
          "1 email bisnis (1 GB)",
          "Gratis SSL",
          "100 GB bandwidth",
          "Unlimited pages & products",
          "Dibantu pembuatan 10 halaman, upload 20 produk",
          "Bisa menambah halaman sendiri",
          "Bonus 2 plugin",
          "Revisi minor tanpa batas",
          "Akses admin + FTP",
          "Gratis video tutorial"
        ],
        popular: true
      },
      {
        name: "WP Advanced",
        originalPrice: "Rp 4.800.000",
        discountedPrice: "Rp 3.900.000",
        renewal: "Rp 1.600.000 / tahun",
        discount: "Rp 900.000",
        icon: <Crown className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "100.000 visitor / bulan",
          "25 GB SSD storage",
          "Gratis domain (.com / .net / .my.id)",
          "2 email bisnis (1 GB)",
          "Gratis SSL",
          "Unlimited bandwidth",
          "SEO & mobile friendly",
          "Unlimited pages & products",
          "Dibantu pembuatan 20 halaman, upload 50 produk",
          "Bisa menambah halaman sendiri",
          "Bonus 4 plugin",
          "Revisi minor tanpa batas",
          "Akses admin + FTP",
          "Gratis video tutorial",
          "Support e-commerce & payment gateway"
        ],
        popular: false
      },
      {
        name: "WP Business",
        originalPrice: "Rp 9.000.000",
        discountedPrice: "Rp 5.400.000",
        renewal: "Rp 2.500.000 / tahun",
        discount: "Rp 3.600.000",
        icon: <Shield className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "400.000 visitor / bulan",
          "50 GB NVMe storage",
          "Gratis domain (.com / .net / .my.id / .co.id / .id)",
          "5 email bisnis (1 GB)",
          "Gratis SSL",
          "Unlimited bandwidth",
          "Premium template, SEO & mobile friendly",
          "Unlimited pages & products",
          "Dibantu pembuatan 40 halaman, upload 100 produk",
          "Bisa menambah halaman sendiri",
          "Gratis copywriting (maks. 5 halaman)",
          "Bonus 6 plugin",
          "Revisi minor tanpa batas",
          "Akses admin + FTP + SSH",
          "Gratis desain logo",
          "Gratis video tutorial",
          "Support e-commerce & payment gateway",
          "Gratis online training 1x"
        ],
        popular: false
      },
      {
        name: "WP Ultimate",
        originalPrice: "Rp 14.500.000",
        discountedPrice: "Rp 14.000.000",
        renewal: "Rp 4.700.000 / tahun",
        discount: "Rp 500.000",
        icon: <Globe className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "800.000 visitor / bulan",
          "Dedicated 100 GB NVMe storage",
          "Gratis domain (.com / .net / .my.id / .co.id / .id)",
          "10 email bisnis (1 GB)",
          "Gratis SSL",
          "Unlimited bandwidth",
          "Free licensed template",
          "SEO & mobile friendly",
          "Unlimited pages & products",
          "Dibantu pembuatan 60 halaman, upload 200 produk",
          "Bisa menambah halaman sendiri",
          "Gratis copywriting (maks. 15 halaman)",
          "Bonus 8 plugin",
          "Revisi minor tanpa batas",
          "Akses admin + FTP + SSH",
          "Gratis desain logo, asset & banner",
          "Gratis video tutorial",
          "Support e-commerce & payment gateway",
          "Gratis onsite/online training 1x"
        ],
        popular: false
      },
      {
        name: "WP Supreme",
        originalPrice: "Rp 19.500.000",
        discountedPrice: "Rp 19.000.000",
        renewal: "Rp 4.700.000 / tahun",
        discount: "Rp 500.000",
        icon: <CreditCard className="h-6 w-6" />,
        features: [
          "Garansi selamanya",
          "800.000 visitor / bulan",
          "Dedicated 100 GB NVMe storage",
          "Gratis domain (.com / .net / .my.id / .co.id / .id)",
          "10 email bisnis (1 GB)",
          "Gratis SSL",
          "Unlimited bandwidth",
          "Free licensed template",
          "SEO & mobile friendly",
          "Unlimited pages & products",
          "Dibantu pembuatan 100 halaman, upload 1000 produk",
          "Bisa menambah halaman sendiri",
          "Gratis copywriting (50 halaman)",
          "Bonus 10 plugin",
          "Revisi minor tanpa batas",
          "Akses admin + FTP + SSH",
          "Gratis desain logo, asset & banner",
          "Gratis video tutorial",
          "Support e-commerce & payment gateway",
          "Gratis onsite/online training 2x"
        ],
        popular: false
      }
    ],
    webdev: [
      {
        name: "Starter Website",
        originalPrice: "Rp 8.000.000",
        discountedPrice: "Rp 6.500.000",
        renewal: "Rp 1.200.000 / tahun",
        discount: "Rp 1.500.000",
        icon: <Code className="h-6 w-6" />,
        features: [
          "Custom design & development",
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO optimization",
          "Contact form integration",
          "Social media integration",
          "Google Analytics setup",
          "Basic CMS integration",
          "1 month free support",
          "Training session (1x)",
          "Source code ownership",
          "Deployment & hosting setup"
        ],
        popular: false
      },
      {
        name: "Business Website",
        originalPrice: "Rp 15.000.000",
        discountedPrice: "Rp 12.000.000",
        renewal: "Rp 2.000.000 / tahun",
        discount: "Rp 3.000.000",
        icon: <Server className="h-6 w-6" />,
        features: [
          "Custom design & development",
          "Up to 15 pages",
          "Advanced CMS integration",
          "E-commerce functionality",
          "Payment gateway integration",
          "Advanced SEO optimization",
          "Blog system",
          "Multi-language support",
          "Advanced analytics",
          "3 months free support",
          "Training session (2x)",
          "Performance optimization",
          "Security implementation",
          "Backup system"
        ],
        popular: true
      },
      {
        name: "Enterprise Platform",
        originalPrice: "Rp 35.000.000",
        discountedPrice: "Rp 28.000.000",
        renewal: "Rp 5.000.000 / tahun",
        discount: "Rp 7.000.000",
        icon: <Database className="h-6 w-6" />,
        features: [
          "Custom enterprise platform",
          "Unlimited pages",
          "Advanced user management",
          "API development",
          "Third-party integrations",
          "Advanced security features",
          "Load balancing",
          "Database optimization",
          "Advanced analytics dashboard",
          "6 months free support",
          "Training session (3x)",
          "Performance monitoring",
          "Disaster recovery",
          "Scalability planning"
        ],
        popular: false
      }
    ],
    "ai-ml": [
      {
        name: "AI Consultation",
        originalPrice: "Rp 5.000.000",
        discountedPrice: "Rp 3.500.000",
        renewal: "Rp 1.000.000 / tahun",
        discount: "Rp 1.500.000",
        icon: <Brain className="h-6 w-6" />,
        features: [
          "AI strategy assessment",
          "Data analysis & insights",
          "Technology recommendations",
          "Implementation roadmap",
          "ROI analysis",
          "Vendor evaluation",
          "Security assessment",
          "Compliance review",
          "Team training plan",
          "1 month consultation",
          "Follow-up sessions (2x)",
          "Documentation & reports"
        ],
        popular: false
      },
      {
        name: "AI Integration",
        originalPrice: "Rp 25.000.000",
        discountedPrice: "Rp 20.000.000",
        renewal: "Rp 3.500.000 / tahun",
        discount: "Rp 5.000.000",
        icon: <BarChart3 className="h-6 w-6" />,
        features: [
          "Custom AI model development",
          "Data preprocessing & cleaning",
          "Model training & optimization",
          "API integration",
          "Real-time processing",
          "Performance monitoring",
          "Model versioning",
          "A/B testing framework",
          "3 months free support",
          "Training sessions (3x)",
          "Documentation & maintenance",
          "Scalability planning"
        ],
        popular: true
      },
      {
        name: "AI Platform",
        originalPrice: "Rp 75.000.000",
        discountedPrice: "Rp 60.000.000",
        renewal: "Rp 8.000.000 / tahun",
        discount: "Rp 15.000.000",
        icon: <Lock className="h-6 w-6" />,
        features: [
          "End-to-end AI platform",
          "Multiple AI models",
          "Advanced data pipeline",
          "Real-time analytics",
          "Predictive modeling",
          "Computer vision integration",
          "NLP capabilities",
          "Auto-scaling infrastructure",
          "Advanced security",
          "6 months free support",
          "Training sessions (5x)",
          "24/7 monitoring",
          "Disaster recovery",
          "Compliance certification"
        ],
        popular: false
      }
    ],
    mobile: [
      {
        name: "Mobile App MVP",
        originalPrice: "Rp 12.000.000",
        discountedPrice: "Rp 9.500.000",
        renewal: "Rp 1.500.000 / tahun",
        discount: "Rp 2.500.000",
        icon: <Smartphone className="h-6 w-6" />,
        features: [
          "Cross-platform development",
          "Up to 5 core features",
          "Basic UI/UX design",
          "User authentication",
          "Basic API integration",
          "Push notifications",
          "App store submission",
          "Basic analytics",
          "2 months free support",
          "Training session (1x)",
          "Source code ownership",
          "Performance optimization"
        ],
        popular: false
      },
      {
        name: "Business App",
        originalPrice: "Rp 25.000.000",
        discountedPrice: "Rp 20.000.000",
        renewal: "Rp 3.000.000 / tahun",
        discount: "Rp 5.000.000",
        icon: <Users className="h-6 w-6" />,
        features: [
          "Native or cross-platform",
          "Up to 15 features",
          "Advanced UI/UX design",
          "User management system",
          "Payment integration",
          "Social features",
          "Advanced analytics",
          "Offline functionality",
          "3 months free support",
          "Training sessions (2x)",
          "Performance monitoring",
          "Security implementation"
        ],
        popular: true
      },
      {
        name: "Enterprise App",
        originalPrice: "Rp 50.000.000",
        discountedPrice: "Rp 40.000.000",
        renewal: "Rp 6.000.000 / tahun",
        discount: "Rp 10.000.000",
        icon: <Shield className="h-6 w-6" />,
        features: [
          "Multi-platform development",
          "Unlimited features",
          "Enterprise UI/UX",
          "Advanced security",
          "Multi-tenant architecture",
          "Advanced integrations",
          "Real-time synchronization",
          "Advanced analytics",
          "6 months free support",
          "Training sessions (3x)",
          "24/7 monitoring",
          "Scalability planning"
        ],
        popular: false
      }
    ],
    strategy: [
      {
        name: "Digital Audit",
        originalPrice: "Rp 3.000.000",
        discountedPrice: "Rp 2.500.000",
        renewal: "Rp 500.000 / tahun",
        discount: "Rp 500.000",
        icon: <TrendingUp className="h-6 w-6" />,
        features: [
          "Comprehensive digital audit",
          "Competitor analysis",
          "Technology assessment",
          "Performance review",
          "Security evaluation",
          "SEO analysis",
          "User experience review",
          "Recommendations report",
          "Implementation roadmap",
          "1 month consultation",
          "Follow-up session (1x)",
          "Action plan delivery"
        ],
        popular: false
      },
      {
        name: "Digital Strategy",
        originalPrice: "Rp 8.000.000",
        discountedPrice: "Rp 6.500.000",
        renewal: "Rp 1.500.000 / tahun",
        discount: "Rp 1.500.000",
        icon: <Palette className="h-6 w-6" />,
        features: [
          "Complete digital strategy",
          "Market research",
          "Technology roadmap",
          "Digital transformation plan",
          "Budget planning",
          "Team structure planning",
          "Implementation timeline",
          "Success metrics definition",
          "Risk assessment",
          "3 months consultation",
          "Training sessions (2x)",
          "Ongoing support"
        ],
        popular: true
      },
      {
        name: "Digital Transformation",
        originalPrice: "Rp 20.000.000",
        discountedPrice: "Rp 16.000.000",
        renewal: "Rp 3.000.000 / tahun",
        discount: "Rp 4.000.000",
        icon: <Crown className="h-6 w-6" />,
        features: [
          "End-to-end transformation",
          "Process optimization",
          "Technology implementation",
          "Change management",
          "Team training",
          "Performance monitoring",
          "Continuous improvement",
          "ROI tracking",
          "6 months consultation",
          "Training sessions (5x)",
          "24/7 support",
          "Success guarantee"
        ],
        popular: false
      }
    ]
  };

  const currentPlans = allPricingPlans[activeCategory as keyof typeof allPricingPlans] || [];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <NavbarButton href="/contact" variant="primary">{t("nav.start")}</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <LanguageToggle className="w-full" />
              <NavbarButton
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                {t("nav.start")}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Logo width={100} height={100} showText={false} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t("pricingPage.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("pricingPage.hero.description")}
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {pricingCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pricingCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                onWhatsAppClick={() => handleWhatsAppClick(plan.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("pricingPage.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("pricingPage.cta.description")}
          </p>
          <button
            onClick={() => handleWhatsAppClick(t("pricingPage.cta.customConsultation"))}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("pricingPage.labels.chatWhatsApp")}
          </button>
        </div>
      </section>
    </div>
  );
}

interface PricingCardProps {
  plan: {
    name: string;
    originalPrice: string;
    discountedPrice: string;
    renewal: string;
    discount: string;
    icon: React.ReactNode;
    features: string[];
    popular: boolean;
  };
  onWhatsAppClick: () => void;
}

const PricingCard = ({ plan, onWhatsAppClick }: PricingCardProps) => {
  const { t } = useLanguage();

  return (
    <div className={`relative ${plan.popular ? 'scale-105' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {t("pricingPage.labels.mostPopular")}
          </span>
        </div>
      )}

      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{plan.discountedPrice}</span>
                  <span className="text-lg line-through text-gray-500">{plan.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Renewal: {plan.renewal}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Hemat {plan.discount}
                  </span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">{t("pricingPage.labels.features")}</h4>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={onWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("pricingPage.labels.orderNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
