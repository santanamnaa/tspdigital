# EmailJS Configuration untuk TSP Digital

## Konfigurasi Template EmailJS

Berdasarkan setup EmailJS Anda, berikut adalah konfigurasi yang diperlukan:

### 1. Template Variables yang Digunakan:

```javascript
{
  name: "Nama pengirim",
  email: "Email pengirim",
  company: "Perusahaan (opsional)",
  message: "Pesan dari form",
  time: "Waktu pengiriman (format Indonesia)",
  title: "Judul email dengan nama dan perusahaan"
}
```

### 2. Template Email yang Disarankan:

**Subject:** `Contact Us: {{title}}`

**Content:**

```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

**Details:**
Name: {{name}}
Email: {{email}}
Company: {{company}}
Time: {{time}}

**Message:**
{{message}}

---
This message was sent from your website contact form.
```

### 3. Konfigurasi EmailJS Dashboard:

**To Email:** `tspdigital.id@gmail.com`
**From Name:** `{{name}}`
**From Email:** (gunakan default email)
**Reply To:** `{{email}}`

### 4. Update Kode:

Ganti nilai-nilai berikut di `src/app/contact/page.tsx`:

```typescript
// Line 89: Ganti YOUR_PUBLIC_KEY dengan Public Key dari EmailJS
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 118: Ganti YOUR_SERVICE_ID dengan Service ID dari EmailJS
("YOUR_ACTUAL_SERVICE_ID");

// Line 119: Ganti YOUR_TEMPLATE_ID dengan Template ID dari EmailJS
("YOUR_ACTUAL_TEMPLATE_ID");

// Line 121: Ganti YOUR_PUBLIC_KEY dengan Public Key dari EmailJS
("YOUR_ACTUAL_PUBLIC_KEY");
```

### 5. Cara Mendapatkan Credentials:

1. **Public Key:** Dashboard → Account → API Keys
2. **Service ID:** Dashboard → Email Services → Copy Service ID
3. **Template ID:** Dashboard → Email Templates → Copy Template ID

### 6. Testing:

1. Isi form contact
2. Submit form
3. Cek email di `tspdigital.id@gmail.com`
4. Email akan berisi semua informasi dari form

### 7. Format Waktu Indonesia:

Kode sudah dikonfigurasi untuk menampilkan waktu dalam format Indonesia:

- Contoh: "15 Januari 2024, 14:30"
