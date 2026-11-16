// O'qish mashqlari (type: "read") va 3–6급 uchun qo'shimcha so'z to'plamlari.
// read: gl=[so'z, tarjima]  ps=[{text, qs:[[savol, to'g'ri javob, [3 ta noto'g'ri], izoh]]}]
const addRead = (sid, items) => {
  const st = STAGES.find(s => s.id === sid), at = st.lessons.findIndex(l => l.type === "test");
  st.lessons.splice(at < 0 ? st.lessons.length : at, 0, ...items.map(r => Object.assign({ type: "read" }, r)));
};

// ---------- TOPIK I ----------
addRead("v", [
  {
    id: "r1", t: "O'qish: xat va e'lon", k: "읽기 연습 1", goal: "Shaxsiy xat va e'londan kerakli ma'lumotni topish.",
    gl: [["놀러 오다", "mehmonga kelmoq"], ["기간", "muddat, davr"], ["수업료", "o'qish haqi"], ["직접", "o'zi, bevosita"], ["근처", "yaqin atrof"]],
    ps: [
      { text: "민수 씨, 안녕하세요? 저는 지난주에 부산에 이사했습니다. 새 집은 바다에서 가깝고 방도 넓습니다. 그런데 아직 친구가 없어서 조금 심심합니다. 다음 달에 시간이 있으면 부산에 놀러 오세요. 같이 바다도 보고 맛있는 생선도 먹읍시다.", qs: [
        ["왜 이 글을 썼습니까?", "친구를 부산에 초대하려고", ["이사를 도와 달라고 부탁하려고", "새 집을 팔려고", "부산 음식을 소개하려고"], "«부산에 놀러 오세요» — taklif."],
        ["이 글의 내용과 같은 것은?", "새 집은 바다 근처에 있습니다.", ["저는 다음 달에 이사합니다.", "부산에 친구가 많습니다.", "방이 좁아서 불편합니다."], "바다에서 가깝고 — dengizga yaqin."],
        ["이 사람은 지금 어떻습니까?", "친구가 없어서 심심합니다.", ["집이 마음에 안 듭니다.", "바빠서 시간이 없습니다.", "생선을 싫어합니다."], "아직 친구가 없어서 조금 심심합니다."]
      ] },
      { text: "〈한국어 교실 학생 모집〉\n· 기간: 3월 2일 ~ 5월 30일\n· 시간: 매주 화요일, 목요일 저녁 7시 ~ 9시\n· 장소: 시청 3층 301호\n· 수업료: 무료 (교과서는 직접 사야 합니다)\n· 신청: 2월 20일까지 이메일로", qs: [
        ["수업은 일주일에 몇 번 있습니까?", "두 번", ["한 번", "세 번", "매일"], "Seshanba va payshanba — haftada ikki marta."],
        ["이 글의 내용과 맞지 않는 것은?", "교과서를 무료로 줍니다.", ["수업료를 내지 않습니다.", "저녁에 수업을 합니다.", "이메일로 신청합니다."], "Darslikni o'zingiz sotib olasiz."],
        ["언제까지 신청해야 합니까?", "2월 20일", ["3월 2일", "5월 30일", "매주 화요일"], "신청: 2월 20일까지."]
      ] }
    ]
  },
  {
    id: "r2", t: "O'qish: kundalik hikoya", k: "읽기 연습 2", goal: "Hikoya matnida asosiy fikr va his-tuyg'uni topish.",
    gl: [["미역국", "dengiz o'ti sho'rvasi (tug'ilgan kun taomi)"], ["불이 꺼지다", "chiroq o'chmoq"], ["하루", "bir kun"], ["잘", "yaxshi; osonlikcha"]],
    ps: [
      { text: "저는 매일 아침 여섯 시에 일어나서 공원에서 달리기를 합니다. 처음에는 일찍 일어나는 것이 힘들었지만 지금은 습관이 되었습니다. 운동을 하고 나서 먹는 아침은 정말 맛있습니다. 운동을 시작한 후에 감기에도 잘 걸리지 않습니다.", qs: [
        ["이 글의 중심 생각은?", "아침 운동은 건강에 좋습니다.", ["일찍 일어나는 것은 힘듭니다.", "아침을 먹지 않습니다.", "공원이 집에서 멉니다."], "Sport boshlagach shamollamaydigan bo'ldi."],
        ["이 글의 내용과 같은 것은?", "요즘은 일찍 일어나는 것이 힘들지 않습니다.", ["저녁에 달리기를 합니다.", "운동을 하기 전에 아침을 먹습니다.", "요즘 감기에 자주 걸립니다."], "지금은 습관이 되었습니다 — odatga aylangan."],
        ["«습관이 되었습니다»와 비슷한 말은?", "이제 익숙해졌습니다.", ["그만두었습니다.", "잊어버렸습니다.", "싫어하게 되었습니다."], "Odatga aylandi = ko'nikdim."]
      ] },
      { text: "어제는 제 생일이었습니다. 회사 일이 많아서 늦게 퇴근했는데 집에 오니까 불이 꺼져 있었습니다. 문을 열었을 때 가족들이 '생일 축하합니다!' 하고 노래를 불러 주었습니다. 어머니는 제가 좋아하는 미역국을 끓여 주셨습니다. 피곤했지만 아주 행복한 하루였습니다.", qs: [
        ["무엇에 대한 글입니까?", "생일에 있었던 일", ["회사 일", "어머니의 요리 방법", "가족 여행"], "Tug'ilgan kunda bo'lgan voqea."],
        ["이 글의 내용과 같은 것은?", "가족들이 생일 노래를 불러 주었습니다.", ["일찍 퇴근했습니다.", "친구들과 파티를 했습니다.", "제가 미역국을 끓였습니다."], "가족들이 … 노래를 불러 주었습니다."],
        ["이 사람의 기분은 어땠습니까?", "행복했습니다.", ["화가 났습니다.", "심심했습니다.", "무서웠습니다."], "아주 행복한 하루였습니다."]
      ] }
    ]
  },
  {
    id: "r3", t: "O'qish: Koreya hayoti", k: "읽기 연습 3", goal: "Madaniyat haqidagi qisqa ma'lumot matnini tushunish.",
    gl: [["떡", "guruch noni (ttok)"], ["임산부", "homilador ayol"], ["배려", "e'tibor, g'amxo'rlik"], ["비다", "bo'sh bo'lmoq"], ["대신", "o'rniga"], ["종류", "tur, xil"]],
    ps: [
      { text: "한국에서는 이사를 하면 이웃에게 떡을 돌리는 문화가 있습니다. 떡을 주면서 새로 이사 왔다고 인사를 합니다. 요즘은 아파트에 사는 사람이 많아서 이런 문화가 많이 없어졌습니다. 하지만 떡 대신 작은 선물이나 과일을 주는 사람도 있습니다.", qs: [
        ["무엇에 대한 글입니까?", "이사할 때의 한국 문화", ["떡을 만드는 방법", "아파트의 좋은 점", "과일의 종류"], "Ko'chganda qo'shnilarga ttok tarqatish odati."],
        ["이 글의 내용과 같은 것은?", "요즘은 떡을 돌리는 사람이 줄었습니다.", ["이사를 하면 이웃이 떡을 줍니다.", "요즘은 아무것도 주지 않습니다.", "아파트에 사는 사람이 적습니다."], "이런 문화가 많이 없어졌습니다."],
        ["왜 이웃에게 떡을 줍니까?", "이사 왔다고 인사하려고", ["떡이 싸서", "떡을 팔려고", "이웃이 부탁해서"], "새로 이사 왔다고 인사를 합니다."]
      ] },
      { text: "지하철에는 '임산부 배려석'이 있습니다. 이 자리는 아기를 가진 여성을 위한 자리입니다. 자리가 비어 있어도 다른 사람은 앉지 않는 것이 좋습니다. 임산부는 오래 서 있으면 힘들기 때문입니다. 작은 배려가 모두를 편하게 만듭니다.", qs: [
        ["이 자리는 누구를 위한 자리입니까?", "아기를 가진 여성", ["노인", "학생", "외국인"], "임산부 — homilador ayol."],
        ["이 글의 내용과 같은 것은?", "자리가 비어 있어도 앉지 않는 것이 좋습니다.", ["누구나 앉아도 됩니다.", "임산부는 서 있어야 합니다.", "이 자리는 버스에만 있습니다."], "비어 있어도 다른 사람은 앉지 않는 것이 좋습니다."],
        ["이 글의 중심 생각은?", "다른 사람을 배려해야 합니다.", ["지하철은 편리합니다.", "자리가 부족합니다.", "서 있으면 건강에 좋습니다."], "작은 배려가 모두를 편하게 만듭니다."]
      ] }
    ]
  }
]);

