STAGES.push({
  id: "c", line: 4, color: "#00A5DE", name: "Shaharda", ko: "도시 생활",
  lessons: [
    {
      id: "c1", type: "lesson", t: "Ovqat va restoran", k: "음식",
      goal: "Taom buyurtma qilish va nima xohlashingizni aytish.",
      tip: "-고 싶어요 = o'zbekcha «-moqchiman / -gim kelyapti». Fe'l o'zagiga to'g'ridan-to'g'ri qo'shiladi.",
      v: [
        ["밥", "guruch; ovqat"], ["김치", "kimchi"], ["불고기", "bulgogi (marinadlangan go'sht)"], ["비빔밥", "bibimbap"], ["라면", "ramyon (lag'mon)"],
        ["고기", "go'sht"], ["과일", "meva"], ["빵", "non"], ["우유", "sut"], ["메뉴", "menyu"],
        ["맵다", "achchiq"], ["달다", "shirin"], ["배고프다", "qorni och"], ["주문하다", "buyurtma bermoq"]
      ],
      g: [
        {
          p: "V-고 싶어요", uz: "-moqchiman, -gim kelyapti",
          d: "O'zak + 고 싶어요. Inkor: -고 싶지 않아요. Uchinchi shaxs uchun -고 싶어해요.",
          ex: [["저는 불고기를 먹고 싶어요.", "Men bulgogi yegim kelyapti."], ["한국에 가고 싶어요.", "Koreyaga borgim kelyapti."], ["오늘은 집에서 쉬고 싶어요.", "Bugun uyda dam olgim kelyapti."]]
        },
        {
          p: "뭘 드릴까요? — N 주세요", uz: "Nima beray? — N bering",
          d: "Restoran va kafedagi tayyor qolip. 여기요! — ofitsiantni chaqirish. 맵다 → 매워요 (ㅂ tushib, 워 bo'ladi).",
          ex: [["여기요, 메뉴 좀 주세요.", "Kechirasiz, menyuni bering."], ["비빔밥 하나하고 라면 하나 주세요.", "Bitta bibimbap va bitta ramyon bering."], ["김치가 조금 매워요.", "Kimchi biroz achchiq."]]
        }
      ],
      c: [
        ["저는 커피를 마시___ 싶어요.", "고", ["지", "에", "를"], "Qahva ichgim kelyapti."],
        ["배고파요. 밥을 ___ 싶어요.", "먹고", ["먹어", "먹은", "먹지"], "Qornim och. Ovqat yegim kelyapti."],
        ["이 라면은 아주 ___. (achchiq)", "매워요", ["맵어요", "매아요", "맵요"], "Bu ramyon juda achchiq."],
        ["여기요, 물 좀 ___.", "주세요", ["가세요", "계세요", "오세요"], "Kechirasiz, suv bering."]
      ]
    },
    {
      id: "c2", type: "lesson", t: "Xarid", k: "쇼핑",
      goal: "Do'konda narsa tanlash, so'rash va iltimos qilish.",
      tip: "-(으)세요 hurmat shakli buyruq-iltimos ma'nosida ham keladi: 앉으세요 — o'tiring. Sotuvchilar aynan shu shaklda gapiradi.",
      v: [
        ["옷", "kiyim"], ["신발", "oyoq kiyim"], ["바지", "shim"], ["치마", "yubka"], ["모자", "bosh kiyim"],
        ["돈", "pul"], ["카드", "karta"], ["색", "rang"], ["사이즈", "o'lcham"], ["입다", "kiymoq (kiyim)"],
        ["신다", "kiymoq (oyoq kiyim)"], ["예쁘다", "chiroyli"], ["다른", "boshqa"], ["어떤", "qanday"]
      ],
      g: [
        {
          p: "V-(으)세요", uz: "-ing (xushmuomala iltimos)",
          d: "Unli o'zak + 세요, undosh o'zak + 으세요. 어서 오세요 — xush kelibsiz.",
          ex: [["여기에 앉으세요.", "Bu yerga o'tiring."], ["이 옷을 입어 보세요.", "Bu kiyimni kiyib ko'ring."], ["잠깐만 기다리세요.", "Bir oz kuting."]]
        },
        {
          p: "이 / 그 / 저 + N", uz: "bu / shu / anavi + N",
          d: "이 — menga yaqin, 그 — sizga yaqin yoki ilgari aytilgan, 저 — ikkimizdan ham uzoq.",
          ex: [["이 바지는 얼마예요?", "Bu shim qancha turadi?"], ["저 모자 좀 보여 주세요.", "Anavi shlyapani ko'rsating."], ["다른 색 있어요?", "Boshqa rangi bormi?"]]
        }
      ],
      c: [
        ["어서 ___.", "오세요", ["오요", "와세요", "옵세요"], "Xush kelibsiz."],
        ["여기에 이름을 ___. (쓰다)", "쓰세요", ["쓰으세요", "써세요", "씁세요"], "Bu yerga ismingizni yozing."],
        ["___ 색 있어요? (boshqa)", "다른", ["어떤", "이", "아주"], "Boshqa rangi bormi?"],
        ["카드___ 돼요?", "도", ["에서", "의", "를"], "Karta bilan ham bo'ladimi?"]
      ]
    },
    {
      id: "c3", type: "lesson", t: "Transport", k: "교통",
      goal: "Qanday borishni va qancha vaqt ketishini aytish.",
      tip: "(으)로 = «bilan / orqali» (vosita) va «tomonga» (yo'nalish). 지하철로 가요 — metroda boraman.",
      v: [
        ["버스", "avtobus"], ["지하철", "metro"], ["택시", "taksi"], ["기차", "poyezd"], ["비행기", "samolyot"],
        ["자동차", "avtomobil"], ["자전거", "velosiped"], ["타다", "minmoq"], ["내리다", "tushmoq"],
        ["갈아타다", "almashib minmoq"], ["걸리다", "(vaqt) ketmoq"], ["걷다", "piyoda yurmoq", "걸어요 — ㄷ → ㄹ"], ["길", "yo'l, ko'cha"], ["정류장", "avtobus bekati"]
      ],
      g: [
        {
          p: "N(으)로", uz: "N bilan (vosita); N tomonga",
          d: "Unli yoki ㄹ dan keyin 로, boshqa undoshdan keyin 으로. Transport, asbob, til: 한국어로 — koreys tilida. 타다 fe'li 을/를 oladi: 버스를 타요.",
          ex: [["저는 지하철로 회사에 가요.", "Men ishga metroda boraman."], ["2호선으로 갈아타세요.", "2-liniyaga almashib mining."], ["오른쪽으로 가세요.", "O'ng tomonga yuring."]]
        },
        {
          p: "N에서 N까지 … 걸려요", uz: "N-dan N-gacha … ketadi",
          d: "Joy oralig'i. 얼마나 걸려요? — Qancha vaqt ketadi?",
          ex: [["집에서 학교까지 삼십 분 걸려요.", "Uydan maktabgacha o'ttiz daqiqa ketadi."], ["서울에서 부산까지 기차로 가요.", "Seuldan Pusangacha poyezdda boraman."]]
        }
      ],
      c: [
        ["저는 버스___ 타요.", "를", ["에", "로", "에서"], "Men avtobusga minaman."],
        ["학교에 자전거___ 가요.", "로", ["으로", "를", "에"], "Maktabga velosipedda boraman."],
        ["집___ 회사까지 한 시간 걸려요.", "에서", ["부터", "에", "으로"], "Uydan ishgacha bir soat ketadi."],
        ["서울역에서 ___. (tushing)", "내리세요", ["타세요", "걸리세요", "걸으세요"], "Seul bekatida tushing."],
        ["3호선___ 갈아타세요.", "으로", ["로", "를", "에서"], "3-liniyaga almashib mining."]
      ]
    },
    {
      id: "c4", type: "lesson", t: "Reja va taklif", k: "계획",
      goal: "Kelasi zamon; «-aylikmi?» deb taklif qilish.",
      tip: "-(으)ㄹ 거예요 = «-moqchiman / -adi (kelajakda)». -(으)ㄹ까요? = «-aylikmi?».",
      v: [
        ["여행", "sayohat"], ["휴가", "ta'til (ishdan)"], ["방학", "ta'til (o'qishdan)"], ["계획", "reja"], ["영화", "kino"],
        ["음악", "musiqa"], ["운동", "sport, mashq"], ["수영", "suzish"], ["등산", "toqqa chiqish"], ["쇼핑", "xarid"],
        ["사진", "rasm, surat"], ["노래", "qo'shiq"], ["같이", "birga"], ["아마", "ehtimol"]
      ],
      g: [
        {
          p: "V-(으)ㄹ 거예요", uz: "-moqchiman; -adi (kelasi zamon)",
          d: "Unli o'zak + ㄹ 거예요 (가다 → 갈 거예요), undosh o'zak + 을 거예요 (먹다 → 먹을 거예요). Taxmin ma'nosini ham beradi: 아마 비가 올 거예요.",
          ex: [["내일 친구를 만날 거예요.", "Ertaga do'stim bilan uchrashaman."], ["주말에 등산을 할 거예요.", "Dam olish kuni toqqa chiqmoqchiman."], ["방학에 한국에 갈 거예요.", "Ta'tilda Koreyaga boraman."]]
        },
        {
          p: "V-(으)ㄹ까요? — V-아요/어요, 좋아요", uz: "-aylikmi? — Mayli, -aylik",
          d: "Birga qilishni taklif qilish. Rasmiyroq taklif: -(으)ㅂ시다 (갑시다 — ketdik).",
          ex: [["같이 영화를 볼까요?", "Birga kino ko'raylikmi?"], ["뭐 먹을까요?", "Nima yeymiz?"], ["좋아요. 같이 가요.", "Mayli. Birga boraylik."]]
        }
      ],
      c: [
        ["내일 도서관에 ___ 거예요.", "갈", ["가", "간", "갔"], "Ertaga kutubxonaga boraman."],
        ["저녁에 불고기를 ___ 거예요.", "먹을", ["먹", "먹은", "먹어"], "Kechqurun bulgogi yeyman."],
        ["같이 커피를 ___?", "마실까요", ["마셨어요", "마시세요", "마실 거예요"], "Birga qahva ichaylikmi?"],
        ["가: 주말에 뭐 할 거예요?  나: 사진을 ___ 거예요.", "찍을", ["찍", "찍은", "찍어"], "— Dam olish kuni nima qilasiz? — Rasm olaman."]
      ]
    },
    {
      id: "c5", type: "lesson", t: "Ob-havo va fasllar", k: "날씨",
      goal: "Ob-havoni tasvirlash; gaplarni «va», «lekin» bilan ulash.",
      tip: "TOPIK o'qish bo'limida bog'lovchilar eng ko'p sinaladi. -고 = «va», -지만 = «lekin».",
      v: [
        ["날씨", "ob-havo"], ["봄", "bahor"], ["여름", "yoz"], ["가을", "kuz"], ["겨울", "qish"],
        ["비", "yomg'ir"], ["눈", "qor; ko'z"], ["바람", "shamol"], ["덥다", "issiq", "더워요"], ["춥다", "sovuq", "추워요"],
        ["따뜻하다", "iliq"], ["시원하다", "salqin"], ["맑다", "ochiq (havo)"], ["흐리다", "bulutli"]
      ],
      g: [
        {
          p: "A/V-고", uz: "va, -ib",
          d: "Ikki gapni teng bog'laydi yoki ketma-ketlikni bildiradi. O'zakka to'g'ridan-to'g'ri qo'shiladi.",
          ex: [["여름은 덥고 겨울은 추워요.", "Yoz issiq, qish esa sovuq."], ["저는 밥을 먹고 커피를 마셔요.", "Men ovqat yeb, qahva ichaman."]]
        },
        {
          p: "A/V-지만", uz: "lekin, -sa ham",
          d: "Qarama-qarshilik. Gap boshida: 하지만 / 그렇지만.",
          ex: [["한국어는 어렵지만 재미있어요.", "Koreys tili qiyin, lekin qiziqarli."], ["오늘은 바람이 불지만 따뜻해요.", "Bugun shamol esyapti, lekin iliq."], ["비가 오지만 학교에 가요.", "Yomg'ir yog'yapti, lekin maktabga boraman."]]
        }
      ],
      c: [
        ["오늘은 날씨가 맑___ 따뜻해요.", "고", ["지만", "에", "를"], "Bugun havo ochiq va iliq."],
        ["이 식당은 비싸___ 맛있어요.", "지만", ["고", "에서", "도"], "Bu restoran qimmat, lekin mazali."],
        ["겨울에는 눈이 ___.", "와요", ["가요", "먹어요", "해요"], "Qishda qor yog'adi."],
        ["여름은 아주 ___.", "더워요", ["덥어요", "추워요", "더어요"], "Yoz juda issiq."],
        ["봄 → 여름 → ___ → 겨울", "가을", ["바람", "날씨", "주말"], "bahor → yoz → kuz → qish"]
      ]
    },
    {
      id: "c6", type: "lesson", t: "Sabab va sog'liq", k: "이유 · 건강",
      goal: "Sababni tushuntirish; o'zingizni qanday his qilayotganingizni aytish.",
      tip: "-아서/어서 = o'zbekcha «-gani uchun / -ib». Bu shakl o'tgan zamon qo'shimchasini olmaydi: 아파서 못 갔어요.",
      v: [
        ["아프다", "og'rimoq, kasal bo'lmoq", "아파요"], ["피곤하다", "charchagan"], ["기쁘다", "xursand"], ["슬프다", "xafa, g'amgin"],
        ["머리", "bosh"], ["배", "qorin"], ["감기", "shamollash"], ["약", "dori"], ["약국", "dorixona"],
        ["늦다", "kech qolmoq"], ["일찍", "erta"], ["왜", "nega"], ["그래서", "shuning uchun"], ["많이", "ko'p"]
      ],
      g: [
        {
          p: "A/V-아서 / 어서", uz: "-gani uchun, -ib",
          d: "Sabab. Hozirgi zamon shaklidan 요 ni olib 서 qo'shing: 아파요 → 아파서, 늦어요 → 늦어서. Buyruq va taklif bilan ishlatilmaydi (u yerda -(으)니까).",
          ex: [["머리가 아파서 약을 먹었어요.", "Boshim og'rigani uchun dori ichdim."], ["늦어서 죄송합니다.", "Kech qolganim uchun uzr."], ["만나서 반갑습니다.", "Tanishganimdan xursandman."]]
        },
        {
          p: "왜 …? — N 때문에 / 그래서", uz: "Nega? — N tufayli / shuning uchun",
          d: "때문에 otdan keyin keladi. 그래서 ikki alohida gapni bog'laydi.",
          ex: [["왜 학교에 안 왔어요?", "Nega maktabga kelmadingiz?"], ["감기 때문에 못 갔어요.", "Shamollash tufayli bora olmadim."], ["피곤해요. 그래서 일찍 잘 거예요.", "Charchadim. Shuning uchun erta uxlayman."]]
        }
      ],
      c: [
        ["배가 ___ 병원에 갔어요.", "아파서", ["아프고", "아팠서", "아프지만"], "Qornim og'rigani uchun shifoxonaga bordim."],
        ["___ 죄송합니다. (kech qolib)", "늦어서", ["늦고", "늦지만", "늦었서"], "Kech qolganim uchun uzr."],
        ["비 ___ 못 갔어요.", "때문에", ["그래서", "하고", "까지"], "Yomg'ir tufayli bora olmadim."],
        ["감기에 걸렸어요. ___ 약을 먹어요.", "그래서", ["왜", "하지만", "아마"], "Shamolladim. Shuning uchun dori ichyapman."],
        ["가: ___ 안 먹어요?  나: 배가 아파서요.", "왜", ["뭐", "어디", "언제"], "— Nega yemayapsiz? — Qornim og'riyapti."]
      ]
    },
    {
      id: "ct", type: "test", t: "Nazorat: 4-liniya", k: "환승 시험",
      goal: "TOPIK I formatidagi savollar. 80% va undan yuqori — 1-liniya ochiladi.",
      qs: [
        { q: "TOPIK 듣기 5-tur. Davom ettiring.", audio: "늦어서 죄송합니다.", opts: ["괜찮아요.", "반갑습니다.", "감사합니다.", "안녕히 계세요."], a: 0, exp: "Uzrga javob: 괜찮아요." },
        { q: "TOPIK 듣기 7-tur. Bu qayer?", audio: "어디가 아프세요? 어제부터 머리가 아파요.", opts: ["병원", "식당", "백화점", "정류장"], a: 0, exp: "«Qayeringiz og'riyapti?» — shifoxona." },
        { q: "TOPIK 듣기 7-tur. Bu qayer?", audio: "이 바지 입어 볼까요? 네, 다른 색도 있어요.", opts: ["옷 가게", "약국", "공항", "도서관"], a: 0, exp: "Shim kiyib ko'rish — kiyim do'koni." },
        { q: "TOPIK 듣기 11-tur. Nima haqida gapirishyapti?", audio: "오늘은 비가 오고 바람이 불어요. 내일은 맑을 거예요.", opts: ["날씨", "교통", "음식", "쇼핑"], a: 0, exp: "Yomg'ir, shamol, ochiq — ob-havo." },
        { q: "TOPIK 읽기 31-tur. Nima haqida?", text: "저는 버스를 탑니다. 친구는 지하철을 탑니다.", opts: ["교통", "여행", "날씨", "음식"], a: 0, exp: "Avtobus, metro — transport (교통)." },
        { q: "TOPIK 읽기 34-tur. Bo'sh joyga mos so'z.", text: "배가 고픕니다. 그래서 (   )에 갑니다.", opts: ["식당", "약국", "공원", "은행"], a: 0, exp: "Qorni och — restoranga boradi." },
        { q: "TOPIK 읽기 36-tur. Bo'sh joyga mos so'z.", text: "한국어 공부는 (   ) 재미있어요.", opts: ["어렵지만", "어렵고", "어려워서", "어려운"], a: 0, exp: "Qiyin, lekin qiziqarli — qarama-qarshilik: -지만." },
        { q: "TOPIK 읽기 37-tur. Bo'sh joyga mos so'z.", text: "감기에 걸렸어요. 그래서 약을 (   ).", opts: ["먹었어요", "입었어요", "탔어요", "걸렸어요"], a: 0, exp: "Dori «yeyiladi»: 약을 먹다." },
        { q: "TOPIK 읽기 43-tur. Matnga mos gap.", text: "저는 다음 주에 휴가입니다. 친구하고 같이 부산에 갈 거예요. 부산까지 기차로 세 시간 걸립니다. 부산에서 사진을 많이 찍고 싶어요.", opts: ["부산에 기차로 갈 거예요.", "저는 지난주에 부산에 갔어요.", "부산까지 비행기를 탈 거예요.", "혼자 여행을 할 거예요."], a: 0, exp: "Kelasi hafta do'sti bilan poyezdda Pusanga boradi." },
        { q: "TOPIK 읽기 40-tur. Matnga mos KELMAYDIGAN gap.", text: "〈서울 식당〉\n비빔밥 8,000원 · 불고기 12,000원\n시간: 오전 11시 ~ 오후 9시\n월요일은 쉽니다.", opts: ["월요일에도 식당에 갈 수 있어요.", "불고기는 만 이천 원이에요.", "오후 아홉 시까지 해요.", "비빔밥은 팔천 원이에요."], a: 0, exp: "월요일은 쉽니다 — dushanba kuni yopiq." }
      ]
    }
  ]
});

