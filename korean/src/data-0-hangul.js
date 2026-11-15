// Kurs ma'lumotlari. Har bir bosqich — Seul metrosining bitta liniyasi.
// lesson: v=[koreyscha, o'zbekcha, izoh?]  g=[{p,uz,d,ex}]  c=[gap, javob, [chalg'ituvchilar], tarjima]
// test:   qs=[{q, text?, audio?, opts, a, exp}]
const STAGES = [];

STAGES.push({
  id: "h", line: 5, color: "#996CAC", name: "Hangul — alifbo", ko: "한글",
  lessons: [
    {
      id: "h1", type: "hangul", t: "Asosiy unlilar", k: "모음 1",
      goal: "6 ta asosiy unlini o'qish va bo'g'in qanday tuzilishini tushunish.",
      tip: "Koreyada har kuni ko'rgan belgilaringiz endi tovushga aylanadi. Hangul — 24 ta harf, bir haftada o'rganiladi.",
      intro: "<p>Har bir koreyscha bo'g'in bitta <b>katak</b> ichiga yoziladi: <b>undosh + unli</b> (ba'zan ostida yana bir undosh).</p><p>Unli yolg'iz o'qilsa, oldiga tovushsiz <b class='ko'>ㅇ</b> qo'yiladi: <b class='ko'>ㅏ</b> → <b class='ko'>아</b>.</p><p>Tik unlilar (ㅏ ㅓ ㅣ) undoshning <b>o'ng</b> tomoniga, yotiq unlilar (ㅗ ㅜ ㅡ) <b>ostiga</b> yoziladi.</p>",
      letters: [
        ["아", "a", "Chiziqcha o'ngga qaragan"],
        ["어", "o", "«ota»dagi ochiq o. Chiziqcha chapga"],
        ["오", "o'", "«o'n»dagi o'. Chiziqcha tepaga"],
        ["우", "u", "Chiziqcha pastga"],
        ["으", "ɨ", "Ruscha «ы» kabi, lab cho'zilmaydi"],
        ["이", "i", "Tik chiziq"]
      ],
      words: [["아이", "bola"], ["오이", "bodring"], ["이", "ikki (2)"], ["오", "besh (5)"]]
    },
    {
      id: "h2", type: "hangul", t: "Asosiy undoshlar", k: "자음 1",
      goal: "9 ta asosiy undoshni o'qish va birinchi haqiqiy so'zlarni o'qish.",
      tip: "ㄱ ㄷ ㅂ ㅈ so'z boshida k, t, p, ch ga yaqinroq, so'z o'rtasida g, d, b, j bo'lib eshitiladi. Shuning uchun 부산 ham «Busan», ham «Pusan» deb yoziladi.",
      letters: [
        ["가", "ga", "ㄱ — g/k. Burchak, «g»"],
        ["나", "na", "ㄴ — n. Lotincha L ga o'xshaydi, lekin «n»"],
        ["다", "da", "ㄷ — d/t. Ochiq eshik — «d»"],
        ["라", "ra", "ㄹ — r/l. Ilon izi"],
        ["마", "ma", "ㅁ — m. Kvadrat — yopiq og'iz"],
        ["바", "ba", "ㅂ — b/p. Chelak"],
        ["사", "sa", "ㅅ — s. Ikki oyoq"],
        ["자", "ja", "ㅈ — j. ㅅ ustida tom"],
        ["하", "ha", "ㅎ — h. Shlyapali odam"]
      ],
      words: [["나", "men"], ["나라", "davlat"], ["어머니", "ona"], ["아버지", "ota"], ["바나나", "banan"], ["버스", "avtobus"], ["가수", "xonanda"], ["모자", "shlyapa"], ["다리", "oyoq; ko'prik"], ["하나", "bitta"], ["누나", "opa (o'g'il bola uchun)"], ["지하", "yer osti"]]
    },
    {
      id: "h3", type: "hangul", t: "Y-unlilar va E", k: "모음 2",
      goal: "ㅑ ㅕ ㅛ ㅠ va ㅐ ㅔ unlilarini o'qish.",
      tip: "Qoida oddiy: unliga ikkinchi chiziqcha qo'shilsa, oldiga «y» tovushi qo'shiladi: ㅏ a → ㅑ ya.",
      letters: [
        ["야", "ya", "ㅏ + chiziqcha"],
        ["여", "yo", "ㅓ + chiziqcha. «yosh»dagi yo"],
        ["요", "yo'", "ㅗ + chiziqcha. «yo'l»dagi yo'"],
        ["유", "yu", "ㅜ + chiziqcha"],
        ["애", "e", "ㅏ + ㅣ. Hozir ㅔ bilan bir xil o'qiladi"],
        ["에", "e", "ㅓ + ㅣ. «-ga / -da» qo'shimchasi ham shu"]
      ],
      words: [["우유", "sut"], ["여자", "ayol"], ["요리", "taom, pazandalik"], ["야구", "beysbol"], ["노래", "qo'shiq"], ["가게", "do'kon"], ["메뉴", "menyu"], ["뉴스", "yangiliklar"], ["여기", "bu yer"], ["개", "it"], ["네", "ha"], ["배", "qorin; nok; kema"]]
    },
    {
      id: "h4", type: "hangul", t: "Nafasli va qattiq undoshlar", k: "자음 2",
      goal: "ㅋ ㅌ ㅍ ㅊ (nafasli) va ㄲ ㄸ ㅃ ㅆ ㅉ (qattiq) undoshlarini farqlash.",
      tip: "Bitta qo'shimcha chiziq = kuchli nafas (ㄱ → ㅋ). Ikkilangan harf = qattiq, nafassiz tovush (ㄱ → ㄲ). 커피, 카드, 아파트 — bularni Koreyada ko'p ko'rgansiz.",
      letters: [
        ["카", "kha", "ㅋ — nafasli k"],
        ["타", "tha", "ㅌ — nafasli t"],
        ["파", "pha", "ㅍ — nafasli p"],
        ["차", "cha", "ㅊ — ch"],
        ["까", "kka", "ㄲ — qattiq k"],
        ["따", "tta", "ㄸ — qattiq t"],
        ["빠", "ppa", "ㅃ — qattiq p"],
        ["싸", "ssa", "ㅆ — qattiq s"],
        ["짜", "jja", "ㅉ — qattiq j"]
      ],
      words: [["커피", "qahva"], ["카드", "karta"], ["토마토", "pomidor"], ["파티", "ziyofat"], ["치마", "yubka"], ["코", "burun"], ["아빠", "dada"], ["오빠", "aka (qiz uchun)"], ["비싸요", "qimmat"], ["고추", "qalampir"], ["기차", "poyezd"], ["포도", "uzum"], ["아파트", "ko'p qavatli uy"], ["스키", "chang'i"]]
    },
    {
      id: "h5", type: "hangul", t: "Qo'shma unlilar", k: "모음 3",
      goal: "ㅘ ㅝ ㅚ ㅟ ㅢ va boshqa qo'shma unlilarni o'qish.",
      tip: "Qo'shma unli — ikki unlini tez aytish: ㅗ + ㅏ = ㅘ (wa). ㅙ, ㅚ, ㅞ uchalasi ham amalda «we» deb o'qiladi.",
      letters: [
        ["와", "wa", "ㅗ + ㅏ"],
        ["워", "wo", "ㅜ + ㅓ"],
        ["위", "wi", "ㅜ + ㅣ"],
        ["의", "ɨy", "ㅡ + ㅣ. «-ning» qo'shimchasi bo'lsa «e» o'qiladi"],
        ["외", "we", "ㅗ + ㅣ"],
        ["왜", "we", "ㅗ + ㅐ. «Nega?» so'zi"],
        ["웨", "we", "ㅜ + ㅔ"],
        ["예", "ye", "ㅕ + ㅣ"],
        ["얘", "ye", "ㅑ + ㅣ. Kam uchraydi"]
      ],
      words: [["사과", "olma"], ["회사", "kompaniya"], ["의사", "shifokor"], ["의자", "stul"], ["귀", "quloq"], ["돼지", "cho'chqa"], ["시계", "soat"], ["뭐", "nima"], ["과자", "pechenye"], ["샤워", "dush"], ["가위", "qaychi"], ["쥐", "sichqon"]]
    },
    {
      id: "h6", type: "hangul", t: "Patchim — ostki undosh", k: "받침",
      goal: "Bo'g'in ostidagi undoshni (받침) o'qish va tovush ulanishini tushunish.",
      tip: "Endi ko'chadagi yozuvlarni o'qiy olasiz: 편의점, 화장실, 지하철 — bularning hammasini Koreyada ko'rgansiz.",
      intro: "<p>Bo'g'in ostida undosh bo'lsa, u <b>patchim</b> (받침) deyiladi. Ostda faqat <b>7 xil tovush</b> eshitiladi:</p><ul><li><b class='ko'>ㄱ ㅋ ㄲ</b> → k</li><li><b class='ko'>ㄴ</b> → n, <b class='ko'>ㄹ</b> → l, <b class='ko'>ㅁ</b> → m, <b class='ko'>ㅇ</b> → ng</li><li><b class='ko'>ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ</b> → t</li><li><b class='ko'>ㅂ ㅍ</b> → p</li></ul><p><b>Ulanish:</b> keyingi bo'g'in ㅇ bilan boshlansa, patchim o'sha joyga ko'chadi: <b class='ko'>한국어</b> → «han-gu-go», <b class='ko'>음악</b> → «ɨ-mak».</p>",
      letters: [
        ["각", "gak", "Ostda ㄱ → k"],
        ["간", "gan", "Ostda ㄴ → n"],
        ["갇", "gat", "Ostda ㄷ → t"],
        ["갈", "gal", "Ostda ㄹ → l"],
        ["감", "gam", "Ostda ㅁ → m"],
        ["갑", "gap", "Ostda ㅂ → p"],
        ["강", "gang", "Ostda ㅇ → ng"]
      ],
      words: [["한국", "Koreya"], ["서울", "Seul"], ["김치", "kimchi"], ["지하철", "metro"], ["선생님", "o'qituvchi"], ["학생", "talaba, o'quvchi"], ["컴퓨터", "kompyuter"], ["핸드폰", "telefon"], ["편의점", "24 soatlik do'kon"], ["화장실", "hojatxona"], ["물", "suv"], ["밥", "guruch, ovqat"], ["집", "uy"], ["책", "kitob"], ["한국어", "koreys tili"], ["음악", "musiqa"]]
    },
    {
      id: "ht", type: "test", t: "Hangul nazorati", k: "한글 시험",
      goal: "Hangulni allaqachon o'qiy olsangiz, shu testdan o'tib, birdaniga 2-liniyaga o'ting.",
      qs: [
        { q: "«kho-phi» (qahva) qaysi biri?", opts: ["커피", "코피", "거비", "카페"], a: 0, exp: "ㅋ + ㅓ = 커, ㅍ + ㅣ = 피." },
        { q: "Qanday o'qiladi?", text: "지하철", opts: ["ji-ha-chol", "chi-ga-chol", "ji-ha-chul", "ja-ho-chol"], a: 0, exp: "지 ji · 하 ha · 철 chol (ㅓ = ochiq o)." },
        { q: "Bu yozuv qayerda uchraydi?", text: "화장실", opts: ["Hojatxona eshigida", "Avtobus bekatida", "Bankda", "Menyuda"], a: 0, exp: "화장실 — hojatxona." },
        { q: "Eshitgan so'zingizni tanlang.", audio: "선생님", opts: ["선생님", "손생님", "선샘닌", "산생님"], a: 0, exp: "선생님 — o'qituvchi." },
        { q: "Eshitgan so'zingizni tanlang.", audio: "의사", opts: ["의사", "이사", "의자", "외사"], a: 0, exp: "의사 — shifokor. 의자 — stul." },
        { q: "한국어 qanday o'qiladi?", opts: ["han-gu-go", "han-guk-o", "han-gung-o", "hang-u-go"], a: 0, exp: "Patchim ㄱ keyingi ㅇ o'rniga ko'chadi." },
        { q: "Ostki ㅅ (masalan 옷) qanday eshitiladi?", opts: ["t", "s", "sh", "n"], a: 0, exp: "ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ — ostda hammasi «t»." },
        { q: "«pomidor» qaysi biri?", opts: ["토마토", "도마도", "토모토", "타마타"], a: 0, exp: "토마토 — tho-ma-tho." },
        { q: "Eshitgan so'zingizni tanlang.", audio: "편의점", opts: ["편의점", "변의점", "편이잠", "평의점"], a: 0, exp: "편의점 — 24 soatlik do'kon." },
        { q: "Qaysi juftlik bir xil o'qiladi?", opts: ["애 — 에", "오 — 어", "우 — 으", "가 — 카"], a: 0, exp: "ㅐ va ㅔ hozirgi koreys tilida bir xil «e»." }
      ]
    }
  ]
});