// ---------- TOPIK II · 3–4급: yangi liniya ----------
STAGES.splice(STAGES.findIndex(s => s.id === "w"), 0, {
  grp: "TOPIK II · 4급", id: "y", line: "G", cb: "G", lname: "GTX-A", color: "#9A6292", name: "3–4급: so'z va o'qish", ko: "중급 어휘 2 · 독해", lessons: []
});
addPacks("y", [
  ["y1", "Ish jarayoni fe'llari", "업무 동사", "Ofis va loyiha tili — 22 ta fe'l.", [["진행하다", "olib bormoq, o'tkazmoq"], ["완성하다", "tugallamoq"], ["마치다", "tugatmoq"], ["계속하다", "davom ettirmoq"], ["중단하다", "to'xtatib qo'ymoq"], ["실시하다", "amalga oshirmoq, o'tkazmoq"], ["추진하다", "ilgari surmoq"], ["검토하다", "ko'rib chiqmoq"], ["수정하다", "tuzatish kiritmoq"], ["보완하다", "to'ldirmoq, kamchilikni yopmoq"], ["관리하다", "boshqarmoq, nazorat qilmoq"], ["운영하다", "yuritmoq (ishni, muassasani)"], ["담당하다", "mas'ul bo'lmoq"], ["보고하다", "hisobot bermoq"], ["결재", "rahbar tasdig'i"], ["협조하다", "ko'maklashmoq"], ["요청하다", "so'ramoq, talab qilmoq"], ["승인하다", "tasdiqlamoq"], ["거부하다", "rad etmoq"], ["달성하다", "erishmoq (maqsadga)"], ["개선하다", "yaxshilamoq"], ["분담하다", "bo'lib olmoq (vazifani)"]]],
  ["y2", "Xarid va iste'mol", "소비 생활", "Internet-do'kon va xarid tili — 22 ta so'z.", [["상품", "tovar"], ["제품", "mahsulot"], ["브랜드", "brend"], ["품절", "sotuvda tugagan"], ["재고", "zaxira"], ["정가", "belgilangan narx"], ["세일", "chegirmali savdo"], ["무료 배송", "bepul yetkazib berish"], ["배송비", "yetkazib berish haqi"], ["결제", "to'lov"], ["할부", "bo'lib to'lash"], ["포인트", "bonus ball"], ["적립", "jamg'arish"], ["반품", "tovarni qaytarish"], ["불량", "nuqsonli"], ["후기", "xaridor sharhi"], ["추천", "tavsiya"], ["비교", "solishtirish"], ["충동구매", "o'ylamay xarid qilish"], ["절약하다", "tejamoq"], ["낭비하다", "isrof qilmoq"], ["저렴하다", "arzon"]]],
  ["y3", "Odamlar orasidagi munosabat", "인간관계", "Muloqot va munosabat haqida 22 ta so'z.", [["관계", "munosabat, aloqa"], ["인간관계", "odamlar bilan munosabat"], ["신뢰", "ishonch"], ["이해심", "tushunish, bag'rikenglik"], ["예의", "odob"], ["무시하다", "mensimaslik"], ["화해하다", "yarashmoq"], ["다투다", "janjallashmoq"], ["사이가 좋다", "orasi yaxshi"], ["어색하다", "o'ng'aysiz"], ["친근하다", "yaqin, do'stona"], ["상대방", "suhbatdosh, qarshi tomon"], ["조언", "maslahat"], ["충고", "nasihat"], ["격려", "dalda"], ["응원", "qo'llab-quvvatlash"], ["부탁을 들어주다", "iltimosni bajarmoq"], ["약속을 어기다", "va'dani buzmoq"], ["실망시키다", "hafsalasini pir qilmoq"], ["용서하다", "kechirmoq"], ["감사하다", "minnatdor bo'lmoq"], ["오해를 풀다", "tushunmovchilikni bartaraf etmoq"]]],
  ["y4", "Raqamli hayot", "디지털 생활", "Texnologiya matnlari uchun 22 ta so'z.", [["스마트폰", "smartfon"], ["기기", "qurilma"], ["설정", "sozlama"], ["업데이트", "yangilash"], ["가입하다", "ro'yxatdan o'tmoq, a'zo bo'lmoq"], ["탈퇴하다", "a'zolikdan chiqmoq"], ["로그인", "tizimga kirish"], ["개인 정보", "shaxsiy ma'lumot"], ["보안", "xavfsizlik (axborot)"], ["해킹", "xakerlik hujumi"], ["온라인", "onlayn"], ["디지털", "raqamli"], ["데이터", "ma'lumotlar"], ["자동", "avtomatik"], ["수동", "qo'lda bajariladigan"], ["편리함", "qulaylik"], ["중독", "qaramlik"], ["의존하다", "qaram bo'lmoq, tayanmoq"], ["대체하다", "o'rnini bosmoq"], ["로봇", "robot"], ["무인", "odamsiz (xizmat)"], ["가상", "virtual"]]],
  ["y5", "Shifoxonada", "의료", "Tibbiy xizmat tili — 22 ta so'z.", [["진료", "shifokor qabuli"], ["처방", "dori yozib berish"], ["약사", "dorixonachi"], ["내과", "terapiya bo'limi"], ["외과", "jarrohlik bo'limi"], ["치과", "stomatologiya"], ["안과", "ko'z bo'limi"], ["응급실", "shoshilinch yordam bo'limi"], ["구급차", "tez yordam mashinasi"], ["통증", "og'riq"], ["상처", "yara, jarohat"], ["붓다", "shishmoq"], ["어지럽다", "boshi aylanmoq"], ["소화불량", "hazm buzilishi"], ["알레르기", "allergiya"], ["혈압", "qon bosimi"], ["체온", "tana harorati"], ["회복하다", "sog'aymoq, tiklanmoq"], ["금연", "chekmaslik"], ["금주", "ichmaslik"], ["건강 검진", "tibbiy ko'rik"], ["스트레칭", "cho'zilish mashqi"]]],
  ["y6", "Jamiyat va mehnat", "사회 · 노동", "Koreyadagi chet ellik hayotiga oid 22 ta so'z.", [["다문화", "ko'p madaniyatli"], ["이민", "immigratsiya"], ["외국인 근로자", "chet ellik ishchi"], ["적응하다", "moslashmoq"], ["정착하다", "o'rnashib qolmoq"], ["국적", "fuqarolik"], ["문화 차이", "madaniy farq"], ["언어 장벽", "til to'sig'i"], ["자원봉사", "ko'ngilli xizmat"], ["공동체", "hamjamiyat"], ["1인 가구", "bir kishilik xonadon"], ["맞벌이", "er-xotin ikkalasining ishlashi"], ["육아", "bola tarbiyasi"], ["보육", "bola parvarishi (muassasada)"], ["노후", "qarilik davri"], ["연금", "nafaqa puli"], ["일자리", "ish o'rni"], ["비정규직", "vaqtinchalik xodim"], ["정규직", "doimiy xodim"], ["최저 임금", "eng kam ish haqi"], ["근로 시간", "ish vaqti"], ["휴가철", "ta'til mavsumi"]]],
  ["y7", "Fikrlash fe'llari", "사고 동사", "Savol matnlarida uchraydigan 22 ta fe'l.", [["판단하다", "baholab xulosa qilmoq"], ["추측하다", "taxmin qilmoq"], ["상상하다", "tasavvur qilmoq"], ["이해하다", "tushunmoq"], ["파악하다", "anglab olmoq"], ["분석하다", "tahlil qilmoq"], ["구별하다", "farqlamoq"], ["분류하다", "tasniflamoq"], ["정의하다", "ta'riflamoq"], ["관찰하다", "kuzatmoq"], ["발견하다", "topmoq, kashf etmoq"], ["증명하다", "isbotlamoq"], ["의미하다", "anglatmoq"], ["포함하다", "o'z ichiga olmoq"], ["제외하다", "chiqarib tashlamoq"], ["해당하다", "tegishli bo'lmoq, to'g'ri kelmoq"], ["관련되다", "bog'liq bo'lmoq"], ["속하다", "mansub bo'lmoq"], ["구성되다", "tashkil topmoq"], ["이루어지다", "amalga oshmoq; tashkil topmoq"], ["반영하다", "aks ettirmoq"], ["고려하다", "hisobga olmoq"]]],
  ["y8", "Holat sifatlari", "형용사 3", "Tasvirni aniqlashtiruvchi 22 ta sifat.", [["단순하다", "oddiy, sodda"], ["정확하다", "aniq, to'g'ri"], ["다정하다", "mehribon"], ["냉정하다", "sovuqqon"], ["신중하다", "ehtiyotkor, o'ylab ish qiladigan"], ["성급하다", "shoshqaloq"], ["부드럽다", "yumshoq"], ["딱딱하다", "qattiq"], ["날카롭다", "o'tkir"], ["둔하다", "o'tmas; sust"], ["화려하다", "hashamatli, yorqin"], ["소박하다", "kamtarona"], ["낡다", "eskirgan"], ["새롭다", "yangi"], ["익다", "pishgan"], ["생생하다", "jonli, yaqqol"], ["희미하다", "xira"], ["풍부하다", "boy, mo'l"], ["귀하다", "qimmatli, noyob"], ["알맞다", "mos, to'g'ri keladigan"], ["불리하다", "noqulay, zararli (sharoit)"], ["유리하다", "qulay, foydali (sharoit)"]]]
]);
addRead("y", [
  {
    id: "r4", t: "O'qish: gazeta xabari", k: "독해 1", goal: "Qisqa yangilikda mavzu, sabab va munosabatni topish (TOPIK II 읽기 9–12).",
    gl: [["퍼지다", "tarqalmoq"], ["1인용", "bir kishilik"], ["자유롭다", "erkin"], ["반응을 보이다", "munosabat bildirmoq"], ["환영하다", "xush qarshilamoq"]],
    ps: [
      { text: "최근 혼자 밥을 먹는 '혼밥' 문화가 빠르게 퍼지고 있다. 한 조사에 따르면 직장인 10명 중 4명이 점심을 혼자 먹는 것으로 나타났다. 혼자 먹으면 메뉴를 마음대로 고를 수 있고 식사 시간을 자유롭게 쓸 수 있기 때문이다. 이에 따라 1인용 좌석을 늘리는 식당도 증가하고 있다.", qs: [
        ["이 글의 주제는?", "혼자 식사하는 사람이 늘고 있다.", ["직장인의 점심시간이 줄었다.", "식당의 음식값이 올랐다.", "혼자 먹으면 건강에 나쁘다."], "'혼밥' 문화가 빠르게 퍼지고 있다."],
        ["이 글의 내용과 같은 것은?", "혼자 앉는 자리를 늘리는 식당이 많아지고 있다.", ["직장인의 대부분이 혼자 점심을 먹는다.", "혼자 먹으면 메뉴를 고르기 어렵다.", "혼밥 문화는 사라지고 있다."], "10 kishidan 4 nafari — ko'pchilik emas. 1인용 좌석 ko'paymoqda."],
        ["사람들이 혼자 먹는 이유는?", "시간과 메뉴를 자유롭게 정할 수 있어서", ["음식값이 싸서", "회사에서 시켜서", "식당이 멀어서"], "메뉴를 마음대로 … 시간을 자유롭게."]
      ] },
      { text: "서울시는 다음 달부터 공공 자전거 요금을 올리기로 했다. 지금은 한 시간에 1,000원이지만 앞으로는 1,500원을 내야 한다. 시는 자전거 수리와 관리에 드는 비용이 늘어서 어쩔 수 없다고 설명했다. 그러나 시민들은 대중교통 요금도 오른 상황에서 부담이 크다는 반응을 보이고 있다.", qs: [
        ["이 글의 내용과 같은 것은?", "요금이 500원 오른다.", ["요금이 이미 올랐다.", "시민들은 요금 인상을 환영한다.", "자전거 관리 비용이 줄었다."], "1,000원 → 1,500원, kelasi oydan."],
        ["시가 요금을 올리는 이유는?", "관리 비용이 증가해서", ["이용자가 너무 많아서", "자전거가 부족해서", "시민들이 요청해서"], "수리와 관리에 드는 비용이 늘어서."],
        ["시민들의 태도는?", "부담스러워한다.", ["기뻐한다.", "관심이 없다.", "자랑스러워한다."], "부담이 크다는 반응."]
      ] }
    ]
  },
  {
    id: "r5", t: "O'qish: tushuntirish matni", k: "독해 2", goal: "Misol va bog'lovchilar orqali asosiy fikrni topish (읽기 16–22).",
    gl: [["숨기다", "yashirmoq"], ["발표회", "taqdimot yig'ini"], ["식욕", "ishtaha"], ["공간", "makon, joy"], ["벌하다", "jazolamoq"]],
    ps: [
      { text: "사람들은 보통 실패를 부끄러운 일로 생각한다. 그래서 실패한 경험을 숨기려고 한다. 그러나 한 기업은 매년 '실패 발표회'를 열어 직원들이 자신의 실패를 이야기하게 한다. 같은 실수를 반복하지 않으려면 실패에서 배워야 한다고 믿기 때문이다. 이 발표회를 시작한 후 새로운 아이디어를 내는 직원이 오히려 늘었다고 한다.", qs: [
        ["이 글의 주제는?", "실패를 나누면 발전할 수 있다.", ["실패는 숨기는 것이 좋다.", "발표를 잘하는 방법이 있다.", "기업은 실패하면 안 된다."], "«그러나» dan keyingi qism — muallifning asosiy fikri."],
        ["이 글의 내용과 같은 것은?", "발표회 이후 아이디어를 내는 직원이 많아졌다.", ["이 기업은 실패한 직원을 벌한다.", "직원들은 발표회를 싫어한다.", "발표회는 한 번만 열렸다."], "새로운 아이디어를 내는 직원이 오히려 늘었다."],
        ["이 기업이 발표회를 여는 이유는?", "실패에서 배우기 위해서", ["직원을 평가하기 위해서", "회사를 광고하기 위해서", "실패가 없다고 자랑하기 위해서"], "실패에서 배워야 한다고 믿기 때문이다."]
      ] },
      { text: "색은 사람의 기분과 행동에 영향을 준다. 예를 들어 빨간색은 식욕을 높이기 때문에 식당에서 많이 사용된다. 반면 파란색은 마음을 편안하게 해 주어서 병원이나 사무실에 어울린다. 따라서 공간의 목적에 따라 색을 다르게 선택하는 것이 좋다.", qs: [
        ["이 글의 중심 생각은?", "장소의 목적에 맞는 색을 골라야 한다.", ["빨간색이 가장 좋은 색이다.", "색은 기분과 관계가 없다.", "병원에서는 색을 사용하면 안 된다."], "«따라서» — xulosa gapi."],
        ["이 글의 내용과 같은 것은?", "파란색은 사람을 편안하게 한다.", ["빨간색은 식욕을 줄인다.", "식당에는 파란색이 어울린다.", "사무실에는 빨간색을 많이 쓴다."], "파란색은 마음을 편안하게 해 준다."],
        ["«반면» 대신 쓸 수 있는 말은?", "이와 달리", ["그래서", "게다가", "예를 들어"], "반면 — qarama-qarshi qo'yish."]
      ] }
    ]
  },
  {
    id: "r6", t: "O'qish: fikr matni", k: "독해 3", goal: "Muallifning pozitsiyasini topish (읽기 20, 22, 35–38).",
    gl: [["재택근무", "uydan ishlash"], ["경계", "chegara"], ["흐려지다", "xiralashmoq"], ["구분하다", "ajratmoq, farqlamoq"], ["살리다", "yuzaga chiqarmoq, saqlab qolmoq"], ["절대", "mutlaqo"]],
    ps: [
      { text: "요즘 아이들에게 일찍부터 스마트폰을 사 주는 부모가 많다. 연락하기 편하고 공부에도 도움이 된다는 이유에서다. 그러나 어린 나이에 스마트폰을 오래 사용하면 집중력이 떨어지고 친구와 직접 만나서 노는 시간이 줄어든다. 따라서 사 주더라도 사용 시간을 정하고 부모가 함께 지켜야 한다.", qs: [
        ["글쓴이의 생각은?", "스마트폰 사용 시간을 정해야 한다.", ["아이에게 스마트폰을 절대 주면 안 된다.", "스마트폰은 공부에 꼭 필요하다.", "부모는 아이의 스마트폰에 관심을 가질 필요가 없다."], "«사 주더라도» — taqiqlamayapti, cheklashni aytyapti."],
        ["이 글의 내용과 같은 것은?", "스마트폰을 오래 쓰면 집중하기 어려워진다.", ["스마트폰을 사 주는 부모가 줄고 있다.", "스마트폰을 쓰면 친구를 더 자주 만난다.", "부모는 연락이 불편해서 스마트폰을 사 준다."], "집중력이 떨어지고."],
        ["«따라서»가 하는 일은?", "앞 내용의 결론을 말한다.", ["반대 내용을 말한다.", "예를 든다.", "이유를 말한다."], "따라서 — xulosa. Muallif fikri odatda shu gapda."]
      ] },
      { text: "재택근무가 늘면서 일과 생활의 경계가 흐려졌다는 사람이 많다. 출퇴근 시간이 없어진 대신 밤늦게까지 일하게 되었다는 것이다. 전문가들은 집에서도 일하는 공간과 쉬는 공간을 나누고 일을 끝내는 시간을 정해 두라고 조언한다. 그렇게 해야 재택근무의 장점을 살릴 수 있다.", qs: [
        ["이 글의 주제는?", "재택근무를 할 때는 일과 휴식을 구분해야 한다.", ["재택근무는 하지 않는 것이 좋다.", "출퇴근 시간은 꼭 필요하다.", "밤늦게까지 일해야 성공한다."], "공간을 나누고 … 시간을 정해 두라."],
        ["이 글의 내용과 같은 것은?", "재택근무를 하면서 더 늦게까지 일하게 된 사람이 있다.", ["재택근무를 하는 사람이 줄었다.", "전문가들은 집에서 쉬지 말라고 한다.", "재택근무에는 장점이 없다."], "밤늦게까지 일하게 되었다."],
        ["«경계가 흐려졌다»의 의미는?", "구분이 잘 안 된다.", ["완전히 없어졌다.", "더 분명해졌다.", "문제가 해결됐다."], "Chegara xiralashdi — ajratish qiyin."]
      ] }
    ]
  },
  {
    id: "r7", t: "O'qish: uzunroq matn", k: "독해 4", goal: "5 gapli matnda mavzu, tafsilot va sababni ajratish (읽기 32–38).",
    gl: [["참고하다", "asos qilib ko'rmoq, murojaat qilmoq"], ["거짓", "yolg'on"], ["살펴보다", "sinchiklab ko'rmoq"], ["강연", "ommaviy ma'ruza"], ["마련되다", "tayyorlab qo'yilmoq"], ["주민", "mahalla aholisi"]],
    ps: [
      { text: "많은 사람이 물건을 살 때 다른 사람의 후기를 참고한다. 직접 써 본 사람의 의견이 광고보다 믿을 만하다고 생각하기 때문이다. 그런데 최근에는 돈을 받고 좋은 후기를 써 주는 일이 늘어나 문제가 되고 있다. 이런 거짓 후기는 소비자의 선택을 방해할 뿐만 아니라 정직한 판매자에게도 피해를 준다. 따라서 후기를 볼 때는 내용이 구체적인지, 좋은 말만 있는 것은 아닌지 살펴볼 필요가 있다.", qs: [
        ["이 글의 주제는?", "후기를 볼 때는 주의해서 판단해야 한다.", ["후기는 광고보다 항상 정확하다.", "후기를 쓰면 돈을 받을 수 있다.", "판매자는 후기를 쓰면 안 된다."], "«따라서 … 살펴볼 필요가 있다»."],
        ["이 글의 내용과 같은 것은?", "거짓 후기는 정직한 판매자에게도 손해가 된다.", ["사람들은 후기보다 광고를 더 믿는다.", "거짓 후기가 줄어들고 있다.", "구체적인 후기는 믿기 어렵다."], "정직한 판매자에게도 피해를 준다."],
        ["사람들이 후기를 믿는 이유는?", "직접 사용한 사람의 의견이라서", ["광고 회사가 썼기 때문에", "후기가 짧아서", "판매자가 추천해서"], "직접 써 본 사람의 의견."]
      ] },
      { text: "도서관이 달라지고 있다. 예전의 도서관은 조용히 책을 읽는 곳이었다. 그러나 요즘 도서관에서는 강연을 듣거나 영화를 보고 아이들이 뛰어놀 수 있는 공간도 마련되어 있다. 책을 빌려주는 곳에서 지역 주민이 모이는 문화 공간으로 역할이 넓어진 것이다. 이용자가 늘어난 것은 당연한 결과이다.", qs: [
        ["이 글의 주제는?", "도서관의 역할이 넓어지고 있다.", ["도서관에서는 조용히 해야 한다.", "도서관의 책이 부족하다.", "도서관 이용자가 줄고 있다."], "문화 공간으로 역할이 넓어진 것이다."],
        ["이 글의 내용과 같은 것은?", "요즘 도서관에서는 영화도 볼 수 있다.", ["요즘 도서관은 책을 빌려주지 않는다.", "아이들은 도서관에 들어갈 수 없다.", "예전의 도서관은 문화 공간이었다."], "강연을 듣거나 영화를 보고."],
        ["도서관 이용자가 늘어난 이유는?", "다양한 활동을 할 수 있게 되어서", ["책값이 올라서", "도서관이 조용해져서", "도서관 수가 줄어서"], "Ma'ruza, kino, bolalar maydonchasi — faoliyat ko'paydi."]
      ] }
    ]
  }
]);

