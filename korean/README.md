# TOPIK Yo'li

Koreys tilini noldan mustaqil o'rganish uchun shaxsiy platforma: kuniga 20–30 daqiqa, o'zbek tilida tushuntirish, TOPIK formatidagi nazorat testlari.

- **Ochish:** `korean/index.html` faylini brauzerda oching (server kerak emas).
- **Tarkib:** 126 bekat — Hangul, TOPIK I (1–2급), TOPIK II (3–6급 grammatikasi, yozish bo'limi), 14 ta nazorat va sinov testi, 1 800 so'z; interval takrorlash (so'z + grammatika), 60 soniyalik Boost, ixtiyoriy yozib javob berish.
- **O'tish qoidasi:** har bir bekat mashqida 80% — keyingisi ochiladi. Nazorat testidan o'tsangiz, oldingi bekatlar o'tkazib yuboriladi.
- **Saqlash:** taraqqiyot brauzerda (`localStorage`) saqlanadi.

## Tahrirlash

Dars ma'lumotlari `src/data-*.js` fayllarida, dvigatel `src/app.js` da. O'zgartirgandan keyin:

```
node build.mjs
```

Yangi bosqich qo'shish uchun `src/data-3-….js` fayl yarating va mavjud fayllardagi `STAGES.push({...})` shaklini takrorlang.
