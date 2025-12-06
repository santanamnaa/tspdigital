# Setup Google reCAPTCHA v3 untuk Contact Form

## 🔑 Step 1: Dapatkan reCAPTCHA Keys dari Google

### 1.1 Buka Google reCAPTCHA Console
Kunjungi: **https://www.google.com/recaptcha/admin/create**

### 1.2 Register a New Site
Isi form berikut:

**Label:**
```
TSP Digital Contact Form
```

**reCAPTCHA type:**
- ✅ Pilih **reCAPTCHA v3**
- ❌ JANGAN pilih v2 (yang ada checkbox)

**Domains:**
Tambahkan domains berikut (satu per baris):
```
localhost
tspdigital.id
vercel.app
```

**Owners:**
- Email Google account Anda akan otomatis terdaftar
- Bisa tambahkan email team member lain jika perlu

### 1.3 Accept Terms & Submit
- ✅ Centang "Accept the reCAPTCHA Terms of Service"
- Klik **Submit**

### 1.4 Copy Keys
Setelah submit, Anda akan mendapat 2 keys:

1. **Site Key** (Public Key)
   - Format: `6Lc...` (panjang ~40 karakter)
   - Ini akan digunakan di frontend
   
2. **Secret Key** (Private Key)
   - Format: `6Lc...` (berbeda dengan site key)
   - Ini akan digunakan di EmailJS dashboard

**⚠️ PENTING: COPY KEDUA KEYS INI!**

---

## 🔧 Step 2: Update .env.local File

Tambahkan **Site Key** ke file `.env.local`:

```env
# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here

# EmailJS Configuration (sudah ada)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=a0rSUGmPU4fx4oZn9
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r1gnlzm
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_7t40ifs
```

Replace `your_site_key_here` dengan **Site Key** yang Anda copy dari Step 1.4

---

## 📧 Step 3: Configure reCAPTCHA di EmailJS

### 3.1 Login ke EmailJS Dashboard
Kunjungi: **https://dashboard.emailjs.com/**

### 3.2 Buka Email Service Settings
1. Di sidebar, klik **"Email Services"**
2. Klik pada service Anda: **service_r1gnlzm**

### 3.3 Enable & Configure reCAPTCHA
1. Scroll ke bagian **"Security"** atau **"reCAPTCHA"**
2. ✅ **Enable reCAPTCHA v3**
3. Paste **Secret Key** dari Step 1.4
4. Klik **Save** atau **Update Service**

---

## ✅ Step 4: Testing

### 4.1 Restart Development Server
Setelah update `.env.local`:

```bash
# Stop server (Ctrl+C)
# Clear cache (optional)
rm -rf .next

# Start server
npm run dev
```

### 4.2 Test Contact Form
1. Buka http://localhost:3000/contact
2. Hard refresh browser (Cmd+Shift+R atau Ctrl+Shift+F5)
3. Isi form dengan data test:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Company**: Test Company
   - **Message**: This is a test message from contact form
4. Submit form
5. Check browser console untuk logs:
   - ✅ `reCAPTCHA token generated`
   - ✅ `EmailJS Result: {status: 200, ...}`

### 4.3 Cek Email
Email harus masuk ke inbox yang dikonfigurasi di EmailJS service (kemungkinan `tspdigital.id@gmail.com`)

---

## 🔍 Troubleshooting

### Error: "reCAPTCHA not loaded"
- Pastikan Site Key sudah benar di `.env.local`
- Restart dev server
- Hard refresh browser

### Error: "Invalid reCAPTCHA token"
- Pastikan Secret Key sudah benar di EmailJS dashboard
- Pastikan menggunakan **reCAPTCHA v3** (bukan v2)
- Domain `localhost` sudah ditambahkan di Google reCAPTCHA console

### Form tidak submit / loading terus
- Buka browser console (F12) untuk lihat error
- Pastikan tidak ada console error
- Check network tab untuk melihat request yang gagal

### Email tidak masuk
- Check spam folder
- Verify EmailJS service masih connected dengan Gmail
- Test dengan "Send Test Email" di EmailJS dashboard

---

## 📝 Production Deployment

Saat deploy ke production (Vercel):

### 1. Add Environment Variable di Vercel
1. Buka Vercel Dashboard → Project Settings
2. Klik **Environment Variables**
3. Tambahkan:
   - **Key**: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - **Value**: Your site key
   - **Environments**: Production, Preview, Development

### 2. Verify Domain di reCAPTCHA
1. Buka Google reCAPTCHA Console
2. Edit site yang sudah dibuat
3. Tambahkan production domain (contoh: `tspdigital.id`)
4. Save changes

### 3. Test di Production
- Submit contact form dari production site
- Verify email masuk dengan benar

---

## 🎯 Summary

**Yang Perlu Anda Lakukan:**

1. ✅ Dapatkan reCAPTCHA keys dari Google
2. ✅ Update file `.env.local` dengan Site Key
3. ✅ Configure Secret Key di EmailJS dashboard
4. ✅ Restart dev server
5. ✅ Test contact form

**Code changes sudah SELESAI, tinggal setup credentials!**

---

## 🛡️ Security Benefits

Dengan reCAPTCHA v3:
- ✅ **Invisible**: User tidak perlu klik checkbox
- ✅ **Smart**: Google AI detect spam behavior
- ✅ **Score-based**: Memberikan score 0-1 untuk setiap request
- ✅ **No friction**: User experience tidak terganggu
- ✅ **Bot protection**: Melindungi dari form spam dan abuse

---

**Setelah mendapatkan reCAPTCHA keys, paste di sini untuk saya bantu update .env.local!**
