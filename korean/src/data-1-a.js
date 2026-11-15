STAGES.push({
  id: "a", line: 2, color: "#00A84D", name: "Tanishuv", ko: "만남",
  lessons: [
    {
      id: "a1", type: "lesson", t: "Salomlashish", k: "인사",
      goal: "Salomlashish, xayrlashish, rahmat va uzr aytish; o'zingizni tanishtirish.",
      tip: "Bu iboralarni Koreyada yuzlab marta eshitgansiz — endi ularni aniq yozuvi bilan bog'laymiz.",
      v: [
        ["안녕하세요", "Assalomu alaykum"],
        ["안녕히 가세요", "Xayr (ketayotgan odamga)", "So'zma-so'z: tinch boring"],
        ["안녕히 계세요", "Xayr (qolayotgan odamga)", "So'zma-so'z: tinch qoling"],
        ["감사합니다", "Rahmat"],
        ["죄송합니다", "Kechirasiz"],
        ["괜찮아요", "Hechqisi yo'q"],
        ["네", "Ha"],
        ["아니요", "Yo'q"],
        ["저", "men (kamtarona)"],
        ["이름", "ism"],
        ["사람", "odam"],
        ["반갑습니다", "Tanishganimdan xursandman"]
      ],
      g: [
        {
          p: "저는 N입니다 / N이에요·예요", uz: "Men N-man",
          d: "Xuddi o'zbekchadagidek kesim gap oxirida turadi. 입니다 — rasmiy, 이에요/예요 — kundalik xushmuomala shakl. Ot undosh bilan tugasa 이에요, unli bilan tugasa 예요.",
          ex: [["저는 아지즈입니다.", "Men Azizman."], ["저는 학생이에요.", "Men talabaman."], ["제 이름은 민수예요.", "Mening ismim Minsu."]]
        }
      ],
      c: [
        ["저는 학생___.", "이에요", ["예요", "은", "는"], "Men talabaman."],
        ["제 이름은 민수___.", "예요", ["이에요", "를", "에"], "Mening ismim Minsu."],
        ["가: 죄송합니다.  나: ___.", "괜찮아요", ["감사합니다", "안녕하세요", "반갑습니다"], "— Kechirasiz. — Hechqisi yo'q."],
        ["(Siz ketyapsiz, do'stingiz qolyapti)  ___!", "안녕히 계세요", ["안녕히 가세요", "반갑습니다", "죄송합니다"], "Xayr! (qolayotgan odamga)"]
      ]
    },
    {
      id: "a2", type: "lesson", t: "Men kimman", k: "자기소개",
      goal: "Millat va kasbni aytish; «emas» deyish.",
      tip: "은/는 — o'zbekchadagi «esa / -chi» ga yaqin: gap nima haqida ekanini belgilaydi.",
      v: [
        ["우즈베키스탄", "O'zbekiston"], ["한국", "Koreya"], ["미국", "AQSh"], ["학생", "talaba"],
        ["회사원", "ofis xodimi"], ["선생님", "o'qituvchi"], ["의사", "shifokor"], ["친구", "do'st"],
        ["한국어", "koreys tili"], ["영어", "ingliz tili"], ["나라", "davlat"], ["직업", "kasb"], ["어느", "qaysi"]
      ],
      g: [
        {
          p: "N은/는", uz: "N esa, N — (mavzu)",
          d: "Gap mavzusini bildiradi. Undoshdan keyin 은, unlidan keyin 는. «Davlat + 사람» = millat: 한국 사람 — koreys.",
          ex: [["저는 우즈베키스탄 사람이에요.", "Men o'zbekistonlikman."], ["제 친구는 의사예요.", "Mening do'stim shifokor."], ["선생님은 한국 사람입니다.", "O'qituvchi koreys."]]
        },
        {
          p: "N이/가 아니에요", uz: "N emas",
          d: "Inkor. Undoshdan keyin 이, unlidan keyin 가 qo'yiladi, keyin 아니에요.",
          ex: [["저는 학생이 아니에요.", "Men talaba emasman."], ["저는 의사가 아니에요.", "Men shifokor emasman."]]
        }
      ],
      c: [
        ["저___ 회사원이에요.", "는", ["은", "이", "를"], "Men ofis xodimiman."],
        ["선생님___ 한국 사람이에요.", "은", ["는", "가", "를"], "O'qituvchi koreys."],
        ["저는 학생___ 아니에요.", "이", ["가", "은", "를"], "Men talaba emasman."],
        ["가: 어느 나라 사람이에요?  나: 우즈베키스탄 ___이에요.", "사람", ["직업", "이름", "영어"], "— Qaysi davlatdansiz? — O'zbekistonlikman."]
      ]
    },
    {
      id: "a3", type: "lesson", t: "Bu nima?", k: "이게 뭐예요?",
      goal: "Narsalarni ko'rsatib so'rash va nomlash; «kimning» ekanini aytish.",
      tip: "의 = o'zbekcha «-ning». 이/가 — ega qo'shimchasi: yangi ma'lumot yoki «nima? kim?» ga javob.",
      v: [
        ["이것", "bu (narsa)", "Og'zaki: 이거"], ["그것", "shu, o'sha (sizdagi)"], ["저것", "anavi (uzoqdagi)"],
        ["뭐", "nima", "To'liq shakli: 무엇"], ["누구", "kim"], ["책", "kitob"], ["가방", "sumka"], ["휴대폰", "telefon"],
        ["물", "suv"], ["커피", "qahva"], ["컴퓨터", "kompyuter"], ["의자", "stul"], ["책상", "parta, yozuv stoli"]
      ],
      g: [
        {
          p: "이게 뭐예요? — N이에요/예요", uz: "Bu nima? — N",
          d: "이게 = 이것이 (bu). 그게 = 그것이, 저게 = 저것이. 이 / 그 / 저 otdan oldin ham keladi: 이 책 — bu kitob.",
          ex: [["이게 뭐예요?", "Bu nima?"], ["그것은 한국어 책이에요.", "U koreys tili kitobi."], ["저 사람은 누구예요?", "Anavi odam kim?"]]
        },
        {
          p: "N의 N", uz: "N-ning N",
          d: "Egalik. 저의 → 제 (mening), 나의 → 내. Og'zaki nutqda 의 ko'pincha tushib qoladi: 친구 가방.",
          ex: [["이것은 제 가방이에요.", "Bu mening sumkam."], ["이것은 친구의 휴대폰이에요.", "Bu do'stimning telefoni."]]
        }
      ],
      c: [
        ["이게 ___예요?", "뭐", ["누구", "어느", "저"], "Bu nima?"],
        ["저 사람은 ___예요?", "누구", ["뭐", "이것", "책"], "Anavi odam kim?"],
        ["이것은 선생님___ 책이에요.", "의", ["은", "가", "를"], "Bu o'qituvchining kitobi."],
        ["이것은 ___ 컴퓨터예요.", "제", ["저", "저는", "저것"], "Bu mening kompyuterim."]
      ]
    },
    {
      id: "a4", type: "lesson", t: "Qayerda? Bor va yo'q", k: "어디에 있어요?",
      goal: "Narsa va joyning qayerdaligini aytish; «bor / yo'q».",
      tip: "에 = o'zbekcha «-da» (turgan joy). 있어요 / 없어요 = «bor / yo'q» — tuzilishi o'zbekcha bilan bir xil: Menda vaqt yo'q → 저는 시간이 없어요.",
      v: [
        ["있어요", "bor"], ["없어요", "yo'q"], ["어디", "qayer"], ["여기", "bu yer"], ["저기", "anavi yer"],
        ["집", "uy"], ["학교", "maktab, universitet"], ["회사", "kompaniya, ish joyi"], ["화장실", "hojatxona"],
        ["편의점", "24 soatlik do'kon"], ["은행", "bank"], ["위", "ust"], ["아래", "ost"], ["앞", "old"], ["뒤", "orqa"], ["안", "ich"], ["옆", "yon"]
      ],
      g: [
        {
          p: "N이/가 N에 있어요 / 없어요", uz: "N N-da bor / yo'q",
          d: "Joy + 에. O'rin bildiruvchi so'z otdan keyin keladi, xuddi o'zbekchadagidek: 책상 위에 — parta ustida.",
          ex: [["화장실이 어디에 있어요?", "Hojatxona qayerda?"], ["편의점은 은행 옆에 있어요.", "Do'kon bankning yonida."], ["책이 가방 안에 있어요.", "Kitob sumkaning ichida."], ["저는 지금 시간이 없어요.", "Hozir vaqtim yo'q."]]
        },
        {
          p: "N도", uz: "N ham",
          d: "도 은/는 va 이/가 o'rniga qo'yiladi.",
          ex: [["저도 학생이에요.", "Men ham talabaman."], ["여기에 은행도 있어요.", "Bu yerda bank ham bor."]]
        }
      ],
      c: [
        ["화장실이 어디___ 있어요?", "에", ["를", "은", "의"], "Hojatxona qayerda?"],
        ["휴대폰이 책상 ___에 있어요.", "위", ["어디", "여기", "누구"], "Telefon parta ustida."],
        ["저___ 우즈베키스탄 사람이에요.", "도", ["에", "의", "를"], "Men ham o'zbekistonlikman."],
        ["가: 물 있어요?  나: 아니요, ___.", "없어요", ["있어요", "괜찮아요", "아니에요"], "— Suv bormi? — Yo'q."]
      ]
    },
    {
      id: "a5", type: "lesson", t: "Sonlar 1: narx va raqam", k: "숫자 1",
      goal: "Xitoycha-koreyscha sonlar: narx, telefon raqami, sana.",
      tip: "Koreys tilida ikki xil son bor. Bu qatori — pul, sana, daqiqa, telefon raqami uchun. Do'kondagi «천 원, 만 원» shu qatordan.",
      v: [
        ["일", "1"], ["이", "2"], ["삼", "3"], ["사", "4"], ["오", "5"], ["육", "6"], ["칠", "7"], ["팔", "8"], ["구", "9"], ["십", "10"],
        ["백", "100"], ["천", "1 000"], ["만", "10 000"], ["원", "von (pul birligi)"], ["얼마", "qancha"], ["번", "raqam, -nchi"], ["월", "oy (sana)"], ["년", "yil"]
      ],
      g: [
        {
          p: "얼마예요? — N원이에요", uz: "Qancha turadi? — N von",
          d: "Sonlar o'zbekchadagidek ulanadi: 십오 = 15, 이십 = 20, 삼백 = 300. Koreyada minglar emas, 10 000 (만) asosiy birlik: 50 000 = 오만.",
          ex: [["이거 얼마예요?", "Bu qancha turadi?"], ["커피는 사천오백 원이에요.", "Qahva 4 500 von."], ["오늘은 시월 구일이에요.", "Bugun 9-oktabr."]]
        }
      ],
      c: [
        ["이거 ___예요?", "얼마", ["뭐", "누구", "어디"], "Bu qancha turadi?"],
        ["15 = ___", "십오", ["오십", "십육", "일오"], "o'n besh"],
        ["30 000 원 = ___ 원", "삼만", ["삼천", "삼백", "사만"], "o'ttiz ming von"],
        ["2 500 원 = ___ 원", "이천오백", ["이백오십", "이만오천", "오천이백"], "ikki ming besh yuz von"]
      ]
    },
    {
      id: "a6", type: "lesson", t: "Birinchi fe'llar", k: "동사 1",
      goal: "Hozirgi zamonda gapirish va «-ni» qo'shimchasini ishlatish.",
      tip: "Bu — eng muhim dars. -아요/어요 shakli kundalik nutqning 80 foizi. 을/를 = o'zbekcha «-ni».",
      v: [
        ["가다", "bormoq"], ["오다", "kelmoq"], ["먹다", "yemoq"], ["마시다", "ichmoq"], ["보다", "ko'rmoq"],
        ["하다", "qilmoq"], ["공부하다", "o'qimoq, o'rganmoq"], ["일하다", "ishlamoq"], ["자다", "uxlamoq"],
        ["사다", "sotib olmoq"], ["만나다", "uchrashmoq"], ["읽다", "o'qimoq (matn)"], ["좋아하다", "yaxshi ko'rmoq"]
      ],
      g: [
        {
          p: "V-아요 / V-어요 / 해요", uz: "hozirgi zamon (xushmuomala)",
          d: "다 ni olib tashlang. Oxirgi unli ㅏ yoki ㅗ bo'lsa +아요 (가다 → 가요, 오다 → 와요), boshqa unli bo'lsa +어요 (먹다 → 먹어요, 마시다 → 마셔요), 하다 → 해요. Shaxsga qarab o'zgarmaydi: 가요 = boraman, borasan, boradi.",
          ex: [["저는 학교에 가요.", "Men maktabga boraman."], ["친구가 집에 와요.", "Do'stim uyga keladi."], ["저는 한국어를 공부해요.", "Men koreys tilini o'rganaman."]]
        },
        {
          p: "N을/를", uz: "N-ni",
          d: "Tushum kelishigi. Undoshdan keyin 을, unlidan keyin 를.",
          ex: [["저는 밥을 먹어요.", "Men ovqat yeyman."], ["친구는 커피를 마셔요.", "Do'stim qahva ichadi."], ["저는 책을 읽어요.", "Men kitob o'qiyman."]]
        }
      ],
      c: [
        ["저는 물___ 마셔요.", "을", ["를", "이", "에"], "Men suv ichaman."],
        ["저는 친구___ 만나요.", "를", ["을", "은", "의"], "Men do'stim bilan uchrashaman."],
        ["먹다 → ___", "먹어요", ["먹아요", "먹해요", "먹요"], "yeyman / yeydi"],
        ["오다 → ___", "와요", ["오요", "워요", "오어요"], "kelaman / keladi"],
        ["공부하다 → ___", "공부해요", ["공부하요", "공부아요", "공부허요"], "o'rganaman"]
      ]
    },
    {
      id: "at", type: "test", t: "Nazorat: 2-liniya", k: "환승 시험",
      goal: "TOPIK I formatidagi savollar. 80% va undan yuqori — 3-liniya ochiladi.",
      qs: [
        { q: "TOPIK 읽기 31-tur. Nima haqida?", text: "저는 학생입니다. 친구는 의사입니다.", opts: ["직업", "이름", "나라", "집"], a: 0, exp: "Talaba, shifokor — gap kasb (직업) haqida." },
        { q: "TOPIK 읽기 31-tur. Nima haqida?", text: "저는 우즈베키스탄 사람이에요. 선생님은 한국 사람이에요.", opts: ["나라", "직업", "책", "회사"], a: 0, exp: "O'zbekistonlik, koreys — gap davlat (나라) haqida." },
        { q: "TOPIK 듣기 1-tur. To'g'ri javobni tanlang.", audio: "학생이에요?", opts: ["네, 학생이에요.", "네, 학생이 아니에요.", "아니요, 학생이에요.", "네, 학생이 없어요."], a: 0, exp: "Savol: «Talabamisiz?» — Ha, talabaman." },
        { q: "TOPIK 듣기 1-tur. To'g'ri javobni tanlang.", audio: "가방이 있어요?", opts: ["아니요, 가방이 없어요.", "아니요, 가방이 아니에요.", "네, 가방이에요.", "네, 가방이 없어요."], a: 0, exp: "«Bormi?» savoliga «yo'q» = 없어요. 아니에요 — «emas»." },
        { q: "TOPIK 듣기 5-tur. Davom ettiring.", audio: "감사합니다.", opts: ["아니에요.", "반갑습니다.", "안녕히 가세요.", "죄송합니다."], a: 0, exp: "Rahmatga javob: 아니에요 (arzimaydi)." },
        { q: "TOPIK 읽기 34-tur. Bo'sh joyga mos so'z.", text: "저는 편의점에서 물을 (   ).", opts: ["사요", "자요", "와요", "읽어요"], a: 0, exp: "Do'konda suv sotib olaman — 사요." },
        { q: "TOPIK 읽기 34-tur. Bo'sh joyga mos so'z.", text: "화장실이 은행 옆(   ) 있어요.", opts: ["에", "을", "는", "의"], a: 0, exp: "Joy + 에 있어요." },
        { q: "Narxni toping.", audio: "이 책은 만 오천 원이에요.", opts: ["15 000 원", "1 500 원", "50 000 원", "10 500 원"], a: 0, exp: "만 (10 000) + 오천 (5 000)." },
        { q: "TOPIK 읽기 43-tur. Matnga mos gap.", text: "저는 회사원이에요. 회사는 서울에 있어요. 회사 앞에 편의점이 있어요.", opts: ["회사 앞에 편의점이 있어요.", "저는 학생이에요.", "회사는 편의점 안에 있어요.", "서울에 회사가 없어요."], a: 0, exp: "Matnda: kompaniya oldida do'kon bor." },
        { q: "To'g'ri shaklni tanlang.", text: "저는 커피(   ) 마셔요.", opts: ["를", "을", "가", "에"], a: 0, exp: "커피 unli bilan tugaydi → 를." }
      ]
    }
  ]
});

