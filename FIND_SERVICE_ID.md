# Cara Menemukan Service ID di EmailJS

## Langkah-langkah:

### 1. Login ke EmailJS Dashboard

- Buka https://dashboard.emailjs.com/
- Login dengan akun Anda

### 2. Buka Email Services

- Di sidebar kiri, klik "Email Services"
- Atau buka: https://dashboard.emailjs.com/admin

### 3. Lihat Service yang Sudah Dibuat

- Anda akan melihat daftar email services
- Service ID akan terlihat seperti: `service_abc123` atau `service_xyz789`
- Biasanya dimulai dengan "service\_"

### 4. Copy Service ID

- Klik pada service yang sudah dibuat
- Service ID akan terlihat di halaman detail service
- Copy Service ID tersebut

## Update .env.local

Setelah mendapatkan Service ID, update file `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=a0rSUGmPU4fx4oZn9
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_3yc86te
```

## Contoh Service ID:

- `service_abc123`
- `service_gmail`
- `service_myemail`
- `service_default`

## Jika Belum Ada Service:

1. Klik "Add New Service"
2. Pilih "Gmail" atau "Custom SMTP"
3. Konfigurasi dengan email `info@tspdigital.id`
4. Setelah dibuat, copy Service ID yang muncul

## Testing:

Setelah mengisi semua credentials, restart server:

```bash
npm run dev
```
