# صفحة هبوط — عالم الإبداع المتطورة للمقاولات العامة

صفحة هبوط ثابتة (HTML + Tailwind CSS) مُحسّنة للأداء، مخصّصة لحملات Google Ads.
عربية بالكامل (RTL)، متجاوبة مع الجوال، مع تتبّع تحويلات جاهز للربط.

## التشغيل والبناء

```bash
npm install          # تثبيت Tailwind (مرة واحدة)
npm run build        # توليد styles.css المُصغّر
npm run watch        # إعادة البناء تلقائيًا أثناء التعديل
npm run serve        # معاينة محلية على http://localhost:5173
```

## النشر (Deployment)

الملفات الثابتة المطلوبة للرفع فقط:

```
index.html
styles.css
app.js
assets/        (الشعار، الصور، الخطوط، الأيقونات)
```

ترفع كما هي على أي استضافة (Netlify / Vercel / cPanel / أي خادم).
لا حاجة لـ Node على الخادم — `node_modules` و `src/` و `package*.json` أدوات تطوير فقط.

## رقم التواصل

رقم واحد مُعتمد في كل الأزرار: **0552119299**
- اتصال: `tel:+966552119299`
- واتساب: `https://wa.me/966552119299`

## ربط تتبّع التحويلات بـ Google Ads

1. أضِف وسم gtag.js العام داخل `<head>` في `index.html` (من حساب Google Ads).
2. في `app.js` داخل دالة `trackConversion`، أزِل التعليق عن سطر `send_to`
   وألصق معرّف التحويل بصيغة: `'AW-XXXXXXXXXX/CONVERSION_LABEL'`.
3. زرّا الاتصال والواتساب يطلقان الحدث تلقائيًا عند النقر، ويدعمان أيضًا
   Google Tag Manager عبر `dataLayer` (حدثا `lead_call` و `lead_whatsapp`).

## ملاحظات

- الخط (Tajawal) مستضاف محليًا في `assets/fonts/` لتفادي حجب التحميل.
- جميع الصور محسّنة بصيغة WebP مع نسخ JPG احتياطية.
- البيانات المصدرية (الصور الأصلية وملف Word) في مجلد `project 1/`.
