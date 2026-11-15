# TOPIK Yo'li

Koreys tilini noldan mustaqil o'rganish uchun shaxsiy platforma: kuniga 20–30 daqiqa, o'zbek tilida tushuntirish, TOPIK formatidagi nazorat testlari.

- **Ochish:** `korean/index.html` faylini brauzerda oching (server kerak emas).
- **Tarkib:** 30 dars (6 ta Hangul + 24 ta TOPIK I asosi), 5 ta nazorat testi, interval takrorlash, 60 soniyalik Boost rejimi.
- **O'tish qoidasi:** har bir bekat mashqida 80% — keyingisi ochiladi. Nazorat testidan o'tsangiz, oldingi bekatlar o'tkazib yuboriladi.
- **Saqlash:** taraqqiyot brauzerda (`localStorage`) saqlanadi.

## Tahrirlash

Dars ma'lumotlari `src/data-*.js` fayllarida, dvigatel `src/app.js` da. O'zgartirgandan keyin:

```
node build.mjs
```

Yangi bosqich qo'shish uchun `src/data-3-….js` fayl yarating va mavjud fayllardagi `STAGES.push({...})` shaklini takrorlang.