STAGES.push({
  id: "b", line: 3, color: "#EF7C1C", name: "Kundalik hayot", ko: "일상",
  lessons: [
    {
      id: "b1", type: "lesson", t: "Qayerga? Qayerda?", k: "장소",
      goal: "Borish yo'nalishi va ish-harakat joyini farqlash.",
      tip: "에 = «-ga» (boraman) yoki «-da» (bor, turadi). 에서 = harakat bajariladigan joy «-da» yoki «-dan». Ya'ni: 식당에 가요 (oshxonaga boraman), 식당에서 먹어요 (oshxonada yeyman).",
      v: [
        ["식당", "oshxona, restoran"], ["카페", "kafe"], ["시장", "bozor"], ["병원", "shifoxona"], ["공원", "park"],
        ["도서관", "kutubxona"], ["영화관", "kinoteatr"], ["백화점", "univermag"], ["지하철역", "metro bekati"],
        ["공항", "aeroport"], ["마트", "supermarket"], ["가게", "do'kon"], ["어디", "qayer"]
      ],
      g: [
        {
          p: "N에 가요 / 와요", uz: "N-ga boraman / kelaman",
          d: "Yo'nalish. 가다, 오다, 다니다 kabi harakat fe'llari bilan.",
          ex: [["어디에 가요?", "Qayerga ketyapsiz?"], ["저는 지금 병원에 가요.", "Men hozir shifoxonaga ketyapman."]]
        },
        {
          p: "N에서 V", uz: "N-da (ish qilmoq)",
          d: "Harakat sodir bo'ladigan joy. Shuningdek «-dan»: 우즈베키스탄에서 왔어요 — O'zbekistondan keldim.",
          ex: [["저는 도서관에서 공부해요.", "Men kutubxonada o'qiyman."], ["친구는 카페에서 일해요.", "Do'stim kafeda ishlaydi."], ["시장에서 과일을 사요.", "Bozordan meva sotib olaman."]]
        }
      ],
      c: [
        ["저는 공항___ 가요.", "에", ["에서", "을", "는"], "Men aeroportga boraman."],
        ["저는 식당___ 밥을 먹어요.", "에서", ["에", "를", "이"], "Men oshxonada ovqat yeyman."],
        ["영화관___ 영화를 봐요.", "에서", ["에", "의", "도"], "Kinoteatrda kino ko'raman."],
        ["친구가 집___ 와요.", "에", ["에서", "을", "의"], "Do'stim uyga keladi."]
      ]
    },
    {
      id: "b2", type: "lesson", t: "Sonlar 2: sanash", k: "숫자 2",
      goal: "Sof koreyscha sonlar va sanoq so'zlari bilan buyurtma berish.",
      tip: "Bu qator — narsa, odam, yosh va soatni sanash uchun. Kafedagi «아메리카노 한 잔 주세요» shu yerdan.",
      v: [
        ["하나", "1 (bitta)", "Sanoq so'z oldida: 한"], ["둘", "2", "Sanoq so'z oldida: 두"], ["셋", "3", "Sanoq so'z oldida: 세"], ["넷", "4", "Sanoq so'z oldida: 네"],
        ["다섯", "5"], ["여섯", "6"], ["일곱", "7"], ["여덟", "8"], ["아홉", "9"], ["열", "10"], ["스물", "20", "Sanoq so'z oldida: 스무"],
        ["개", "dona"], ["명", "nafar (odam)"], ["잔", "stakan, finjon"], ["병", "shisha"], ["살", "yosh"], ["몇", "nechta"]
      ],
      g: [
        {
          p: "N + son + sanoq so'z", uz: "son + dona N",
          d: "Tartib o'zbekchadan farq qiladi: avval narsa, keyin son va sanoq so'z. 하나, 둘, 셋, 넷 → 한, 두, 세, 네 ga qisqaradi.",
          ex: [["사과 세 개 있어요.", "Uchta olma bor."], ["학생이 다섯 명 있어요.", "Besh nafar talaba bor."], ["저는 스물다섯 살이에요.", "Men yigirma besh yoshdaman."]]
        },
        {
          p: "N 주세요", uz: "N bering (iltimos)",
          d: "Buyurtma va iltimosning eng oddiy shakli.",
          ex: [["커피 한 잔 주세요.", "Bir finjon qahva bering."], ["물 두 병 주세요.", "Ikki shisha suv bering."]]
        }
      ],
      c: [
        ["커피 ___ 잔 주세요. (1)", "한", ["하나", "일", "두"], "Bitta qahva bering."],
        ["친구가 ___ 명 있어요. (3)", "세", ["셋", "삼", "네"], "Uchta do'stim bor."],
        ["가: ___ 살이에요?  나: 스무 살이에요.", "몇", ["뭐", "얼마", "어디"], "— Necha yoshdasiz? — Yigirmada."],
        ["물 두 ___ 주세요.", "병", ["명", "살", "원"], "Ikki shisha suv bering."]
      ]
    },
    {
      id: "b3", type: "lesson", t: "Vaqt", k: "시간",
      goal: "Soatni aytish va kun tartibini tasvirlash.",
      tip: "Diqqat: soat — sof koreyscha (한 시, 두 시), daqiqa — xitoycha (십 분, 삼십 분). 3:30 = 세 시 삼십 분 yoki 세 시 반.",
      v: [
        ["시", "soat (nechchi)"], ["분", "daqiqa"], ["반", "yarim"], ["오전", "tushgacha (AM)"], ["오후", "tushdan keyin (PM)"],
        ["지금", "hozir"], ["오늘", "bugun"], ["내일", "ertaga"], ["어제", "kecha"], ["아침", "ertalab; nonushta"],
        ["점심", "tush; tushlik"], ["저녁", "kechqurun; kechki ovqat"], ["밤", "tun"], ["언제", "qachon"], ["매일", "har kuni"]
      ],
      g: [
        {
          p: "vaqt + 에", uz: "vaqt + -da",
          d: "Soat, kun qismi, sana bilan 에 keladi. 오늘, 내일, 어제, 지금, 매일 bilan 에 qo'yilmaydi.",
          ex: [["저는 일곱 시에 일어나요.", "Men soat yettida turaman."], ["지금 몇 시예요?", "Hozir soat nechchi?"], ["오후 두 시 반에 친구를 만나요.", "Tushdan keyin ikki yarimda do'stim bilan uchrashaman."]]
        },
        {
          p: "N부터 N까지", uz: "N-dan N-gacha (vaqt)",
          d: "Vaqt oralig'i. Joy uchun 에서 ~ 까지 ishlatiladi.",
          ex: [["아홉 시부터 여섯 시까지 일해요.", "Soat to'qqizdan oltigacha ishlayman."], ["오전부터 오후까지 공부해요.", "Ertalabdan tushdan keyingacha o'qiyman."]]
        }
      ],
      c: [
        ["지금 ___ 시예요?", "몇", ["뭐", "언제", "얼마"], "Hozir soat nechchi?"],
        ["저는 여덟 시___ 회사에 가요.", "에", ["에서", "를", "은"], "Men soat sakkizda ishga boraman."],
        ["한 시___ 두 시까지 점심을 먹어요.", "부터", ["까지", "에서", "에"], "Birdan ikkigacha tushlik qilaman."],
        ["3:30 = 세 시 ___", "반", ["분", "밤", "번"], "uch yarim"]
      ]
    },
    {
      id: "b4", type: "lesson", t: "Hafta va o'tgan zamon", k: "요일 · 과거",
      goal: "Hafta kunlari; kecha nima qilganingizni aytish.",
      tip: "O'tgan zamon — hozirgi zamon shakliga ㅆ qo'shish: 가요 → 갔어요, 먹어요 → 먹었어요, 해요 → 했어요.",
      v: [
        ["월요일", "dushanba"], ["화요일", "seshanba"], ["수요일", "chorshanba"], ["목요일", "payshanba"], ["금요일", "juma"],
        ["토요일", "shanba"], ["일요일", "yakshanba"], ["주말", "dam olish kunlari"], ["지난주", "o'tgan hafta"],
        ["이번 주", "shu hafta"], ["다음 주", "kelasi hafta"], ["무슨", "qanday, qaysi"], ["쉬다", "dam olmoq"]
      ],
      g: [
        {
          p: "V-았어요 / V-었어요 / 했어요", uz: "o'tgan zamon: -di",
          d: "ㅏ, ㅗ → 았어요 (가다 → 갔어요, 보다 → 봤어요). Boshqa unlilar → 었어요 (먹다 → 먹었어요, 마시다 → 마셨어요). 하다 → 했어요. Ot bilan: 이었어요 / 였어요.",
          ex: [["어제 친구를 만났어요.", "Kecha do'stim bilan uchrashdim."], ["주말에 집에서 쉬었어요.", "Dam olish kunlari uyda dam oldim."], ["지난주에 한국어를 공부했어요.", "O'tgan hafta koreys tilini o'rgandim."]]
        }
      ],
      c: [
        ["어제 영화를 ___.", "봤어요", ["봐요", "보요", "봤아요"], "Kecha kino ko'rdim."],
        ["지난주에 시장에 ___.", "갔어요", ["가요", "갔었요", "가었어요"], "O'tgan hafta bozorga bordim."],
        ["아침에 빵을 ___.", "먹었어요", ["먹았어요", "먹어요", "먹했어요"], "Ertalab non yedim."],
        ["오늘은 ___ 요일이에요?", "무슨", ["몇", "누구", "어디"], "Bugun haftaning qaysi kuni?"],
        ["토요일, 일요일 = ___", "주말", ["매일", "오전", "지난주"], "dam olish kunlari"]
      ]
    },
    {
      id: "b5", type: "lesson", t: "Inkor va sifatlar", k: "부정 · 형용사",
      goal: "«Qilmayman», «qila olmayman» deyish va narsalarni tasvirlash.",
      tip: "Koreys tilida sifat ham fe'l kabi tuslanadi: 좋다 → 좋아요 (yaxshi), 좋았어요 (yaxshi edi).",
      v: [
        ["좋다", "yaxshi"], ["나쁘다", "yomon"], ["크다", "katta"], ["작다", "kichik"], ["많다", "ko'p"], ["적다", "kam"],
        ["비싸다", "qimmat"], ["싸다", "arzon"], ["맛있다", "mazali"], ["맛없다", "bemaza"], ["재미있다", "qiziqarli"],
        ["바쁘다", "band"], ["아주", "juda"], ["조금", "ozgina"]
      ],
      g: [
        {
          p: "안 V / V-지 않아요", uz: "-maydi (xohlamaydi yoki shunchaki yo'q)",
          d: "안 fe'ldan oldin turadi. 하다-fe'llarda ot va 하다 orasiga kiradi: 공부 안 해요. Uzun shakli -지 않아요 yozma nutqda va TOPIKda ko'p uchraydi.",
          ex: [["저는 커피를 안 마셔요.", "Men qahva ichmayman."], ["오늘은 바쁘지 않아요.", "Bugun band emasman."], ["이 가방은 안 비싸요.", "Bu sumka qimmat emas."]]
        },
        {
          p: "못 V", uz: "-a olmaydi",
          d: "Imkoniyat yo'qligi. 안 — «qilmayman», 못 — «qila olmayman».",
          ex: [["저는 오늘 학교에 못 가요.", "Men bugun maktabga bora olmayman."], ["어제 숙제를 못 했어요.", "Kecha uy vazifasini qila olmadim."]]
        }
      ],
      c: [
        ["이 식당은 아주 ___. (mazali)", "맛있어요", ["맛없어요", "비싸요", "바빠요"], "Bu oshxona juda mazali."],
        ["저는 고기를 ___ 먹어요. (yemayman)", "안", ["못", "도", "아주"], "Men go'sht yemayman."],
        ["시간이 없어요. 그래서 ___ 가요.", "못", ["아주", "조금", "많이"], "Vaqtim yo'q. Shuning uchun bora olmayman."],
        ["오늘은 바쁘___ 않아요.", "지", ["안", "가", "에"], "Bugun band emasman."],
        ["크다 ↔ ___", "작다", ["적다", "싸다", "많다"], "katta ↔ kichik"]
      ]
    },
    {
      id: "b6", type: "lesson", t: "Oila va hurmat", k: "가족",
      goal: "Oila a'zolari; kattalar haqida hurmat bilan gapirish.",
      tip: "O'zbekchadagi «aka / opa / uka» tizimi koreyschada ham bor, faqat gapiruvchining jinsiga ham bog'liq: erkak «형, 누나», ayol «오빠, 언니» deydi.",
      v: [
        ["가족", "oila"], ["아버지", "ota"], ["어머니", "ona"], ["부모님", "ota-ona"], ["형", "aka (erkak uchun)"],
        ["오빠", "aka (ayol uchun)"], ["누나", "opa (erkak uchun)"], ["언니", "opa (ayol uchun)"], ["동생", "uka, singil"],
        ["남편", "er"], ["아내", "xotin"], ["아이", "bola"], ["할머니", "buvi"], ["할아버지", "bobo"], ["살다", "yashamoq"]
      ],
      g: [
        {
          p: "V-(으)세요", uz: "hurmat shakli: -adilar",
          d: "Kattalar va notanish odamlar haqida. Unlidan keyin 세요, undoshdan keyin 으세요: 가다 → 가세요, 읽다 → 읽으세요. Maxsus: 있다 → 계세요, 먹다 → 드세요, 자다 → 주무세요.",
          ex: [["아버지는 회사에 가세요.", "Otam ishga boradilar."], ["할머니는 집에 계세요.", "Buvim uydalar."], ["부모님은 우즈베키스탄에 사세요.", "Ota-onam O'zbekistonda yashaydilar."]]
        },
        {
          p: "N하고 N / N하고 같이", uz: "N va N / N bilan birga",
          d: "하고 — og'zaki nutqda. Yozma nutqda 와/과 ishlatiladi (unlidan keyin 와, undoshdan keyin 과).",
          ex: [["저는 동생하고 같이 살아요.", "Men ukam bilan birga yashayman."], ["형하고 누나가 있어요.", "Akam va opam bor."]]
        }
      ],
      c: [
        ["어머니는 지금 집에 ___.", "계세요", ["있어요", "가요", "이에요"], "Onam hozir uydalar."],
        ["저는 친구___ 같이 영화를 봤어요.", "하고", ["에서", "를", "의"], "Do'stim bilan birga kino ko'rdim."],
        ["할아버지는 책을 ___.", "읽으세요", ["읽세요", "읽어세요", "읽으요"], "Bobom kitob o'qiydilar."],
        ["아버지 + 어머니 = ___", "부모님", ["동생", "남편", "가족"], "ota-ona"]
      ]
    },
    {
      id: "bt", type: "test", t: "Nazorat: 3-liniya", k: "환승 시험",
      goal: "TOPIK I formatidagi savollar. 80% va undan yuqori — 4-liniya ochiladi.",
      qs: [
        { q: "TOPIK 듣기 7-tur. Bu qayer?", audio: "커피 한 잔 주세요. 네, 사천 원입니다.", opts: ["카페", "병원", "도서관", "은행"], a: 0, exp: "«Bir finjon qahva bering» — kafe." },
        { q: "TOPIK 듣기 7-tur. Bu qayer?", audio: "한국어 책이 어디에 있어요? 한국어 책은 저기에 있어요.", opts: ["도서관", "공항", "영화관", "식당"], a: 0, exp: "Kitob qidirilmoqda — kutubxona." },
        { q: "TOPIK 듣기 1-tur. To'g'ri javobni tanlang.", audio: "어제 뭐 했어요?", opts: ["친구를 만났어요.", "친구를 만나요.", "내일 만나요.", "친구가 없어요."], a: 0, exp: "Savol o'tgan zamonda — javob ham: 만났어요." },
        { q: "TOPIK 듣기 3-tur. To'g'ri javobni tanlang.", audio: "몇 시에 일어나요?", opts: ["일곱 시에 일어나요.", "집에서 일어나요.", "매일 일어나요.", "일곱 명이에요."], a: 0, exp: "«Soat nechada?» — 일곱 시에." },
        { q: "TOPIK 읽기 31-tur. Nima haqida?", text: "오늘은 금요일입니다. 내일은 토요일입니다.", opts: ["요일", "시간", "가족", "나이"], a: 0, exp: "Juma, shanba — hafta kunlari (요일)." },
        { q: "TOPIK 읽기 31-tur. Nima haqida?", text: "아버지는 회사원입니다. 어머니는 선생님입니다. 동생은 학생입니다.", opts: ["가족", "학교", "주말", "장소"], a: 0, exp: "Ota, ona, uka — oila (가족)." },
        { q: "TOPIK 읽기 34-tur. Bo'sh joyga mos so'z.", text: "저는 도서관(   ) 책을 읽어요.", opts: ["에서", "에", "을", "하고"], a: 0, exp: "Harakat joyi → 에서." },
        { q: "TOPIK 읽기 35-tur. Bo'sh joyga mos so'z.", text: "이 가방은 아주 (   ). 그래서 못 사요.", opts: ["비싸요", "싸요", "좋아요", "작아요"], a: 0, exp: "Sotib ololmayman, chunki qimmat." },
        { q: "TOPIK 읽기 43-tur. Matnga mos gap.", text: "저는 주말에 친구하고 같이 영화관에 갔어요. 영화가 아주 재미있었어요. 영화를 보고 식당에서 저녁을 먹었어요.", opts: ["친구하고 영화를 봤어요.", "영화가 재미없었어요.", "집에서 저녁을 먹었어요.", "월요일에 영화관에 갔어요."], a: 0, exp: "Do'sti bilan kino ko'rgan; kino qiziqarli; kechki ovqat restoranda." },
        { q: "Buyurtmani toping.", audio: "커피 두 잔하고 물 한 병 주세요.", opts: ["Ikki qahva va bir shisha suv", "Bir qahva va ikki shisha suv", "Ikki qahva va ikki shisha suv", "Uch qahva"], a: 0, exp: "두 잔 — ikki finjon, 한 병 — bir shisha." }
      ]
    }
  ]
});
