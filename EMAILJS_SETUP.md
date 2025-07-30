# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Custom SMTP"
4. Configure with your Gmail account (tspdigital.id@gmail.com)
5. Note down the **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**

```
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}

This message was sent from your website contact form.
```

4. Note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Code

Replace these values in `src/app/contact/page.tsx`:

```typescript
// Line 89: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 108: Replace YOUR_SERVICE_ID
("YOUR_ACTUAL_SERVICE_ID");

// Line 109: Replace YOUR_TEMPLATE_ID
("YOUR_ACTUAL_TEMPLATE_ID");

// Line 111: Replace YOUR_PUBLIC_KEY
("YOUR_ACTUAL_PUBLIC_KEY");
```

## Step 6: Test

1. Fill out the contact form
2. Submit the form
3. Check tspdigital.id@gmail.com for the email

## Environment Variables (Optional)

Create `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

Then update the code to use:

```typescript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
// ... and use process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID etc.
```
