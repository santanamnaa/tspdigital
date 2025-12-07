"use client";
import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
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
import { IconMessage, IconUser, IconSend, IconCheck } from "@tabler/icons-react";
import { DarkFooter } from "@/components/ui/dark-footer";
import { Logo } from "@/components/ui/logo";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/ui/language-toggle";
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactContentProps {
  recaptchaSiteKey: string;
}

export default function ContactContent({ recaptchaSiteKey }: ContactContentProps) {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.email.includes("@")) return "Please enter a valid email";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
      console.log("EmailJS initialized");
    } else {
      console.error("EmailJS Public Key not found in environment variables");
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Get reCAPTCHA token from v2 checkbox
      const recaptchaToken = recaptchaRef.current?.getValue();

      if (!recaptchaToken) {
        console.error('reCAPTCHA not completed');
        setErrorMessage("Please complete the reCAPTCHA verification.");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      console.log('reCAPTCHA token obtained'); // Debug log

      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // Debug logging
      console.log("EmailJS Configuration:", {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey,
        hasRecaptcha: !!recaptchaToken,
      });

      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        'g-recaptcha-response': recaptchaToken, // Add reCAPTCHA token
      }, publicKey);

      console.log("EmailJS Result:", result); // Debug log

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        // Reset reCAPTCHA for next submission
        recaptchaRef.current?.reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to send message. Please email us directly at info@tspdigital.id.");
      }
    } catch (error: any) {
      console.error("EmailJS error:", error);
      console.error("Error details:", {
        message: error?.message,
        text: error?.text,
        status: error?.status,
      });
      setSubmitStatus("error");
      const errorMsg = error?.text || error?.message || "Failed to send message";
      setErrorMessage(`${errorMsg}. Please email us directly at info@tspdigital.id.`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {t("contactPage.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t("contactPage.hero.description")}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("contactPage.form.title")}</h2>
                <p className="text-muted-foreground">
                  {t("contactPage.form.subtitle")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <IconUser className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contactPage.form.namePlaceholder")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>

                  <div className="relative">
                    <IconMessage className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contactPage.form.emailPlaceholder")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>

                  <div className="relative">
                    <IconMessage className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t("contactPage.form.companyPlaceholder")}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div className="relative">
                    <IconMessage className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contactPage.form.messagePlaceholder")}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none"
                      required
                    />
                  </div>

                  {/* reCAPTCHA v2 Checkbox */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaSiteKey}
                      theme="light"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      {t("contactPage.form.sending")}
                    </>
                  ) : (
                    <>
                      <IconSend className="h-4 w-4" />
                      {t("contactPage.form.submitButton")}
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <IconCheck className="h-5 w-5" />
                    <span>{t("contactPage.form.successMessage")}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <IconMessage className="h-5 w-5" />
                    <span>{errorMessage || t("contactPage.form.errorMessage")}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("contactPage.whyChoose.title")}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {(Array.isArray(t<string[]>("contactPage.whyChoose.items")) ? t<string[]>("contactPage.whyChoose.items") : []).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">{t("contactPage.whatToExpect.title")}</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {t("contactPage.whatToExpect.description1")}
                  </p>
                  <p>
                    {t("contactPage.whatToExpect.description2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Gemini Effect Section */}
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title={t("contactPage.gemini.title")}
          description={t("contactPage.gemini.description")}
        />
      </div>

      {/* Dark Footer for Contact Page */}
      <DarkFooter />
    </div>
  );
} 