STAGES.push({
  id: "d", line: 1, color: "#0052A4", name: "TOPIK I sari", ko: "토픽으로",
  lessons: [
    {
      id: "d1", type: "lesson", t: "Qila olaman, mumkin", k: "능력 · 허락",
      goal: "Qobiliyat, ruxsat va taqiqni ifodalash.",
      tip: "TOPIK e'lon matnlarida (40–42-savollar) «mumkin / mumkin emas» eng ko'p uchraydi.",
      v: [
        ["운전하다", "mashina haydamoq"], ["요리하다", "ovqat pishirmoq"], ["수영하다", "suzmoq"], ["말하다", "gapirmoq"],
        ["쓰다", "yozmoq; ishlatmoq"], ["듣다", "eshitmoq", "들어요 — ㄷ → ㄹ"], ["배우다", "o'rganmoq"], ["가르치다", "o'rgatmoq"],
        ["찍다", "(rasm) olmoq"], ["들어가다", "kirmoq"], ["앉다", "o'tirmoq"], ["피우다", "(sigaret) chekmoq"], ["잘", "yaxshi (ravish)"]
      ],
      g: [
        {
          p: "V-(으)ㄹ 수 있어요 / 없어요", uz: "-a olaman / -a olmayman",
          d: "Unli o'zak + ㄹ 수 있다, undosh o'zak + 을 수 있다.",
          ex: [["저는 한국어를 조금 할 수 있어요.", "Men koreyscha ozgina gapira olaman."], ["저는 운전할 수 없어요.", "Men mashina hayday olmayman."], ["김치를 먹을 수 있어요?", "Kimchi yeya olasizmi?"]]
        },
        {
          p: "V-아도/어도 돼요 · V-(으)면 안 돼요", uz: "-sa bo'ladi · -sa bo'lmaydi",
          d: "Ruxsat va taqiq. So'zma-so'z ham o'zbekchaga mos: «-sa ham bo'ladi», «-sa bo'lmaydi».",
          ex: [["여기에 앉아도 돼요?", "Bu yerga o'tirsam bo'ladimi?"], ["여기에서 사진을 찍으면 안 돼요.", "Bu yerda rasmga olish mumkin emas."], ["들어가도 돼요.", "Kirsangiz bo'ladi."]]
        }
      ],
      c: [
        ["저는 수영___ 수 있어요.", "할", ["하", "한", "해"], "Men suza olaman."],
        ["이 책을 읽___ 수 있어요?", "을", ["ㄹ", "는", "은"], "Bu kitobni o'qiy olasizmi?"],
        ["여기에서 담배를 피우___ 안 돼요.", "면", ["고", "서", "도"], "Bu yerda chekish mumkin emas."],
        ["이 컴퓨터를 써___ 돼요?", "도", ["면", "서", "고"], "Bu kompyuterni ishlatsam bo'ladimi?"]
      ]
    },
    {
      id: "d2", type: "lesson", t: "Kerak va mumkin emas", k: "의무 · 금지",
      goal: "Majburiyatni va «-mang» degan iltimosni ifodalash.",
      tip: "-아야/어야 해요 = «-ish kerak». -지 마세요 = «-mang».",
      v: [
        ["숙제", "uy vazifasi"], ["시험", "imtihon"], ["준비하다", "tayyorlamoq"], ["연습하다", "mashq qilmoq"],
        ["청소하다", "tozalamoq"], ["빨래하다", "kir yuvmoq"], ["일어나다", "turmoq (uyqudan)"], ["씻다", "yuvinmoq"],
        ["시작하다", "boshlamoq"], ["끝나다", "tugamoq"], ["기다리다", "kutmoq"], ["도와주다", "yordam bermoq"], ["꼭", "albatta"]
      ],
      g: [
        {
          p: "V-아야 / 어야 해요", uz: "-ish kerak",
          d: "Hozirgi zamon shaklidan 요 ni olib 야 해요 qo'shing: 가요 → 가야 해요, 먹어요 → 먹어야 해요. 해요 o'rnida 돼요 ham keladi.",
          ex: [["내일 시험이 있어서 공부해야 해요.", "Ertaga imtihon bo'lgani uchun o'qishim kerak."], ["일찍 일어나야 해요.", "Erta turish kerak."], ["약을 꼭 먹어야 돼요.", "Dorini albatta ichish kerak."]]
        },
        {
          p: "V-지 마세요", uz: "-mang",
          d: "Xushmuomala taqiq. O'zak + 지 마세요.",
          ex: [["여기에서 기다리지 마세요.", "Bu yerda kutmang."], ["걱정하지 마세요.", "Xavotir olmang."], ["수업 시간에 자지 마세요.", "Dars vaqtida uxlamang."]]
        }
      ],
      c: [
        ["숙제를 ___ 해요. (qilish kerak)", "해야", ["하야", "해서", "하고"], "Uy vazifasini qilish kerak."],
        ["내일 일찍 ___ 해요.", "일어나야", ["일어나", "일어나서", "일어나고"], "Ertaga erta turish kerak."],
        ["여기에 들어가___ 마세요.", "지", ["고", "서", "면"], "Bu yerga kirmang."],
        ["수업이 아홉 시에 ___. (boshlanadi)", "시작해요", ["끝나요", "기다려요", "씻어요"], "Dars soat to'qqizda boshlanadi."]
      ]
    },
    {
      id: "d3", type: "lesson", t: "Shart va vaqt", k: "조건 · 때",
      goal: "«-sa», «-ganda», «-dan oldin / keyin» deb gap tuzish.",
      tip: "-(으)면 = o'zbekcha «-sa». Bu to'rt qolip TOPIK I o'qish matnlarining deyarli har birida bor.",
      v: [
        ["시간", "vaqt"], ["문제", "muammo; savol"], ["질문", "savol"], ["대답", "javob"], ["생각하다", "o'ylamoq"],
        ["알다", "bilmoq", "알아요"], ["모르다", "bilmaslik", "몰라요"], ["전화하다", "qo'ng'iroq qilmoq"], ["보내다", "yubormoq"],
        ["받다", "olmoq (qabul)"], ["주다", "bermoq"], ["전", "oldin"], ["후", "keyin"], ["때", "payt"]
      ],
      g: [
        {
          p: "A/V-(으)면", uz: "-sa",
          d: "Unli o'zak + 면, undosh o'zak + 으면.",
          ex: [["시간이 있으면 같이 영화를 봐요.", "Vaqtingiz bo'lsa, birga kino ko'raylik."], ["질문이 있으면 전화하세요.", "Savolingiz bo'lsa, qo'ng'iroq qiling."], ["비가 오면 집에 있을 거예요.", "Yomg'ir yog'sa, uyda bo'laman."]]
        },
        {
          p: "V-(으)ㄹ 때 · V-기 전에 · V-(으)ㄴ 후에", uz: "-ganda · -ishdan oldin · -gandan keyin",
          d: "Ot bilan: 식사 전에, 수업 후에, 방학 때.",
          ex: [["밥을 먹기 전에 손을 씻어요.", "Ovqat yeyishdan oldin qo'l yuvaman."], ["수업이 끝난 후에 친구를 만나요.", "Dars tugagandan keyin do'stim bilan uchrashaman."], ["한국에 살 때 지하철을 많이 탔어요.", "Koreyada yashaganimda metroda ko'p yurardim."]]
        }
      ],
      c: [
        ["돈이 많___ 여행을 가고 싶어요.", "으면", ["면", "고", "지만"], "Pulim ko'p bo'lsa, sayohatga borgim keladi."],
        ["자___ 전에 책을 읽어요.", "기", ["고", "는", "을"], "Uxlashdan oldin kitob o'qiyman."],
        ["숙제를 한 ___에 쉴 거예요.", "후", ["전", "때", "안"], "Uy vazifasini qilgandan keyin dam olaman."],
        ["저는 그 사람의 이름을 ___. (bilmayman)", "몰라요", ["알아요", "모라요", "모르요"], "Men u odamning ismini bilmayman."],
        ["내일 날씨가 좋___ 등산을 갈까요?", "으면", ["면", "아서", "지만"], "Ertaga havo yaxshi bo'lsa, toqqa chiqaylikmi?"]
      ]
    },
    {
      id: "d4", type: "lesson", t: "Hozir qilyapman, qilib ko'rganman", k: "진행 · 경험",
      goal: "Davom etayotgan harakat va tajriba haqida gapirish.",
      tip: "-아/어 보다 = o'zbekcha «-ib ko'rmoq» — so'zma-so'z bir xil. Koreyadagi tajribangiz haqida gapirish uchun eng kerakli qolip.",
      v: [
        ["지내다", "(vaqt) o'tkazmoq, yashamoq"], ["찾다", "qidirmoq, topmoq"], ["만들다", "yasamoq, tayyorlamoq"], ["놀다", "o'ynamoq, dam olmoq"],
        ["웃다", "kulmoq"], ["울다", "yig'lamoq"], ["구경하다", "tomosha qilmoq"], ["여행하다", "sayohat qilmoq"],
        ["처음", "birinchi marta"], ["다시", "yana, qaytadan"], ["벌써", "allaqachon"], ["아직", "hali"], ["요즘", "shu kunlarda"]
      ],
      g: [
        {
          p: "V-고 있어요", uz: "-yapman (hozir)",
          d: "O'zak + 고 있어요. Hurmat shakli: -고 계세요.",
          ex: [["저는 요즘 한국어를 배우고 있어요.", "Men shu kunlarda koreys tilini o'rganyapman."], ["지금 뭐 하고 있어요?", "Hozir nima qilyapsiz?"], ["친구를 기다리고 있어요.", "Do'stimni kutyapman."]]
        },
        {
          p: "V-아/어 봤어요 · V-(으)ㄴ 적이 있어요", uz: "-ib ko'rganman",
          d: "Tajriba. -아/어 보세요 — «-ib ko'ring» (tavsiya). Inkor: 아직 안 가 봤어요.",
          ex: [["한국에서 살아 봤어요.", "Koreyada yashab ko'rganman."], ["김치를 만들어 본 적이 있어요.", "Kimchi tayyorlab ko'rganman."], ["이 음식을 한번 먹어 보세요.", "Bu taomni bir tatib ko'ring."]]
        }
      ],
      c: [
        ["지금 숙제를 하___ 있어요.", "고", ["서", "면", "지"], "Hozir uy vazifasini qilyapman."],
        ["제주도에 가 ___? (borib ko'rganmisiz)", "봤어요", ["봐요", "볼까요", "보세요"], "Jeju oroliga borib ko'rganmisiz?"],
        ["불고기를 먹어 본 ___이 있어요.", "적", ["때", "후", "전"], "Bulgogi yeb ko'rganman."],
        ["저는 ___ 부산에 안 가 봤어요.", "아직", ["벌써", "다시", "아주"], "Men hali Pusanga borib ko'rmaganman."]
      ]
    },
    {
      id: "d5", type: "lesson", t: "Taqqoslash va aniqlovchi", k: "비교 · 관형형",
      goal: "Narsalarni solishtirish; «-gan / -adigan» shaklida otni aniqlash.",
      tip: "Aniqlovchi otdan oldin keladi — o'zbekchadagi kabi: «men o'qiyotgan kitob» = 제가 읽는 책. Bu TOPIK II ga o'tish uchun eng muhim ko'prik.",
      v: [
        ["더", "ko'proq, yanada"], ["제일", "eng"], ["빠르다", "tez", "빨라요"], ["느리다", "sekin"], ["쉽다", "oson", "쉬워요"],
        ["어렵다", "qiyin", "어려워요"], ["가깝다", "yaqin", "가까워요"], ["멀다", "uzoq"], ["길다", "uzun"], ["짧다", "qisqa"],
        ["같다", "bir xil"], ["다르다", "farqli", "달라요"], ["보다", "-dan ko'ra"]
      ],
      g: [
        {
          p: "N보다 (더) A", uz: "N-dan ko'ra A-roq",
          d: "보다 solishtirilayotgan otdan keyin keladi. 제일 / 가장 — «eng».",
          ex: [["지하철이 버스보다 더 빨라요.", "Metro avtobusdan ko'ra tezroq."], ["저는 여름보다 겨울을 더 좋아해요.", "Men yozdan ko'ra qishni ko'proq yaxshi ko'raman."], ["이 문제가 제일 어려워요.", "Bu savol eng qiyini."]]
        },
        {
          p: "V-는 N · A-(으)ㄴ N · V-(으)ㄴ N · V-(으)ㄹ N", uz: "-yotgan N · (sifat) N · -gan N · -adigan N",
          d: "Fe'l hozirgi: 는 (먹는 사람). Sifat: (으)ㄴ (큰 가방, 작은 집). Fe'l o'tgan: (으)ㄴ (어제 본 영화). Kelasi: (으)ㄹ (내일 할 일).",
          ex: [["저기 책을 읽는 사람이 제 친구예요.", "Anavi kitob o'qiyotgan odam mening do'stim."], ["저는 매운 음식을 좋아해요.", "Men achchiq taomni yaxshi ko'raman."], ["어제 본 영화가 재미있었어요.", "Kecha ko'rgan kinom qiziqarli edi."]]
        }
      ],
      c: [
        ["비행기가 기차___ 빨라요.", "보다", ["에서", "까지", "하고"], "Samolyot poyezddan tezroq."],
        ["제가 좋아하___ 음식은 비빔밥이에요.", "는", ["은", "을", "고"], "Men yaxshi ko'radigan taom — bibimbap."],
        ["저는 ___ 집에 살아요. (작다)", "작은", ["작는", "작을", "작고"], "Men kichik uyda yashayman."],
        ["어제 ___ 옷이 아주 예뻐요. (사다)", "산", ["사는", "살", "사고"], "Kecha sotib olgan kiyimim juda chiroyli."],
        ["쉽다 ↔ ___", "어렵다", ["가깝다", "느리다", "짧다"], "oson ↔ qiyin"]
      ]
    },
    {
      id: "d6", type: "lesson", t: "Rasmiy uslub va e'lonlar", k: "격식체 · 안내문",
      goal: "TOPIK matnlari yoziladigan -ㅂ니다/습니다 uslubini va e'lon so'zlarini o'qish.",
      tip: "TOPIK I o'qish bo'limining deyarli hamma matni shu uslubda. Shaklni tanisangiz — bilgan so'zlaringiz yana ko'rinadi.",
      v: [
        ["안내", "ma'lumot, e'lon"], ["이용", "foydalanish"], ["요금", "to'lov, narx"], ["무료", "bepul"], ["휴일", "dam olish kuni"],
        ["예약", "bron qilish"], ["배달", "yetkazib berish"], ["초대", "taklif"], ["약속", "va'da; uchrashuv"], ["행사", "tadbir"],
        ["장소", "joy"], ["날짜", "sana"], ["모든", "barcha"], ["누구나", "har kim"]
      ],
      g: [
        {
          p: "A/V-ㅂ니다 / 습니다 · -ㅂ니까 / 습니까?", uz: "rasmiy uslub: -adi / -adimi?",
          d: "Unli o'zak + ㅂ니다 (가다 → 갑니다), undosh o'zak + 습니다 (먹다 → 먹습니다). O'tgan: 갔습니다. Kelasi: 갈 겁니다. Ot: 입니다.",
          ex: [["저는 매일 아침 운동을 합니다.", "Men har kuni ertalab sport bilan shug'ullanaman."], ["어제 친구와 같이 도서관에서 공부했습니다.", "Kecha do'stim bilan kutubxonada o'qidim."], ["이 버스는 공항에 갑니까?", "Bu avtobus aeroportga boradimi?"]]
        },
        {
          p: "N와/과 · N에게/한테", uz: "N bilan (yozma) · N-ga (kishiga)",
          d: "와 unlidan keyin, 과 undoshdan keyin. 에게 — yozma, 한테 — og'zaki: 친구에게 전화합니다.",
          ex: [["도서관은 누구나 무료로 이용할 수 있습니다.", "Kutubxonadan har kim bepul foydalanishi mumkin."], ["부모님과 같이 식당을 예약했습니다.", "Ota-onam bilan birga restoran bron qildim."], ["친구에게 초대 문자를 보냈습니다.", "Do'stimga taklif xabarini yubordim."]]
        }
      ],
      c: [
        ["먹다 → ___ (rasmiy)", "먹습니다", ["먹ㅂ니다", "먹읍니다", "먹입니다"], "yeyman / yeydi"],
        ["가다 → ___ (rasmiy)", "갑니다", ["가습니다", "갔니다", "가입니다"], "boraman / boradi"],
        ["이 행사는 요금이 없습니다. = ___입니다.", "무료", ["예약", "휴일", "배달"], "Bu tadbir bepul."],
        ["친구___ 선물을 줬습니다.", "에게", ["에서", "을", "과"], "Do'stimga sovg'a berdim."],
        ["어머니___ 같이 시장에 갑니다.", "와", ["과", "를", "에"], "Onam bilan birga bozorga boraman."]
      ]
    },
    {
      id: "dt", type: "test", t: "Mini TOPIK I", k: "모의고사",
      goal: "Yakuniy sinov: TOPIK I ning asosiy savol turlari. 80% — birinchi bosqich tugadi.",
      qs: [
        { q: "듣기 1-tur. To'g'ri javobni tanlang.", audio: "한국어를 할 수 있어요?", opts: ["네, 조금 할 수 있어요.", "네, 한국어 책이에요.", "아니요, 한국 사람이에요.", "네, 한국에 가요."], a: 0, exp: "«Koreyscha gapira olasizmi?» — Ha, ozgina." },
        { q: "듣기 5-tur. Davom ettiring.", audio: "여기에서 사진을 찍어도 돼요?", opts: ["네, 찍어도 돼요.", "네, 사진이에요.", "아니요, 사진이 없어요.", "네, 찍었어요."], a: 0, exp: "Ruxsat so'ralmoqda — «Ha, mumkin»." },
        { q: "듣기 7-tur. Bu qayer?", audio: "서울역까지 얼마나 걸려요? 이십 분쯤 걸려요. 여기에서 세워 드릴까요?", opts: ["택시", "병원", "식당", "도서관"], a: 0, exp: "«Shu yerda to'xtataymi?» — taksi." },
        { q: "듣기 11-tur. Nima haqida gapirishyapti?", audio: "저는 형이 한 명, 누나가 한 명 있어요. 저는 동생이 두 명 있어요.", opts: ["가족", "직업", "나이", "친구"], a: 0, exp: "Aka, opa, uka — oila." },
        { q: "듣기 17-tur. Mazmuniga mos gap.", audio: "주말에 뭐 할 거예요? 날씨가 좋으면 등산을 갈 거예요. 같이 갈까요? 좋아요. 저도 등산을 좋아해요.", opts: ["두 사람은 같이 등산을 갈 거예요.", "주말에 비가 올 거예요.", "두 사람은 영화를 볼 거예요.", "등산을 싫어해요."], a: 0, exp: "«Birga boraylikmi?» — «Mayli»." },
        { q: "읽기 31-tur. Nima haqida?", text: "봄은 따뜻합니다. 겨울은 춥습니다.", opts: ["계절", "시간", "장소", "취미"], a: 0, exp: "Bahor, qish — fasl (계절)." },
        { q: "읽기 34-tur. Bo'sh joyga mos so'z.", text: "눈이 나쁩니다. 그래서 (   )을 씁니다.", opts: ["안경", "모자", "우산", "신발"], a: 0, exp: "Ko'zi yomon — ko'zoynak (안경) taqadi. Kontekstdan topish — TOPIK ko'nikmasi." },
        { q: "읽기 36-tur. Bo'sh joyga mos so'z.", text: "시간이 (   ) 같이 저녁을 먹을까요?", opts: ["있으면", "있지만", "있어서", "있고"], a: 0, exp: "Shart: vaqtingiz bo'lsa — -(으)면." },
        { q: "읽기 38-tur. Bo'sh joyga mos so'z.", text: "도서관에서는 큰 소리로 (   ).", opts: ["말하면 안 됩니다", "말해야 합니다", "말하고 싶습니다", "말할 수 있습니다"], a: 0, exp: "Kutubxonada baland ovozda gapirish mumkin emas." },
        { q: "읽기 40-tur. Matnga mos KELMAYDIGAN gap.", text: "〈한국어 말하기 대회〉\n날짜: 10월 9일 (토) 오후 2시\n장소: 서울 도서관 3층\n요금: 무료\n누구나 올 수 있습니다.", opts: ["돈을 내야 합니다.", "토요일에 합니다.", "도서관에서 합니다.", "모든 사람이 갈 수 있습니다."], a: 0, exp: "요금: 무료 — bepul, pul to'lash shart emas." },
        { q: "읽기 43-tur. Matnga mos gap.", text: "저는 작년에 한국에 처음 왔습니다. 그때는 한국어를 못 했지만 지금은 조금 할 수 있습니다. 요즘 한국 친구와 같이 한국어를 연습하고 있습니다.", opts: ["지금은 한국어를 조금 할 수 있습니다.", "저는 한국에서 태어났습니다.", "한국 친구가 없습니다.", "작년에 한국어를 잘했습니다."], a: 0, exp: "Avval bilmagan, hozir ozgina gapira oladi." },
        { q: "읽기 46-tur. Asosiy fikr.", text: "저는 아침마다 공원에서 운동을 합니다. 운동을 하면 기분이 좋아지고 건강해집니다. 그래서 바빠도 운동을 꼭 합니다.", opts: ["운동은 건강에 좋아서 꼭 합니다.", "공원이 집에서 가깝습니다.", "아침에 바빠서 운동을 못 합니다.", "운동은 재미없습니다."], a: 0, exp: "Asosiy fikr odatda oxirgi gapda: band bo'lsam ham albatta sport qilaman." }
      ]
    }
  ]
});