// ---------- TOPIK II · 5–6급 ----------
addPacks("u", [
  ["z1", "Siyosat va xalqaro munosabatlar", "정치 · 외교", "Siyosiy yangiliklar uchun 22 ta so'z.", [["외교", "diplomatiya"], ["협상", "muzokara"], ["조약", "xalqaro shartnoma"], ["동맹", "ittifoq"], ["분쟁", "nizo, mojaro"], ["제재", "sanksiya"], ["안보", "milliy xavfsizlik"], ["국방", "mudofaa"], ["국제 사회", "xalqaro hamjamiyat"], ["주권", "suverenitet"], ["독립", "mustaqillik"], ["통일", "birlashuv"], ["민주주의", "demokratiya"], ["독재", "diktatura"], ["여당", "hukmron partiya"], ["야당", "muxolifat partiyasi"], ["국회", "parlament"], ["대통령", "prezident"], ["정권", "hokimiyat"], ["공약", "saylov va'dasi"], ["지지율", "qo'llab-quvvatlash darajasi"], ["임기", "vakolat muddati"]]],
  ["z2", "Korxona boshqaruvi", "경영", "Biznes tahlili uchun 22 ta so'z.", [["경영", "biznes boshqaruvi"], ["전략", "strategiya"], ["혁신", "innovatsiya"], ["경쟁력", "raqobatbardoshlik"], ["생산성", "mehnat unumdorligi"], ["구조 조정", "qayta tashkil etish, qisqartirish"], ["인수", "kompaniyani sotib olish"], ["합병", "qo'shilish"], ["독점", "monopoliya"], ["중소기업", "kichik va o'rta biznes"], ["대기업", "yirik korporatsiya"], ["협력업체", "hamkor korxona"], ["납품", "tovar yetkazib berish"], ["수익", "daromad, tushum"], ["손실", "yo'qotish, zarar"], ["자본", "kapital"], ["자산", "aktiv, mol-mulk"], ["부채", "qarz majburiyati"], ["파산", "bankrotlik"], ["유통", "savdo aylanmasi, tarqatish"], ["물류", "logistika"], ["원가", "tannarx"]]],
  ["z3", "Til va adabiyot", "언어 · 문학", "Badiiy matn savollari uchun 22 ta so'z.", [["문학", "adabiyot"], ["수필", "esse"], ["희곡", "pyesa"], ["화자", "hikoyachi, so'zlovchi"], ["등장인물", "personaj"], ["줄거리", "syujet, qisqacha mazmun"], ["문체", "uslub"], ["어조", "ohang"], ["반어", "kinoya"], ["역설", "paradoks"], ["비유", "o'xshatish"], ["운율", "she'riy ohang"], ["정서", "kayfiyat, his"], ["향수", "sog'inch, nostalgiya"], ["고전", "mumtoz asar"], ["현대", "zamonaviy davr"], ["번역", "tarjima"], ["어휘", "lug'at boyligi"], ["표준어", "adabiy til"], ["사투리", "sheva"], ["심정", "ko'ngil holati"], ["태도", "munosabat, pozitsiya"]]],
  ["z4", "Axloq va qarashlar", "윤리 · 가치", "Insho va bahs matnlari uchun 22 ta so'z.", [["도덕", "axloq"], ["양심", "vijdon"], ["정의", "adolat"], ["공정", "adolatlilik, xolislik"], ["평등", "tenglik"], ["자유", "erkinlik"], ["책임감", "mas'uliyat hissi"], ["이타적", "fidoyi, o'zgalarni o'ylaydigan"], ["이념", "mafkura"], ["신앙", "diniy e'tiqod"], ["관용", "bag'rikenglik"], ["편협하다", "tor fikrli"], ["비판적", "tanqidiy"], ["합리적", "oqilona"], ["비합리적", "mantiqsiz"], ["실용적", "amaliy"], ["이상적", "ideal"], ["현실적", "real, hayotiy"], ["낙관적", "optimistik"], ["비관적", "pessimistik"], ["회의적", "shubha bilan qaraydigan"], ["중립", "betaraflik"]]],
  ["z5", "Jarayon fe'llari", "고급 동사 2", "Tahliliy maqolalarning 22 ta fe'li.", [["확산되다", "keng tarqalmoq"], ["확립하다", "mustahkam o'rnatmoq"], ["정착되다", "o'rnashmoq, odatga aylanmoq"], ["변모하다", "qiyofasini o'zgartirmoq"], ["쇠퇴하다", "tanazzulga uchramoq"], ["번영하다", "gullab-yashnamoq"], ["지속하다", "davom ettirmoq"], ["축적하다", "to'plamoq"], ["활용하다", "unumli foydalanmoq"], ["발휘하다", "namoyon qilmoq"], ["기여하다", "hissa qo'shmoq"], ["추구하다", "intilmoq"], ["지향하다", "maqsad qilib yo'nalmoq"], ["배제하다", "istisno qilmoq"], ["억제하다", "tiyib turmoq"], ["완화하다", "yumshatmoq"], ["심화되다", "chuqurlashmoq"], ["악화되다", "yomonlashmoq"], ["개선되다", "yaxshilanmoq"], ["직면하다", "yuzma-yuz kelmoq"], ["대처하다", "chora ko'rmoq"], ["대응하다", "javob chorasini ko'rmoq"]]],
  ["z6", "Barqaror kelajak", "지속 가능성 · 미래", "Ekologiya va texnologiya bahslari uchun 22 ta so'z.", [["지속 가능", "barqaror (rivojlanish)"], ["탄소", "uglerod"], ["배출", "chiqarish (gaz, chiqindi)"], ["친환경", "ekologik toza"], ["재생 에너지", "qayta tiklanuvchi energiya"], ["화석 연료", "qazilma yoqilg'i"], ["고갈", "tugab qolish"], ["생물 다양성", "biologik xilma-xillik"], ["서식지", "yashash muhiti (hayvonlar)"], ["도시화", "urbanizatsiya"], ["인구 밀도", "aholi zichligi"], ["수도권", "poytaxt hududi"], ["지방 소멸", "hududlarning bo'shab qolishi"], ["균형 발전", "mutanosib rivojlanish"], ["기반 시설", "infratuzilma"], ["첨단", "ilg'or (texnologiya)"], ["자율 주행", "avtonom haydash"], ["빅데이터", "katta ma'lumotlar"], ["사생활", "shaxsiy hayot"], ["침해", "huquqni buzish"], ["감시", "kuzatuv, nazorat"], ["윤리적", "axloqiy"]]]
]);
addRead("u", [
  {
    id: "r8", t: "O'qish: tahliliy maqola", k: "고급 독해 1", goal: "Umumiy tasavvurni rad etuvchi matnda da'vo va dalilni ajratish (읽기 28–34).",
    gl: [["선택지", "tanlov variantlari"], ["진열하다", "peshtaxtaga terib qo'ymoq"], ["미련", "ko'ngil uzolmaslik"], ["보장하다", "kafolatlamoq"], ["증언", "guvohlik"], ["엇갈리다", "bir-biriga to'g'ri kelmaslik"], ["진술", "ko'rsatma, bayonot"], ["목격자", "voqeani ko'rgan guvoh"]],
    ps: [
      { text: "선택의 폭이 넓을수록 만족도가 높아질 것이라는 통념과 달리, 선택지가 지나치게 많으면 사람들은 오히려 결정을 미루거나 포기한다. 한 실험에서 잼을 여섯 종류만 진열했을 때의 구매율이 스물네 종류를 진열했을 때보다 열 배가량 높았다. 선택지가 늘어날수록 비교에 드는 수고가 커질뿐더러 고르지 않은 것에 대한 미련도 커지기 때문이다. 풍요가 반드시 행복을 보장하지는 않는 셈이다.", qs: [
        ["이 글의 주제는?", "선택지가 너무 많으면 만족이 오히려 줄 수 있다.", ["선택지는 많을수록 좋다.", "잼은 여섯 종류일 때 가장 맛있다.", "소비자는 비교하는 것을 좋아한다."], "«통념과 달리» — umumiy tasavvurga zid xulosa."],
        ["이 글의 내용과 같은 것은?", "종류가 적을 때 구매한 사람의 비율이 더 높았다.", ["스물네 종류일 때 더 많이 팔렸다.", "선택지가 많으면 결정이 빨라진다.", "실험 결과는 통념과 일치했다."], "Olti xil bo'lganda xarid ulushi o'n baravarcha yuqori."],
        ["선택지가 많을 때 결정이 어려운 이유는?", "비교하는 부담과 포기한 것에 대한 아쉬움이 커져서", ["가격이 비싸져서", "품질이 떨어져서", "진열 공간이 부족해서"], "수고가 커질뿐더러 … 미련도 커지기 때문이다."]
      ] },
      { text: "기억은 저장된 사실을 그대로 꺼내는 과정이 아니라 떠올릴 때마다 다시 구성되는 과정에 가깝다. 그래서 같은 사건을 겪은 사람들의 증언이 서로 엇갈리는 일이 드물지 않다. 문제는 기억이 왜곡되었다는 사실을 본인은 깨닫지 못한 채 확신을 갖는다는 점이다. 확신의 정도가 기억의 정확성을 입증해 주지는 않는다는 점에서, 목격자의 진술에만 의존한 판단은 신중해야 한다.", qs: [
        ["글쓴이의 주장은?", "확신에 찬 증언이라도 그대로 믿어서는 안 된다.", ["기억은 사실을 정확하게 저장한다.", "목격자의 진술이 가장 믿을 만하다.", "사람들은 기억이 왜곡된 것을 금방 안다."], "확신의 정도가 정확성을 입증해 주지는 않는다."],
        ["이 글의 내용과 같은 것은?", "같은 일을 겪어도 기억이 서로 다를 수 있다.", ["기억은 떠올릴 때 변하지 않는다.", "확신이 강할수록 기억이 정확하다.", "증언이 엇갈리는 일은 거의 없다."], "증언이 서로 엇갈리는 일이 드물지 않다."],
        ["«엇갈리다»의 의미는?", "서로 맞지 않다", ["완전히 같다", "점점 분명해지다", "쉽게 잊히다"], "Guvohliklar bir-biriga to'g'ri kelmaydi."]
      ] }
    ]
  },
  {
    id: "r9", t: "O'qish: badiiy matn", k: "고급 독해 2", goal: "Hikoyada qahramonning his-tuyg'usi va yashirin ma'noni topish (읽기 23–24, 42–43).",
    gl: [["배다", "singib qolmoq (hid)"], ["말끔히", "top-toza qilib"], ["골목", "tor ko'cha"], ["말수", "gap-so'z miqdori"], ["침묵", "sukut"], ["무관심", "befarqlik"], ["서랍", "tortma"], ["장례", "dafn marosimi"], ["유일하다", "yagona"]],
    ps: [
      { text: "할머니의 부엌에는 늘 간장 냄새가 배어 있었다. 어린 나는 그 냄새가 싫어서 코를 막고 지나다니곤 했다. 할머니가 돌아가신 뒤 부엌은 말끔히 수리되었고 냄새도 사라졌다. 그런데 며칠 전 시장 골목을 지나다가 문득 그 냄새를 맡았다. 나는 한참을 그 자리에 서 있었다. 그토록 싫어하던 냄새가 그리움이 되어 돌아올 줄은 몰랐다.", qs: [
        ["시장 골목에서 '나'의 심정은?", "그립고 가슴이 뭉클하다.", ["불쾌하고 짜증스럽다.", "두렵고 불안하다.", "지루하고 답답하다."], "Ancha vaqt joyidan qimirlamay turdi — sog'inch."],
        ["이 글의 내용과 같은 것은?", "어릴 때 '나'는 간장 냄새를 좋아하지 않았다.", ["할머니는 지금도 부엌에서 요리하신다.", "부엌은 예전 그대로 남아 있다.", "'나'는 시장에서 할머니를 만났다."], "그 냄새가 싫어서 코를 막고."],
        ["이 글의 주제는?", "싫어하던 것도 시간이 지나면 그리움이 될 수 있다.", ["간장은 건강에 좋은 음식이다.", "낡은 부엌은 빨리 고쳐야 한다.", "시장 골목은 길을 잃기 쉽다."], "Oxirgi gap — mavzu."]
      ] },
      { text: "아버지는 말수가 적은 분이었다. 내가 대학에 떨어졌을 때도, 첫 직장을 그만두었을 때도 아버지는 아무 말씀이 없으셨다. 나는 그 침묵을 무관심이라고 여겼다. 아버지의 서랍에서 내 성적표와 사진, 내가 보낸 엽서가 날짜순으로 정리된 상자를 발견한 것은 장례를 마친 뒤였다. 침묵은 아버지가 할 줄 아는 유일한 응원이었던 것이다.", qs: [
        ["'나'가 깨달은 것은?", "아버지의 침묵은 관심의 표현이었다.", ["아버지는 나에게 관심이 없었다.", "아버지는 말을 많이 하는 분이었다.", "아버지는 나를 자주 야단치셨다."], "침묵은 … 유일한 응원이었던 것이다."],
        ["이 글의 내용과 같은 것은?", "아버지는 '나'와 관련된 물건을 모아 두셨다.", ["'나'는 대학에 한 번에 합격했다.", "아버지는 '나'에게 자주 편지를 쓰셨다.", "'나'는 상자를 아버지에게 선물했다."], "Baholar, suratlar, otkritkalar sana bo'yicha terilgan quti."],
        ["상자를 발견했을 때 '나'의 심정은?", "죄송하고 가슴이 먹먹하다.", ["화가 나고 억울하다.", "신나고 들뜨다.", "귀찮고 지루하다."], "Sukutni befarqlik deb o'ylagan edi — pushaymon va ta'sirlanish."]
      ] }
    ]
  },
  {
    id: "r10", t: "O'qish: ilmiy-ommabop matn", k: "고급 독해 3", goal: "Ilmiy matnda da'vo, misol va muallif talabini ajratish (읽기 44–50).",
    gl: [["존재", "mavjudot"], ["갉아 먹다", "kemirib yemoq"], ["물질", "modda"], ["능동적", "faol, tashabbuskor"], ["편향", "bir tomonlamalik"], ["채용", "ishga qabul qilish"], ["개입되다", "aralashmoq"], ["선행되다", "oldin amalga oshirilmoq"]],
    ps: [
      { text: "식물은 움직이지 못하기 때문에 수동적인 존재로 여겨지기 쉽다. 그러나 벌레가 잎을 갉아 먹기 시작하면 일부 식물은 쓴맛이 나는 물질을 만들어 낼뿐더러 공기 중으로 화학 물질을 내보내 주변 식물에게 위험을 알린다. 신호를 받은 식물들은 공격을 받기 전에 미리 방어 물질을 준비한다. 식물 역시 환경에 적극적으로 대응하며 서로 정보를 주고받는 셈이다.", qs: [
        ["이 글의 주제는?", "식물은 위험에 능동적으로 대응하고 서로 소통한다.", ["식물은 벌레를 잡아먹는다.", "식물은 움직일 수 없어서 약하다.", "벌레는 쓴맛을 좋아한다."], "적극적으로 대응하며 정보를 주고받는 셈이다."],
        ["이 글의 내용과 같은 것은?", "신호를 받은 식물은 미리 방어를 준비한다.", ["식물은 공격을 받은 후에만 반응한다.", "화학 물질은 뿌리를 통해서만 전달된다.", "모든 식물이 벌레를 죽이는 물질을 만든다."], "공격을 받기 전에 미리 방어 물질을 준비한다."],
        ["«수동적»의 반대말은?", "능동적", ["부정적", "소극적", "일반적"], "수동적 (passiv) ↔ 능동적 (faol)."]
      ] },
      { text: "인공지능의 판단은 흔히 객관적이라고 여겨지지만 학습에 사용된 자료가 편향되어 있으면 결과 역시 편향될 수밖에 없다. 과거의 채용 자료로 학습한 프로그램이 특정 집단의 지원자에게 낮은 점수를 준 사례가 이를 보여 준다. 기술 자체는 중립적일지라도 그것을 만드는 과정에는 사람의 선택이 개입된다. 따라서 인공지능의 결정을 그대로 받아들이기에 앞서 어떤 자료로 학습했는지 검증하는 절차가 선행되어야 한다.", qs: [
        ["글쓴이의 주장은?", "인공지능의 학습 자료를 먼저 검증해야 한다.", ["인공지능의 판단은 언제나 객관적이다.", "채용에 인공지능을 쓰면 안 된다.", "기술은 사람보다 공정하다."], "검증하는 절차가 선행되어야 한다."],
        ["이 글의 내용과 같은 것은?", "편향된 자료로 학습하면 결과도 편향된다.", ["인공지능은 사람의 선택과 관계없이 만들어진다.", "채용 프로그램은 모든 지원자에게 같은 점수를 주었다.", "과거 자료에는 편향이 없다."], "자료가 편향되어 있으면 결과 역시 편향될 수밖에 없다."],
        ["채용 프로그램의 사례를 든 이유는?", "인공지능도 편향될 수 있음을 보여 주려고", ["채용 방법을 소개하려고", "프로그램의 장점을 알리려고", "지원자를 위로하려고"], "«이를 보여 준다» — oldingi da'voning dalili."]
      ] }
    ]
  }
]);
