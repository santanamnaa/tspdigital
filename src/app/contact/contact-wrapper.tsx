"use client";
import React from 'react';
import ContactContent from './contact-content';

export default function ContactPageWrapper() {
    // Get reCAPTCHA v2 site key from environment variables
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

    console.log('reCAPTCHA v2 Site Key loaded:', !!recaptchaSiteKey);

    return <ContactContent recaptchaSiteKey={recaptchaSiteKey} />;
}
