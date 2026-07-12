# إضافة عميل جديد

## 1) إضافة الصورة
ضع صورة العميل داخل مجلد `images`، مثال:

`images/ahmed.jpg`

يفضل أن تكون الصورة مربعة وبصيغة JPG أو PNG.

## 2) إضافة بيانات العميل
افتح ملف `profiles.json` وأضف عنصرًا جديدًا قبل القوس الأخير:

```json
"ahmed": {
  "name": "Ahmed Mohamed",
  "job": "Graphic Designer",
  "image": "images/ahmed.jpg",
  "whatsapp": "201012345678",
  "instapay": "@ahmed",
  "facebook": "https://facebook.com/ahmed",
  "instagram": "https://instagram.com/ahmed",
  "tiktok": "",
  "x": ""
}
```

ضع فاصلة بين العملاء. اترك رابطًا فارغًا `""` لإخفاء زره تلقائيًا.

## 3) رابط العميل

`index.html?user=ahmed`

بعد رفع الموقع على GitHub Pages يصبح مثل:

`https://USERNAME.github.io/REPOSITORY/?user=ahmed`

## تغيير العميل الافتراضي
في أول سطر من `script.js` غيّر:

```js
const DEFAULT_USERNAME = "basel";
```
