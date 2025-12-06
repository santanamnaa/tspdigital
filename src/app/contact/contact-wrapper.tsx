"use client";
import React from 'react';
import ContactContent from './contact-content';

export default function ContactPageWrapper() {
    // reCAPTCHA v2 site key
    const recaptchaSiteKey = '6LeBliMsAAAAABGfnsmB1Toxrdn9gXfu8u9svowB';

    console.log('reCAPTCHA v2 Site Key:', recaptchaSiteKey);

    return <ContactContent recaptchaSiteKey={recaptchaSiteKey} />;
}
