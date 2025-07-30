# Setup Environment Variables

## 1. Buat file `.env.local` di root project

Buat file baru bernama `.env.local` di folder root project (sama level dengan `package.json`)

## 2. Isi file `.env.local` dengan credentials EmailJS:

```env
# EmailJS Configuration
# Ganti dengan credentials EmailJS Anda
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 3. Cara Mendapatkan Credentials:

### Public Key:

1. Login ke EmailJS dashboard
2. Buka "Account" → "API Keys"
3. Copy Public Key

### Service ID:

1. Buka "Email Services"
2. Pilih service yang sudah dibuat
3. Copy Service ID

### Template ID:

1. Buka "Email Templates"
2. Pilih template yang sudah dibuat
3. Copy Template ID

## 4. Contoh file `.env.local` yang sudah diisi:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_a1b2c3d4e5f6g7h8i9j0
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
```

## 5. Restart Development Server:

Setelah membuat file `.env.local`, restart development server:

```bash
npm run dev
```

## 6. Testing:

1. Isi form contact
2. Submit form
3. Cek email di `tspdigital.id@gmail.com`

## 7. Keamanan:

- File `.env.local` sudah otomatis di-ignore oleh Git
- Jangan share credentials EmailJS ke publik
- Gunakan environment variables untuk production
