// 5–6급 bosqichlari yakuniy «Koreyaga qaytish» liniyasidan oldin joylashadi.
const ADV = [];

ADV.push({
  grp: "TOPIK II · 5급", id: "p", line: "S", cb: "S", lname: "수인분당선", color: "#C98A00", name: "5급 grammatikasi", ko: "5급 문법",
  lessons: [
    {
      id: "p1", type: "lesson", t: "Yo'l-yo'lakay, bir yo'la", k: "-는 김에 · -(으)ㄹ 겸 · -는 길에",
      goal: "Bir ishni qilayotib, bahonada ikkinchisini ham bajarishni ifodalash.",
      tip: "5급 dan boshlab savol «qaysi biri to'g'ri» emas, «qaysi biri shu vaziyatga mos» bo'ladi. Shuning uchun har qolipning nozik ma'nosiga e'tibor bering.",
      v: [["겸사겸사", "bir yo'la, ikki ishni birga"], ["들르다", "yo'l-yo'lakay kirib o'tmoq", "들러요"], ["볼일", "yumush, ish"], ["심부름", "topshiriq, yumush (birov uchun)"], ["장을 보다", "bozorlik qilmoq"], ["산책", "sayr"], ["기분 전환", "kayfiyatni yangilash"], ["마침", "ayni shu payt"], ["어차피", "baribir"], ["이왕이면", "modomiki shunday ekan, yaxshisi"], ["챙기다", "olib olmoq; g'amxo'rlik qilmoq"], ["맡기다", "topshirmoq, qoldirmoq"], ["세탁소", "kimyoviy tozalash"]],
      g: [
        { p: "V-(으)ㄴ/는 김에", uz: "-gan (-ayotgan) bahonada", d: "Asosiy ish boshqa, lekin fursatdan foydalanib yana bir ish qilinadi. Bo'lib o'tgan ish: -(으)ㄴ 김에.", ex: [["시장에 가는 김에 과일도 좀 사 오세요.", "Bozorga borayotgan bahonada meva ham olib keling."], ["부산에 출장 간 김에 친구도 만났어요.", "Pusanga xizmat safariga borgan bahonada do'stimni ham ko'rdim."], ["청소하는 김에 창문도 닦았어요.", "Tozalayotgan bahonada derazani ham artdim."]] },
        { p: "V-(으)ㄹ 겸 · N 겸 N · V-는 길에", uz: "ham … ham … maqsadida · -ayotgan yo'lda", d: "-(으)ㄹ 겸 — ikkala maqsad ham teng. -는 길에 — faqat 가다, 오다 kabi harakat fe'llari bilan.", ex: [["운동도 할 겸 기분 전환도 할 겸 산책을 했어요.", "Ham sport, ham kayfiyatni yangilash uchun sayr qildim."], ["퇴근하는 길에 세탁소에 들렀어요.", "Ishdan qaytayotgan yo'lda kimyoviy tozalashga kirib o'tdim."], ["이곳은 사무실 겸 집이에요.", "Bu yer ham ofis, ham uy."]] }
      ],
      c: [
        ["우체국에 가는 ___ 제 편지도 부쳐 주세요.", "김에", ["탓에", "바람에", "척"], "Pochtaga borayotgan bahonada mening xatimni ham jo'natib yuboring."],
        ["한국어 연습도 할 ___ 한국 친구를 사귀었어요.", "겸", ["뿐", "리", "뻔"], "Koreyscha mashq ham bo'lsin deb koreys do'st orttirdim."],
        ["집에 오는 ___ 편의점에 들렀어요.", "길에", ["겸에", "김으로", "통에"], "Uyga kelayotgan yo'lda do'konga kirib o'tdim."],
        ["서울에 온 ___ 경복궁도 구경하고 싶어요.", "김에", ["탓에", "채로", "듯이"], "Seulga kelgan bahonada Kyongbokkunni ham ko'rgim keladi."],
        ["Yo'l-yo'lakay kirib o'tmoq = ___", "들르다", ["맡기다", "챙기다", "부치다"], "들르다"]
      ]
    },
    {
      id: "p2", type: "lesson", t: "Xolos; tez-tez shunday bo'ladi", k: "-(으)ㄹ 뿐이다 · -기 일쑤이다 · -기 십상이다",
      goal: "«faqat … xolos», «doim shunday bo'lib qoladi», «…-ishi hech gap emas».",
      tip: "일쑤 va 십상 faqat salbiy ishlar bilan keladi. 일쑤 — allaqachon tez-tez bo'lyapti, 십상 — bo'lish ehtimoli juda katta.",
      v: [["흔하다", "ko'p uchraydigan"], ["드물다", "kamyob, siyrak"], ["서두르다", "shoshilmoq", "서둘러요"], ["덤벙대다", "palapartish ish qilmoq"], ["깜빡하다", "esdan chiqarib qo'ymoq"], ["지각", "kechikish"], ["과식", "ko'p yeb qo'yish"], ["과로", "ortiqcha ishlab charchash"], ["오해하다", "noto'g'ri tushunmoq"], ["그저", "shunchaki"], ["단지", "faqatgina"], ["겸손하다", "kamtar"], ["관심", "qiziqish, e'tibor"]],
      g: [
        { p: "A/V-(으)ㄹ 뿐이다 · A/V-(으)ㄹ 따름이다", uz: "faqat … xolos", d: "따름이다 — rasmiyroq, minnatdorlik va uzr iboralarida. O'tgan zamon: -았/었을 뿐이다.", ex: [["저는 제 일을 했을 뿐이에요.", "Men faqat o'z ishimni qildim, xolos."], ["도와주셔서 감사할 따름입니다.", "Yordam berganingiz uchun faqat minnatdorman."], ["그저 최선을 다할 뿐입니다.", "Shunchaki bor kuchimni sarflayman, xolos."]] },
        { p: "V-기 일쑤이다 · V-기 십상이다", uz: "tez-tez -ib turadi · -ishi hech gap emas", d: "Ikkalasi ham istalmagan natija haqida.", ex: [["아침에 서두르다 보면 물건을 잊어버리기 일쑤예요.", "Ertalab shoshilsangiz, narsani unutib qoldirish odatiy hol."], ["준비 없이 시작하면 실패하기 십상이에요.", "Tayyorgarliksiz boshlasangiz, muvaffaqiyatsizlik hech gap emas."], ["그렇게 말하면 오해받기 십상입니다.", "Shunday gapirsangiz, noto'g'ri tushunilishingiz hech gap emas."]] }
      ],
      c: [
        ["저는 사실을 말했을 ___이에요.", "뿐", ["김", "겸", "채"], "Men faqat haqiqatni aytdim, xolos."],
        ["많은 관심을 보내 주셔서 감사할 ___입니다.", "따름", ["일쑤", "십상", "모양"], "Katta e'tibor ko'rsatganingiz uchun faqat minnatdorman."],
        ["그는 덤벙대서 약속을 잊어버리기 ___예요.", "일쑤", ["따름", "뿐", "겸"], "U palapartish bo'lgani uchun va'dani unutib turadi."],
        ["겨울에 얇게 입고 나가면 감기에 걸리기 ___이다.", "십상", ["따름", "뿐", "나름"], "Qishda yupqa kiyinib chiqsangiz, shamollash hech gap emas."],
        ["흔하다 ↔ ___", "드물다", ["겸손하다", "서두르다", "깜빡하다"], "ko'p uchraydigan ↔ kamyob"]
      ]
    },
    {
      id: "p3", type: "lesson", t: "Kuzatdim — natija; go'yo", k: "-더니 · -았/었더니 · -는 듯하다 · -(으)ㄹ 듯이",
      goal: "O'tmishdagi kuzatuvni hozirgi natija bilan bog'lash; yozma taxmin va o'xshatish.",
      tip: "Eng ko'p adashtiriladigan juftlik: -더니 — boshqa birovni (yoki ob-havoni) kuzatdim; -았/었더니 — o'zim qildim va natijani bildim.",
      v: [["며칠", "bir necha kun"], ["한참", "anchagina vaqt"], ["금세", "bir zumda"], ["어느새", "bilinmay qolib, qachonlardir"], ["뜻밖에", "kutilmaganda"], ["의외로", "kutilganidan farqli o'laroq"], ["마치", "go'yo"], ["개다", "(havo) ochilmoq"], ["쏟아지다", "quyilmoq, sharros yog'moq"], ["부쩍", "sezilarli darajada (o'smoq)"], ["살이 빠지다", "ozmoq"], ["온몸", "butun tana"], ["오랜만에", "ancha vaqtdan keyin"]],
      g: [
        { p: "A/V-더니 · V-았/었더니", uz: "… edi, (endi esa / natijada) · -gan edim, (qarasam)", d: "-더니: ega — ikkinchi yoki uchinchi shaxs; qarama-qarshilik yoki natija. -았/었더니: ega — men; natija yoki kutilmagan kashfiyot.", ex: [["아침에는 비가 오더니 지금은 날씨가 개었어요.", "Ertalab yomg'ir yog'ayotgan edi, hozir havo ochildi."], ["동생이 열심히 공부하더니 시험에 합격했어요.", "Ukam tirishib o'qigan edi, imtihondan o'tdi."], ["오랜만에 운동을 했더니 온몸이 아파요.", "Ancha vaqtdan keyin sport qilgan edim, butun tanam og'riyapti."]] },
        { p: "A/V-(으)ㄴ/는/(으)ㄹ 듯하다 · -(으)ㄴ/는/(으)ㄹ 듯이", uz: "-ga o'xshaydi (yozma) · go'yo -gandek", d: "듯하다 = 것 같다 ning kitobiy shakli. 듯이 — o'xshatish; 이 tushib qolishi mumkin: 듯.", ex: [["오늘은 비가 올 듯합니다.", "Bugun yomg'ir yog'adiganga o'xshaydi."], ["그는 아무 일도 없는 듯이 웃었어요.", "U go'yo hech narsa bo'lmagandek kuldi."], ["비가 쏟아질 듯이 하늘이 어두워요.", "Go'yo yomg'ir quyib yuboradigandek osmon qorong'i."]] }
      ],
      c: [
        ["어제는 춥___ 오늘은 따뜻하네요.", "더니", ["었더니", "는 김에", "을 겸"], "Kecha sovuq edi, bugun iliq ekan."],
        ["약을 ___ 금세 나았어요. (men ichdim)", "먹었더니", ["먹더니", "먹는 듯이", "먹을 뿐"], "Dori ichgan edim, bir zumda tuzaldim."],
        ["그는 모든 것을 아는 ___ 말했어요.", "듯이", ["김에", "더니", "일쑤"], "U go'yo hamma narsani biladigandek gapirdi."],
        ["회의는 다음 주에 열릴 ___.", "듯합니다", ["김입니다", "일쑤입니다", "겸입니다"], "Majlis kelasi hafta o'tkaziladiganga o'xshaydi."],
        ["Bilinmay qolib = ___", "어느새", ["한참", "마치", "며칠"], "어느새"]
      ]
    },
    {
      id: "p4", type: "lesson", t: "Shuncha; shundayligicha", k: "-는 만큼 · -는 대로 · -(으)ㄴ 채로",
      goal: "«-ganiga yarasha», «-ganidek / -ishi bilanoq», «-gan holicha».",
      tip: "노력한 만큼 결과가 나온다 — bu platformaning ham qoidasi: qancha takrorlasangiz, shuncha qoladi.",
      v: [["대가", "evaz, haq"], ["보람", "mehnatning rohati"], ["수고", "zahmat"], ["지시", "ko'rsatma"], ["설명서", "qo'llanma"], ["순서", "tartib, ketma-ketlik"], ["원하다", "xohlamoq"], ["따르다", "ergashmoq, amal qilmoq", "따라요"], ["그대로", "o'shandayligicha"], ["마음대로", "xohlaganicha"], ["눈을 감다", "ko'zni yummoq"], ["입에 맞다", "ta'bga yoqmoq"], ["세수", "yuz yuvish"]],
      g: [
        { p: "A/V-(으)ㄴ/는 만큼 · N만큼", uz: "-ganiga yarasha, -ganicha · N-chalik", d: "Sabab ma'nosida ham keladi: 비싼 만큼 품질이 좋다 — qimmat bo'lgani uchun sifati ham yaxshi.", ex: [["노력한 만큼 좋은 결과가 있을 거예요.", "Harakat qilganingizga yarasha yaxshi natija bo'ladi."], ["먹고 싶은 만큼 드세요.", "Xohlaganingizcha oling."], ["저도 형만큼 키가 커요.", "Men ham akamchalik novchaman."]] },
        { p: "V-(으)ㄴ/는 대로 · V-(으)ㄴ 채(로)", uz: "-ganidek; -ishi bilanoq · -gan holicha", d: "-는 대로 ikki ma'noli: «xuddi shunday» va «-ishi bilanoq». -(으)ㄴ 채로 — holat o'zgarmay turib boshqa ish qilinadi.", ex: [["설명서에 쓰여 있는 대로 만들었어요.", "Qo'llanmada yozilganidek yasadim."], ["도착하는 대로 연락 주세요.", "Yetib borishingiz bilanoq xabar bering."], ["불을 켠 채로 잠이 들었어요.", "Chiroqni yoqqan holicha uxlab qoldim."]] }
      ],
      c: [
        ["일한 ___ 돈을 받아요.", "만큼", ["채로", "김에", "듯이"], "Ishlaganimga yarasha pul olaman."],
        ["선생님이 말씀하신 ___ 했어요.", "대로", ["채로", "만큼도", "뿐"], "O'qituvchi aytganlaridek qildim."],
        ["안경을 쓴 ___ 세수를 했어요.", "채로", ["대로", "만큼", "겸"], "Ko'zoynak taqqan holimcha yuzimni yuvdim."],
        ["회의가 끝나는 ___ 전화 드리겠습니다.", "대로", ["채로", "듯이", "일쑤"], "Majlis tugashi bilanoq qo'ng'iroq qilaman."],
        ["Xohlaganicha = ___", "마음대로", ["그대로", "어차피", "금세"], "마음대로"]
      ]
    },
    {
      id: "p5", type: "lesson", t: "Ishonch darajalari", k: "-(으)ㄹ 게 뻔하다 · -는 모양이다 · -(으)ㄹ지도 모르다",
      goal: "«aniq shunday bo'ladi»dan «balki»gacha — taxminning to'rt darajasi.",
      tip: "Tinglash bo'limida gapiruvchi qanchalik ishonayotganini topish kerak: 뻔하다 (aniq) > 모양이다 (ko'rinishidan) > -(으)ㄹ걸요 (menimcha) > -(으)ㄹ지도 모르다 (balki).",
      v: [["분명하다", "aniq, ravshan"], ["틀림없다", "shubhasiz"], ["짐작하다", "taxmin qilmoq, chamalamoq"], ["추측", "taxmin"], ["예감", "oldindan sezish"], ["가능성", "ehtimollik"], ["확률", "ehtimol (foizda)"], ["어쩐지", "negadir; shuning uchun ekan-da"], ["아무래도", "har holda, menimcha"], ["혹시", "mabodo"], ["사정", "sharoit, sabab"], ["핑계", "bahona"], ["줄을 서다", "navbatga turmoq"]],
      g: [
        { p: "A/V-(으)ㄹ 게 뻔하다 · A/V-(으)ㄴ/는/(으)ㄹ 모양이다", uz: "-ishi aniq · -ga o'xshaydi (ko'rinishidan)", d: "뻔하다 — odatda yomon natija. 모양이다 — ko'rib turgan belgidan chiqarilgan xulosa: «…걸 보니 …모양이다».", ex: [["지금 출발하면 늦을 게 뻔해요.", "Hozir yo'lga chiqsak, kech qolishimiz aniq."], ["사람들이 줄을 서 있는 걸 보니 맛있는 모양이에요.", "Odamlar navbatda turganiga qaraganda, mazali shekilli."], ["표정을 보니 무슨 일이 있는 모양이에요.", "Yuz ifodasiga qaraganda, nimadir bo'lgan shekilli."]] },
        { p: "A/V-(으)ㄹ지도 모르다 · A/V-(으)ㄹ걸요", uz: "balki -ar · -sa kerak (yumshoq e'tiroz)", d: "-(으)ㄹ걸요 — suhbatdoshning fikriga muloyim qarshi chiqish; ohang ko'tariladi.", ex: [["내일 비가 올지도 몰라요.", "Ertaga balki yomg'ir yog'ar."], ["그 가게는 오늘 문을 닫았을걸요.", "U do'kon bugun yopiq bo'lsa kerak."], ["민수 씨는 벌써 퇴근했을걸요.", "Minsu allaqachon ishdan ketgan bo'lsa kerak."]] }
      ],
      c: [
        ["공부를 안 했으니까 시험에 떨어질 게 ___.", "뻔해요", ["모양이에요", "따름이에요", "일쑤예요"], "O'qimaganim uchun imtihondan yiqilishim aniq."],
        ["불이 꺼진 걸 보니 벌써 자는 ___이에요.", "모양", ["뻔", "겸", "채"], "Chiroq o'chganiga qaraganda, allaqachon uxlayotgan shekilli."],
        ["길이 막혀서 조금 늦을___ 몰라요.", "지도", ["걸요", "대로", "만큼"], "Yo'l tirband, balki biroz kechikarman."],
        ["가: 은행이 아직 열려 있을까요?  나: 벌써 닫았___.", "을걸요", ["을 겸요", "는 김에요", "은 채요"], "— Bank hali ochiqmikan? — Allaqachon yopilgan bo'lsa kerak."],
        ["Bahona = ___", "핑계", ["사정", "추측", "확률"], "핑계"]
      ]
    },
    {
      id: "p6", type: "lesson", t: "To's-to'polon, haddan ziyod, u yoqda tursin", k: "-는 통에 · -(으)ㄴ 나머지 · -기는커녕",
      goal: "Salbiy sababning ikki turi va «… u yoqda tursin» qolipi.",
      tip: "은/는커녕 dan keyin doim undan ham yomonroq yoki kutilganning teskarisi keladi: 저축은커녕 빚만 늘었다.",
      v: [["소음", "shovqin"], ["떠들다", "shovqin qilmoq"], ["충격", "zarba, shok"], ["흥분하다", "hayajonlanmoq, qizishmoq"], ["지치다", "holdan toymoq"], ["기절하다", "hushidan ketmoq"], ["저축", "jamg'arma"], ["빚", "qarz"], ["사과하다", "uzr so'ramoq"], ["지출", "chiqim, xarajat"], ["정반대", "mutlaqo teskari"], ["방해", "xalaqit"], ["한마디", "bir og'iz so'z"]],
      g: [
        { p: "V-는 통에 · A/V-(으)ㄴ 나머지", uz: "-gan to's-to'polonda · haddan ziyod -ganidan", d: "통에 — shovqinli, tartibsiz vaziyat sababchi. 나머지 — his-tuyg'u yoki harakat chegaradan oshib ketgan.", ex: [["아이들이 떠드는 통에 잠을 못 잤어요.", "Bolalar shovqin qilgan to's-to'polonda uxlay olmadim."], ["너무 긴장한 나머지 말을 한마디도 못 했어요.", "Haddan ziyod hayajonlanganimdan bir og'iz ham gapira olmadim."], ["기쁜 나머지 눈물이 났어요.", "Quvonganimdan ko'zimga yosh keldi."]] },
        { p: "N은/는커녕 · A/V-기는커녕 · A/V-(으)ㄴ/는 데 반해", uz: "… u yoqda tursin · -gani holda, aksincha", d: "데 반해 — 반면에 ning yozma, rasmiy shakli.", ex: [["저축은커녕 빚만 늘었어요.", "Jamg'arma u yoqda tursin, qarz ko'paydi."], ["사과하기는커녕 오히려 화를 냈어요.", "Uzr so'rash u yoqda tursin, aksincha jahl qildi."], ["수입은 줄어든 데 반해 지출은 늘었습니다.", "Daromad kamaygani holda, chiqim ko'paydi."]] }
      ],
      c: [
        ["옆집에서 공사를 하는 ___ 공부를 할 수 없었어요.", "통에", ["김에", "겸", "대로"], "Qo'shni uyda qurilish bo'layotgan to's-to'polonda o'qiy olmadim."],
        ["너무 놀란 ___ 아무 말도 못 했어요.", "나머지", ["김에", "대로", "만큼도"], "Haddan ziyod cho'chiganimdan hech narsa deya olmadim."],
        ["칭찬___ 야단만 맞았어요.", "은커녕", ["뿐", "만큼", "대로"], "Maqtov u yoqda tursin, faqat dakki eshitdim."],
        ["도와주기___ 방해만 했어요.", "는커녕", ["는 김에", "일쑤", "십상"], "Yordam berish u yoqda tursin, faqat xalaqit berdi."],
        ["수입 ↔ ___", "지출", ["저축", "빚", "충격"], "daromad ↔ chiqim"]
      ]
    },
    {
      id: "pt", type: "test", t: "Nazorat: 5급", k: "5급 시험",
      goal: "TOPIK II ning yuqori-o'rta qismi (5급 darajasi) uslubida.",
      qs: [
        { q: "읽기 1-tur. Bo'sh joyga mos shakl.", text: "은행에 (   ) 공과금도 내고 왔다.", opts: ["간 김에", "간 채로", "가는 통에", "간 나머지"], a: 0, exp: "Bankka borgan bahonada yana bir ish → -(으)ㄴ 김에." },
        { q: "읽기 2-tur. Bo'sh joyga mos shakl.", text: "급하게 먹으면 (   ) 십상이다.", opts: ["체하기", "체하는", "체할", "체한"], a: 0, exp: "V-기 십상이다." },
        { q: "읽기 3-tur. Tagiga chizilgan qismga ma'nodosh.", text: "하늘을 보니 곧 비가 올 듯하다.  →  «올 듯하다»", opts: ["올 것 같다", "올 리가 없다", "올 뿐이다", "오기 일쑤이다"], a: 0, exp: "듯하다 = 것 같다." },
        { q: "읽기 4-tur. Tagiga chizilgan qismga ma'nodosh.", text: "도와주기는커녕 방해만 했다.  →  «도와주기는커녕»", opts: ["도와주지 않았을 뿐만 아니라 오히려", "도와준 덕분에", "도와주려고", "도와주는 대로"], a: 0, exp: "-기는커녕 — «… u yoqda tursin, aksincha»." },
        { q: "듣기 6-tur. Davom ettiring.", audio: "요즘 살이 많이 빠진 것 같아요. 무슨 일 있어요? 매일 저녁에 한 시간씩 걸었더니 이렇게 됐어요.", opts: ["저도 운동을 좀 해야겠네요.", "그럼 많이 드시면 안 돼요.", "걷다가 넘어질 뻔했군요.", "살이 찔 게 뻔해요."], a: 0, exp: "«Har kuni yurgan edim, shunday bo'ldi» — tabiiy javob: men ham sport qilishim kerak ekan." },
        { q: "듣기 21-tur. Erkakning asosiy fikri.", audio: "신입 사원 교육을 줄이자는 의견이 있는데요. 저는 반대입니다. 교육에 투자한 만큼 직원의 능력이 높아지고, 그것이 결국 회사의 이익으로 돌아오기 때문입니다.", opts: ["직원 교육은 회사에 도움이 되므로 유지해야 한다.", "신입 사원 교육은 비용이 너무 많이 든다.", "직원의 능력은 교육과 관계가 없다.", "회사의 이익을 위해 교육을 줄여야 한다."], a: 0, exp: "«Qarshiman… sarflanganiga yarasha qaytadi»." },
        { q: "읽기 16-tur. Bo'sh joyga mos qism.", text: "사람들은 흔히 바쁠수록 쉬는 시간을 줄이려고 한다. 그러나 쉬지 않고 일하면 집중력이 떨어져서 실수하기 일쑤이다. 따라서 일을 잘하기 위해서라도 (   ).", opts: ["충분히 쉬는 시간을 가져야 한다", "쉬는 시간을 더 줄여야 한다", "실수를 두려워하지 말아야 한다", "일하는 시간을 늘려야 한다"], a: 0, exp: "Dam olmasa xato ko'payadi → demak, yetarli dam olish kerak." },
        { q: "읽기 23-tur. Tagiga chizilgan qismdagi «men»ning his-tuyg'usi.", text: "면접 날 아침, 너무 긴장한 나머지 밥도 먹지 못했다. 그런데 면접관이 내 이력서를 보더니 고향 이야기를 꺼냈다. 뜻밖에 고향이 같았던 것이다. 그 순간 굳어 있던 어깨가 스르르 풀렸다.", opts: ["안심이 되다", "억울하다", "부끄럽다", "서운하다"], a: 0, exp: "Qotib qolgan yelkalar bo'shashdi — xotirjam tortdi." },
        { q: "읽기 32-tur. Matnga mos gap.", text: "최근 '느린 여행'이 주목받고 있다. 유명한 관광지를 빠르게 돌아보는 대신 한 지역에 오래 머물면서 그곳 사람들처럼 생활해 보는 것이다. 이런 여행은 비용이 덜 드는 데다가 지역 경제에도 도움이 된다. 다만 일정이 긴 만큼 휴가를 길게 낼 수 있어야 한다.", opts: ["느린 여행을 하려면 긴 휴가가 필요하다.", "느린 여행은 여러 관광지를 빠르게 본다.", "느린 여행은 일반 여행보다 돈이 많이 든다.", "느린 여행은 지역 경제에 부담을 준다."], a: 0, exp: "일정이 긴 만큼 휴가를 길게 낼 수 있어야 한다." },
        { q: "읽기 35-tur. Matnning mavzusi.", text: "칭찬은 고래도 춤추게 한다고 하지만 모든 칭찬이 좋은 것은 아니다. 근거 없이 반복되는 칭찬은 듣는 사람에게 부담이 될 뿐이다. 구체적인 행동을 짚어서 하는 칭찬이야말로 상대에게 힘이 된다.", opts: ["칭찬은 구체적으로 해야 효과가 있다.", "칭찬은 많이 할수록 좋다.", "칭찬은 사람에게 부담만 준다.", "고래는 칭찬을 들으면 춤을 춘다."], a: 0, exp: "«Aniq harakatni ko'rsatib aytilgan maqtovgina kuch beradi»." }
      ]
    }
  ]
});

ADV.push({
  grp: "TOPIK II · 6급", id: "q", line: "L", cb: "L", lname: "신림선", color: "#5F7FC4", name: "6급 grammatikasi", ko: "6급 문법",
  lessons: [
    {
      id: "q1", type: "lesson", t: "Kitobiy yon berish", k: "-(으)ㄹ지라도 · -(으)ㄴ들 · -건만 · -(으)련만",
      goal: "Badiiy va publitsistik matnlardagi «-sa ham», «-gani bilan», «-sa-da» shakllari.",
      tip: "6급 qoliplarini o'zingiz ishlatishingiz shart emas — matnda ko'rganda tanish kifoya. Shuning uchun har birini tanish 4급 qolipiga bog'lang: -(으)ㄹ지라도 ≈ -더라도, -건만 ≈ -지만.",
      v: [["설령", "faraz qilaylik, hatto"], ["제아무리", "har qancha (zo'r bo'lmasin)"], ["가령", "masalan, faraz qilaylik"], ["역경", "mashaqqat, og'ir sharoit"], ["시련", "sinov"], ["굴복하다", "taslim bo'lmoq"], ["꺾이다", "sinmoq; ruhi tushmoq"], ["의지", "iroda"], ["신념", "e'tiqod, ishonch"], ["원칙", "tamoyil"], ["양보하다", "yon bermoq"], ["소용", "foyda, naf"], ["소망", "istak, orzu"]],
      g: [
        { p: "A/V-(으)ㄹ지라도 · A/V-(으)ㄴ들", uz: "-gan taqdirda ham · -gani bilan (foydasi yo'q)", d: "-(으)ㄴ들 dan keyin ko'pincha ritorik savol keladi: …겠는가?", ex: [["비록 실패할지라도 도전해 보겠습니다.", "Garchi muvaffaqiyatsiz bo'lsam ham, urinib ko'raman."], ["설령 그 말이 사실일지라도 믿기 어렵다.", "Hatto u gap rost bo'lgan taqdirda ham ishonish qiyin."], ["이제 와서 후회한들 무슨 소용이 있겠는가?", "Endi afsuslangan bilan nima foyda?"]] },
        { p: "A/V-건만 · A/V-(으)련만", uz: "-sa-da, lekin · -sa edi, (afsuski)", d: "-건만 — kutilgan natija chiqmadi. -(으)련만 — amalga oshmagan istak; -(으)면 좋으련만 shaklida.", ex: [["여러 번 설명했건만 아직도 이해하지 못한다.", "Bir necha bor tushuntirgan bo'lsam-da, hali ham tushunmayapti."], ["봄이 왔건만 날씨는 여전히 춥다.", "Bahor kelgan bo'lsa-da, havo hamon sovuq."], ["조금만 더 노력하면 좋으련만 벌써 포기해 버렸다.", "Yana ozgina harakat qilsa edi, afsuski allaqachon voz kechdi."]] }
      ],
      c: [
        ["아무리 힘들___ 포기하지 않겠다.", "지라도", ["건만", "련만", "길래"], "Qanchalik og'ir bo'lsa ham, voz kechmayman."],
        ["지금 서두른___ 이미 늦었다.", "들", ["지라도", "건만", "므로"], "Hozir shoshilgan bilan allaqachon kech."],
        ["몇 번이나 부탁했___ 들어주지 않았다.", "건만", ["지라도", "은들", "련만"], "Necha marta iltimos qilgan bo'lsam-da, quloq solmadi."],
        ["비가 좀 오면 좋으___ 하늘은 맑기만 하다.", "련만", ["건만", "므로", "길래"], "Biroz yomg'ir yog'sa edi, osmon esa musaffo."],
        ["Taslim bo'lmoq = ___", "굴복하다", ["양보하다", "꺾이다", "극복하다"], "굴복하다"]
      ]
    },
    {
      id: "q2", type: "lesson", t: "Kitobiy qo'shish va sanash", k: "-거니와 · -(으)ㄹ뿐더러 · -는가 하면",
      goal: "«…-gani ustiga», «nafaqat», «ba'zilari … bo'lsa, ba'zilari …».",
      tip: "Bular -(으)ㄹ 뿐만 아니라 va -는 반면에 ning yuqori darajadagi qarindoshlari. Ma'nosi tanish — faqat shakli yangi.",
      v: [["더불어", "birgalikda"], ["아울러", "shu bilan birga"], ["나아가", "bundan tashqari, yanada"], ["비단", "faqatgina (inkor bilan)"], ["측면", "jihat, tomon"], ["양면", "ikki tomon"], ["실용성", "amaliylik"], ["창의력", "ijodkorlik"], ["인성", "insoniy fazilat"], ["겸비하다", "o'zida mujassam etmoq"], ["한편", "bir tomondan; shu bilan birga"], ["한결같다", "o'zgarmas, bir xil"], ["변덕스럽다", "o'zgaruvchan, injiq"], ["쌀쌀하다", "salqin, izg'irinli"]],
      g: [
        { p: "A/V-거니와 · A/V-(으)ㄹ뿐더러", uz: "-gani ustiga … ham · nafaqat …", d: "Ikkala qism bir yo'nalishda. 물론이거니와 — «…-ni aytmasa ham bo'ladi, buning ustiga».", ex: [["그는 실력도 뛰어나거니와 성격도 좋다.", "Uning mahorati a'lo bo'lgani ustiga fe'li ham yaxshi."], ["이 방법은 시간도 많이 걸릴뿐더러 비용도 많이 든다.", "Bu usul nafaqat ko'p vaqt oladi, xarajati ham katta."], ["날씨도 춥거니와 눈까지 내려서 길이 미끄럽다.", "Havo sovuq bo'lgani ustiga qor ham yog'ib, yo'l sirpanchiq."]] },
        { p: "V-는가 하면 · A-(으)ㄴ가 하면", uz: "… bo'lsa, … ham bor", d: "Ikki xil holatni yonma-yon sanash; xolis tasvir.", ex: [["찬성하는 사람이 있는가 하면 반대하는 사람도 있다.", "Tarafdorlar bo'lsa, qarshilar ham bor."], ["어떤 날은 더운가 하면 어떤 날은 쌀쌀하다.", "Ba'zi kun issiq bo'lsa, ba'zi kun salqin."], ["웃는 아이가 있는가 하면 우는 아이도 있다.", "Kulayotgan bola bo'lsa, yig'layotgani ham bor."]] }
      ],
      c: [
        ["이 식당은 맛도 좋___ 분위기도 훌륭하다.", "거니와", ["건만", "길래", "련만"], "Bu restoranning ta'mi yaxshi bo'lgani ustiga muhiti ham ajoyib."],
        ["그는 예의가 바를___ 책임감도 강하다.", "뿐더러", ["지라도", "망정", "바에야"], "U nafaqat odobli, mas'uliyati ham kuchli."],
        ["열심히 하는 학생이 있는___ 하면 그렇지 않은 학생도 있다.", "가", ["지", "들", "바"], "Tirishadigan talaba bo'lsa, unday bo'lmagani ham bor."],
        ["Bir tomondan; shu bilan birga = ___", "한편", ["비단", "나아가", "더불어"], "한편"],
        ["한결같다 ↔ ___", "변덕스럽다", ["겸비하다", "뛰어나다", "독특하다"], "o'zgarmas ↔ o'zgaruvchan"]
      ]
    },
    {
      id: "q3", type: "lesson", t: "Rasmiy sabab", k: "-(으)므로 · -(으)니만큼 · -기에 · -는지라",
      goal: "Rasmiy hujjat, nutq va ilmiy matndagi sabab shakllari.",
      tip: "-(으)므로 ni Koreyada e'lon va ogohlantirish taxtalarida ko'rgansiz: «위험하므로 …», «공사 중이므로 …».",
      v: [["까닭", "sabab"], ["계기", "turtki, sabab bo'lgan voqea"], ["동기", "motiv"], ["배경", "zamin, fon"], ["요인", "omil"], ["초래하다", "keltirib chiqarmoq (salbiy)"], ["비롯되다", "kelib chiqmoq"], ["기인하다", "…dan kelib chiqmoq"], ["야기하다", "sabab bo'lmoq (muammoga)"], ["불가피하다", "muqarrar"], ["철저히", "puxta"], ["워낙", "o'zi shunchalik"], ["처리하다", "hal qilmoq, bajarmoq"], ["출입", "kirish-chiqish"]],
      g: [
        { p: "A/V-(으)므로 · A/V-(으)니만큼", uz: "-gani sababli (rasmiy) · -gani uchun, shunga yarasha", d: "-(으)므로 — hujjat, qaror, e'lon. -(으)니만큼 — sabab va daraja birga: «shunchalik muhim ekan, shuncha…».", ex: [["이곳은 위험하므로 출입을 금합니다.", "Bu yer xavfli bo'lgani sababli kirish taqiqlanadi."], ["성적이 우수하므로 이 상장을 수여합니다.", "O'zlashtirishi a'lo bo'lgani sababli ushbu yorliq topshiriladi."], ["중요한 시험이니만큼 철저히 준비해야 한다.", "Muhim imtihon bo'lgani uchun puxta tayyorlanish kerak."]] },
        { p: "A/V-기에 · A/V-길래 · A/V-(으)ㄴ/는지라", uz: "-gani uchun (shunday qildim) · -gani tufayli (kitobiy)", d: "-길래 — og'zaki; birinchi gap tashqi vaziyat, ikkinchisi mening harakatim. -기에 — uning yozma shakli.", ex: [["날씨가 좋기에 산책을 나갔다.", "Havo yaxshi bo'lgani uchun sayrga chiqdim."], ["값이 싸길래 두 개나 샀어요.", "Narxi arzon ekan, ikkita oldim."], ["워낙 바쁜지라 연락을 드리지 못했습니다.", "O'zi shunchalik band bo'lganim tufayli xabar bera olmadim."]] }
      ],
      c: [
        ["공사 중이___ 다른 길을 이용해 주시기 바랍니다.", "므로", ["길래", "건만", "련만"], "Qurilish ketayotgani sababli boshqa yo'ldan foydalaning."],
        ["사람들이 줄을 서 있___ 저도 서 봤어요.", "길래", ["므로", "지라도", "거니와"], "Odamlar navbatda turgan ekan, men ham turib ko'rdim."],
        ["처음 하는 일이___ 실수가 많을 수밖에 없다.", "니만큼", ["건만", "련만", "ㄴ들"], "Birinchi marta qilinayotgan ish bo'lgani uchun xato ko'p bo'lishi tabiiy."],
        ["워낙 급한 일인___ 먼저 처리했습니다.", "지라", ["들", "바", "채"], "O'zi shunchalik shoshilinch ish bo'lgani tufayli avval shuni bajardim."],
        ["Keltirib chiqarmoq (salbiy natijani) = ___", "초래하다", ["비롯되다", "겸비하다", "양보하다"], "초래하다"]
      ]
    },
    {
      id: "q4", type: "lesson", t: "Undan ko'ra; mayli, lekin", k: "-(으)ㄹ 바에야 · -느니 · -(으)ㄹ망정 · -다시피",
      goal: "Ikki yomondan birini tanlash, qat'iy pozitsiya va «bilganingizdek».",
      tip: "아시다시피, 보시다시피 — taqdimot va ish yig'ilishlarida har doim eshitiladi. Koreyada ishlamoqchi bo'lsangiz, birinchi kundanoq kerak.",
      v: [["굶다", "och qolmoq"], ["구걸하다", "tilanchilik qilmoq"], ["자존심", "g'urur"], ["체면", "obro', yuz"], ["명예", "sha'n"], ["타협하다", "murosa qilmoq"], ["고집", "qaysarlik"], ["어설프다", "chala, no'noq"], ["아예", "umuman, boshidanoq"], ["도리어", "aksincha"], ["억지로", "zo'rlab, majburan"], ["망설이다", "ikkilanmoq"], ["감수하다", "(zararni) bo'yniga olmoq"], ["차라리", "undan ko'ra, yaxshisi"]],
      g: [
        { p: "V-(으)ㄹ 바에야 · V-느니 (차라리)", uz: "-gandan ko'ra (yaxshisi)", d: "Ikkala variant ham yoqmaydi, lekin ikkinchisi afzalroq. Ortidan 차라리, 아예 keladi.", ex: [["이렇게 살 바에야 차라리 고향으로 돌아가겠다.", "Shunday yashagandan ko'ra, yaxshisi yurtimga qaytaman."], ["억지로 하느니 차라리 안 하는 게 낫다.", "Zo'rlab qilgandan ko'ra, qilmagan yaxshi."], ["어설프게 할 바에야 아예 시작하지 마라.", "Chala qilgandan ko'ra, umuman boshlama."]] },
        { p: "A/V-(으)ㄹ망정 · V-다시피", uz: "-sa ham mayli, lekin · -ganingizdek; deyarli -gandek", d: "-다시피 하다 — «deyarli -gandek qilmoq»: 살다시피 하다.", ex: [["굶을망정 남에게 구걸하지는 않겠다.", "Och qolsam ham mayli, birovdan tilanmayman."], ["아시다시피 요즘 경제가 어렵습니다.", "Bilganingizdek, hozir iqtisod og'ir."], ["시험 기간에는 도서관에서 살다시피 했어요.", "Imtihon paytida deyarli kutubxonada yashadim."]] }
      ],
      c: [
        ["그런 사람과 일할 ___ 혼자 하는 게 낫다.", "바에야", ["망정", "지라도", "뿐더러"], "Unday odam bilan ishlagandan ko'ra, yolg'iz qilgan yaxshi."],
        ["기다리___ 차라리 걸어가겠어요.", "느니", ["다시피", "거니와", "므로"], "Kutgandan ko'ra, yaxshisi piyoda ketaman."],
        ["가난하게 살___ 거짓말은 하지 않겠다.", "망정", ["바에야", "다시피", "길래"], "Kambag'al yashasam ham mayli, yolg'on gapirmayman."],
        ["보시___ 이 제품은 아주 가볍습니다.", "다시피", ["느니", "건만", "련만"], "Ko'rib turganingizdek, bu mahsulot juda yengil."],
        ["Ikkilanmoq = ___", "망설이다", ["타협하다", "감수하다", "굶다"], "망설이다"]
      ]
    },
    {
      id: "q5", type: "lesson", t: "Muallif bahosi", k: "-기 나름이다 · -(으)ㄹ 법하다 · -(으)ㄹ 여지가 없다",
      goal: "«…-ishga bog'liq», «shunday bo'lishi tabiiy», «…-ishga o'rin yo'q», «ortig'i bilan yetadi».",
      tip: "읽기 ning oxirgi savollari (46–50) muallifning munosabatini so'raydi. Javob deyarli har doim gap oxiridagi shu kabi qolipda yashiringan.",
      v: [["여지", "o'rin, imkon"], ["나름", "o'ziga yarasha"], ["그럴듯하다", "ishonarli ko'rinadigan"], ["타당하다", "asosli, o'rinli"], ["납득하다", "ishonch hosil qilmoq, qabul qilmoq"], ["수긍하다", "qo'shilmoq, ma'qullamoq"], ["터무니없다", "asossiz, bema'ni"], ["명백하다", "ochiq-oydin"], ["모호하다", "mujmal"], ["넉넉하다", "mo'l, bemalol"], ["변명", "o'zini oqlash"], ["증거", "dalil, isbot"], ["마음먹다", "niyat qilmoq"]],
      g: [
        { p: "V-기 나름이다 · A/V-(으)ㄹ 법하다", uz: "-ishga bog'liq · shunday bo'lishi tabiiy", d: "-(으)ㄹ 법하다 — vaziyatga qaraganda mantiqan kutilgan narsa.", ex: [["행복은 생각하기 나름이다.", "Baxt qanday o'ylashga bog'liq."], ["모든 일은 마음먹기 나름입니다.", "Har bir ish niyatga bog'liq."], ["그 상황이라면 화를 낼 법하다.", "U vaziyatda jahl qilishi tabiiy."]] },
        { p: "V-(으)ㄹ 여지가 없다 · V-(으)ㄹ 턱이 없다 · V-고도 남다", uz: "-ishga o'rin yo'q · -ishi mumkin emas · ortig'i bilan yetadi", d: "턱이 없다 — og'zaki, kuchli inkor (리가 없다 dan qat'iyroq).", ex: [["그의 성공은 의심할 여지가 없다.", "Uning muvaffaqiyatiga shubha qilishga o'rin yo'q."], ["연습도 안 했는데 잘할 턱이 없지요.", "Mashq ham qilmagan, yaxshi chiqishi mumkin emas-da."], ["이 정도 음식이면 열 명이 먹고도 남아요.", "Shuncha ovqat o'n kishiga ortig'i bilan yetadi."]] }
      ],
      c: [
        ["성공과 실패는 노력하기 ___이다.", "나름", ["여지", "턱", "법"], "Muvaffaqiyat va muvaffaqiyatsizlik harakatga bog'liq."],
        ["그 증거는 명백해서 변명할 ___가 없다.", "여지", ["나름", "법", "겸"], "U dalil ochiq-oydin, o'zini oqlashga o'rin yo'q."],
        ["거짓말만 하는 사람의 말을 믿을 ___이 없다.", "턱", ["나름", "여지", "법"], "Faqat yolg'on gapiradigan odamning gapiga ishonish mumkin emas."],
        ["그 돈이면 한 달을 살고도 ___.", "남는다", ["나름이다", "법하다", "일쑤다"], "U pul bir oy yashashga ortig'i bilan yetadi."],
        ["명백하다 ↔ ___", "모호하다", ["타당하다", "넉넉하다", "그럴듯하다"], "ochiq-oydin ↔ mujmal"]
      ]
    },
    {
      id: "q6", type: "lesson", t: "Ilmiy uslub, maqol va 사자성어", k: "학술 표현 · 사자성어",
      goal: "Ilmiy-publitsistik matn qoliplari hamda to'rt ieroglifli iboralar va maqollar.",
      tip: "사자성어 va maqollar 읽기 va 듣기 da bo'sh joy savoli sifatida chiqadi. O'zbek maqoli bilan juftlab yodlang: 티끌 모아 태산 = tomchi-tomchi ko'l bo'lur.",
      v: [["일석이조", "bir o'q bilan ikki quyon"], ["동문서답", "savolga aloqasiz javob"], ["작심삼일", "qarori uch kunga yetmaslik"], ["우유부단", "qat'iyatsizlik"], ["시행착오", "sinab-xato qilib o'rganish"], ["과유불급", "ortiqchasi ham zarar"], ["역지사지", "o'zini boshqaning o'rniga qo'yish"], ["전화위복", "baxtsizlikning baxtga aylanishi"], ["설상가상", "ustiga-ustak (yomonlik ustiga yomonlik)"], ["금상첨화", "yaxshi ustiga yaxshi"], ["티끌 모아 태산", "tomchi-tomchi ko'l bo'lur"], ["소 잃고 외양간 고친다", "keyingi pushaymon — o'zingga dushman"], ["백지장도 맞들면 낫다", "birgalikda qilinsa yengil"], ["우물 안 개구리", "dunyoqarashi tor odam (quduqdagi qurbaqa)"]],
      g: [
        { p: "N(으)로서 · N(으)로써 · N(이)야말로 · N에 불과하다", uz: "N sifatida · N vositasida · aynan N-ning o'zi · bor-yo'g'i N xolos", d: "로서 — maqom, rol. 로써 — vosita, usul. Ikkalasini adashtirish — klassik xato.", ex: [["교사로서 책임을 다하겠습니다.", "O'qituvchi sifatida mas'uliyatimni ado etaman."], ["대화로써 문제를 해결해야 한다.", "Muammoni muloqot vositasida hal qilish kerak."], ["건강이야말로 가장 큰 재산이다.", "Aynan sog'liqning o'zi eng katta boylikdir."], ["그것은 변명에 불과하다.", "Bu bor-yo'g'i bahona, xolos."]] },
        { p: "V-(으)ㄴ/는 바 · N에 의하면 · N을/를 비롯하여", uz: "-gan narsa, -ganidek · N-ga ko'ra · N boshliq", d: "바 = 것 ning rasmiy shakli: 조사한 바, 아는 바, 위에서 살펴본 바와 같이.", ex: [["조사한 바에 의하면 응답자의 70%가 찬성했다.", "Tekshirilganiga ko'ra, ishtirokchilarning 70 foizi tarafdor bo'lgan."], ["위에서 살펴본 바와 같이 원인은 다양하다.", "Yuqorida ko'rib chiqilganidek, sabablar turlicha."], ["서울을 비롯하여 전국에 눈이 내렸다.", "Seul boshliq butun mamlakatda qor yog'di."]] }
      ],
      c: [
        ["부모___ 아이에게 모범을 보여야 한다.", "로서", ["로써", "야말로", "에 불과"], "Ota-ona sifatida bolaga o'rnak ko'rsatish kerak."],
        ["이번 실패___ 좋은 기회가 될 수 있다.", "야말로", ["로서", "에 의하면", "를 비롯하여"], "Aynan shu muvaffaqiyatsizlik yaxshi imkoniyat bo'lishi mumkin."],
        ["위에서 언급한 ___와 같이 문제는 심각하다.", "바", ["채", "겸", "김"], "Yuqorida aytib o'tilganidek, muammo jiddiy."],
        ["운동도 하고 돈도 아낀다 = ___", "일석이조", ["작심삼일", "설상가상", "동문서답"], "bir o'q bilan ikki quyon"],
        ["결심이 오래가지 못한다 = ___", "작심삼일", ["일석이조", "전화위복", "역지사지"], "qarori uch kunga yetmaydi"],
        ["나쁜 일이 계속 겹친다 = ___", "설상가상", ["금상첨화", "시행착오", "과유불급"], "ustiga-ustak"]
      ]
    },
    {
      id: "qt", type: "test", t: "Nazorat: 6급", k: "6급 시험",
      goal: "TOPIK II ning eng qiyin qismi (6급 darajasi) uslubida.",
      qs: [
        { q: "읽기 1-tur. Bo'sh joyga mos shakl.", text: "남에게 피해를 주면서 성공할 (   ) 차라리 성공하지 않는 편이 낫다.", opts: ["바에야", "지라도", "뿐더러", "거니와"], a: 0, exp: "«…-gandan ko'ra, yaxshisi» → -(으)ㄹ 바에야 + 차라리." },
        { q: "읽기 2-tur. Bo'sh joyga mos shakl.", text: "수십 번 주의를 (   ) 같은 실수가 반복되고 있다.", opts: ["주었건만", "주므로", "주길래", "주다시피"], a: 0, exp: "Kutilgan natija chiqmadi → -건만." },
        { q: "읽기 3-tur. Tagiga chizilgan qismga ma'nodosh.", text: "설령 실패할지라도 후회하지 않겠다.  →  «실패할지라도»", opts: ["실패하더라도", "실패했으므로", "실패하길래", "실패하다시피"], a: 0, exp: "-(으)ㄹ지라도 ≈ -더라도." },
        { q: "읽기 4-tur. Tagiga chizilgan qismga ma'nodosh.", text: "결과는 준비하기 나름이다.  →  «준비하기 나름이다»", opts: ["어떻게 준비하느냐에 달려 있다", "준비할 여지가 없다", "준비하기 일쑤이다", "준비할 리가 없다"], a: 0, exp: "-기 나름이다 = -에 달려 있다 (…ga bog'liq)." },
        { q: "읽기 21-tur. Bo'sh joyga mos ibora.", text: "새해마다 운동을 하겠다고 결심하지만 늘 (   )로 끝나고 만다.", opts: ["작심삼일", "일석이조", "금상첨화", "역지사지"], a: 0, exp: "Qaror uzoqqa bormaydi — 작심삼일." },
        { q: "읽기 21-tur. Bo'sh joyga mos maqol.", text: "사고가 난 뒤에야 안전 규정을 만드는 것은 (   ) 식의 대응이다.", opts: ["소 잃고 외양간 고치는", "티끌 모아 태산이 되는", "백지장도 맞드는", "우물 안 개구리 같은"], a: 0, exp: "Ish o'tgandan keyin chora ko'rish — «sigir yo'qolgach og'il tuzatish»." },
        { q: "듣기 32-tur. Erkakning munosabati.", audio: "그 주장에도 일리가 있다고 봅니다. 다만 한 가지 조사 결과만으로 결론을 내리는 것은 성급합니다. 지역과 세대를 비롯하여 다양한 요인을 함께 살펴본 후에 판단해야 한다고 생각합니다.", opts: ["상대의 의견을 일부 인정하면서 신중한 판단을 요구하고 있다.", "상대의 주장에 전적으로 동의하고 있다.", "조사 결과를 근거로 상대를 강하게 비판하고 있다.", "문제의 책임을 다른 사람에게 돌리고 있다."], a: 0, exp: "«Asosi bor… ammo shoshilinch» — qisman tan olib, ehtiyotkorlikni talab qilyapti." },
        { q: "읽기 28-tur. Bo'sh joyga mos qism.", text: "기술이 발달할수록 인간의 노동이 줄어들 것이라는 예상과 달리 현대인은 오히려 더 바빠졌다. 일을 빨리 처리할 수 있게 되자 (   ) 때문이다. 결국 기술은 시간을 만들어 주기는커녕 우리에게서 여유를 빼앗아 간 셈이다.", opts: ["같은 시간에 더 많은 일을 요구받게 되었기", "일하는 시간이 크게 줄어들었기", "사람들이 기술을 사용하지 않게 되었기", "여가 활동이 다양해졌기"], a: 0, exp: "Tezroq ishlash mumkin bo'lgach, ko'proq ish talab qilina boshladi." },
        { q: "읽기 41-tur. Gap qayerga tushadi?  «그러나 이는 사실의 일면에 불과하다.»", text: "도시의 밤이 밝아진 것은 흔히 안전과 편리함의 상징으로 여겨진다. ( ㄱ ) 지나친 인공 조명은 사람의 수면을 방해할뿐더러 동식물의 생태에도 혼란을 초래한다. ( ㄴ ) 이에 따라 일부 도시에서는 밤 시간대 조명을 제한하는 제도를 시행하고 있다. ( ㄷ ) 빛도 관리해야 할 환경 요소라는 인식이 확산되고 있는 것이다. ( ㄹ )", opts: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"], a: 0, exp: "Ijobiy qarash → «ammo bu faqat bir tomoni» → salbiy oqibatlar." },
        { q: "읽기 48-tur. Muallifning maqsadi.", text: "기본 소득 제도에 대한 논의가 다시 대두되고 있다. 재정 부담을 우려하는 목소리가 있는가 하면 양극화 해소의 대안으로 기대하는 시각도 있다. 그러나 찬반을 따지기에 앞서 소규모 시범 사업을 통해 효과를 객관적으로 검증하는 과정이 선행되어야 할 것이다.", opts: ["제도 도입에 앞서 검증이 필요함을 주장하려고", "기본 소득 제도의 즉각적인 도입을 촉구하려고", "기본 소득 제도의 문제점을 비판하려고", "재정 부담을 줄이는 방법을 소개하려고"], a: 0, exp: "«Tarafdor-qarshi bahsidan oldin sinov orqali tekshirish kerak»." }
      ]
    }
  ]
});

ADV.push({
  grp: "TOPIK II · 6급", id: "u", line: "U", cb: "U", lname: "우이신설선", color: "#7E9A00", name: "5–6급 so'z boyligi", ko: "고급 어휘",
  lessons: [
    { id: "u1", type: "lesson", t: "Ijtimoiy muammo va siyosat", k: "사회 문제 · 정책", goal: "Publitsistik matnlarning 20 ta tayanch so'zi.", tip: "Yuqori darajada so'zlar juft bo'lib yuradi: 규제 강화 ↔ 규제 완화, 격차 확대 ↔ 격차 해소. Juftlab yodlang.",
      v: [["정책", "siyosat, chora-tadbir"], ["제도", "tizim, tartib"], ["개혁", "islohot"], ["규제", "cheklov, tartibga solish"], ["완화", "yumshatish"], ["강화", "kuchaytirish"], ["양극화", "qutblanish"], ["불평등", "tengsizlik"], ["차별", "kamsitish"], ["편견", "noto'g'ri qarash"], ["갈등", "nizo, ziddiyat"], ["합의", "kelishuv"], ["여론", "jamoatchilik fikri"], ["선거", "saylov"], ["권리", "huquq"], ["의무", "majburiyat"], ["공공", "jamoat, ommaviy"], ["지역", "hudud"], ["격차", "tafovut"], ["대안", "muqobil yechim"]] },
    { id: "u2", type: "lesson", t: "Huquq va boshqaruv", k: "법 · 행정", goal: "Qonun va rasmiy tartib haqidagi matnlar uchun 20 ta so'z.",
      v: [["법률", "qonun"], ["재판", "sud jarayoni"], ["판결", "sud hukmi"], ["범죄", "jinoyat"], ["처벌", "jazo"], ["피해", "zarar, ziyon"], ["피해자", "jabrlanuvchi"], ["위반", "buzish (qoidani)"], ["단속", "nazorat, reyd"], ["허가", "ruxsat"], ["금지", "taqiq"], ["신고", "xabar berish, ariza"], ["절차", "tartib, bosqichlar"], ["기준", "mezon"], ["규정", "nizom, qoida"], ["시행", "joriy etish"], ["적용", "qo'llash"], ["예외", "istisno"], ["의무화", "majburiy qilish"], ["검증", "tekshirib tasdiqlash"]] },
    { id: "u3", type: "lesson", t: "Iqtisod: yuqori daraja", k: "경제 고급", goal: "Iqtisodiy yangiliklar tili — 20 ta so'z.",
      v: [["경기", "iqtisodiy holat"], ["불황", "turg'unlik"], ["호황", "iqtisodiy yuksalish"], ["금리", "foiz stavkasi"], ["환율", "valyuta kursi"], ["주식", "aksiya"], ["부동산", "ko'chmas mulk"], ["대출", "kredit"], ["수요", "talab"], ["공급", "taklif"], ["매출", "savdo tushumi"], ["적자", "defitsit, zarar"], ["흑자", "profitsit, foyda"], ["창업", "biznes ochish"], ["고용", "ish bilan ta'minlash"], ["임금", "ish haqi"], ["인상", "oshirish (narx, maosh)"], ["인하", "pasaytirish"], ["예산", "byudjet"], ["재정", "moliya"]] },
    { id: "u4", type: "lesson", t: "Fan va tibbiyot: yuqori daraja", k: "과학 · 의학", goal: "Ilmiy-ommabop matnlar uchun 20 ta so'z.",
      v: [["유전", "irsiyat"], ["세포", "hujayra"], ["뇌", "miya"], ["신경", "asab"], ["호르몬", "gormon"], ["바이러스", "virus"], ["감염", "yuqish, infeksiya"], ["백신", "vaksina"], ["부작용", "nojo'ya ta'sir"], ["진단", "tashxis"], ["가설", "faraz, gipoteza"], ["이론", "nazariya"], ["분석", "tahlil"], ["관찰", "kuzatuv"], ["측정", "o'lchash"], ["원리", "ishlash tamoyili"], ["구조", "tuzilma"], ["기능", "funksiya, vazifa"], ["성분", "tarkibiy qism"], ["반응", "reaksiya, javob"]] },
    { id: "u5", type: "lesson", t: "Mavhum tushunchalar", k: "추상 개념", goal: "Falsafiy va tahliliy matnlar uchun 20 ta so'z.", tip: "Bu so'zlar 54-topshiriq inshosida ballni ko'taradi: 문제 o'rniga 한계, 모순; 좋다 o'rniga 바람직하다.",
      v: [["본질", "mohiyat"], ["개념", "tushuncha"], ["가치관", "qadriyatlar tizimi"], ["정체성", "o'zlik"], ["인식", "anglash, qarash"], ["의식", "ong"], ["한계", "chegara, cheklanganlik"], ["모순", "ziddiyat"], ["균형", "muvozanat"], ["조화", "uyg'unlik"], ["다양성", "xilma-xillik"], ["보편적", "universal, umumiy"], ["상대적", "nisbiy"], ["절대적", "mutlaq"], ["추상적", "mavhum"], ["필연적", "muqarrar, qonuniy"], ["잠재력", "salohiyat"], ["통찰", "chuqur idrok"], ["성찰", "o'z-o'zini tahlil qilish"], ["윤리", "axloq, etika"]] },
    { id: "u6", type: "lesson", t: "Yuqori daraja fe'l va ravishlari", k: "고급 동사 · 부사", goal: "Gazeta tahririyat maqolalarining 20 ta so'zi.", tip: "Inkor bilan yuradigan ravishlarga e'tibor bering: 도저히 … 수 없다, 차마 … 못하다, 굳이 … 필요 없다.",
      v: [["도모하다", "ko'zlamoq, intilmoq"], ["모색하다", "izlamoq (yechim, yo'l)"], ["촉진하다", "jadallashtirmoq"], ["저해하다", "to'sqinlik qilmoq"], ["간과하다", "e'tibordan chetda qoldirmoq"], ["부각되다", "bo'rtib ko'rinmoq"], ["대두되다", "kun tartibiga chiqmoq"], ["급격히", "keskin"], ["점차", "asta-sekin"], ["대체로", "umuman olganda"], ["다소", "biroz"], ["현저히", "sezilarli darajada"], ["불과", "bor-yo'g'i"], ["무려", "naq (shuncha ko'p)"], ["오로지", "faqat va faqat"], ["굳이", "shart bo'lmasa ham, ataylab"], ["비로소", "shundagina"], ["도저히", "hech ham (… olmaydi)"], ["막상", "amalda, ish boshiga kelganda"], ["차마", "ko'ngli bo'lmay (… olmaydi)"]] },
    {
      id: "ut", type: "test", t: "5–6급 sinovi", k: "고급 모의고사",
      goal: "TOPIK II ning yuqori qismi: uzun matn, muallif munosabati, ilmiy-publitsistik uslub.",
      qs: [
        { q: "듣기 25-tur. Erkakning asosiy fikri.", audio: "많은 분들이 창업을 하면 자유로워질 거라고 기대합니다. 하지만 막상 시작해 보면 직장에 다닐 때보다 훨씬 바쁘고 책임도 큽니다. 그래서 저는 충분한 시행착오를 감수할 각오가 된 사람만 창업을 해야 한다고 생각합니다.", opts: ["창업은 어려움을 견딜 준비가 된 사람이 해야 한다.", "창업을 하면 누구나 자유로워진다.", "직장 생활이 창업보다 훨씬 힘들다.", "창업은 책임이 적어서 추천할 만하다."], a: 0, exp: "«Xatolarni bo'yniga olishga tayyor odamgina…»." },
        { q: "듣기 29-tur. Ayolning kasbi.", audio: "선생님께서는 환자의 말을 끝까지 들어 주시는 것으로 유명한데요. 네, 정확한 진단은 검사 결과뿐만 아니라 환자의 생활 습관을 이해하는 데서 비롯된다고 믿기 때문입니다.", opts: ["의사", "변호사", "기자", "교사"], a: 0, exp: "Bemor, tashxis, tekshiruv — shifokor." },
        { q: "읽기 13-tur. To'g'ri tartib.", text: "(가) 그 결과 참가자의 대부분이 처음 본 숫자와 가까운 값을 대답했다.\n(나) 사람은 처음 접한 정보에 판단이 크게 좌우되는 경향이 있다.\n(다) 한 실험에서는 참가자들에게 무작위 숫자를 보여 준 뒤 물건의 가격을 추측하게 했다.\n(라) 이는 가게에서 원래 가격을 크게 써 놓고 할인 가격을 함께 보여 주는 이유이기도 하다.", opts: ["나 – 다 – 가 – 라", "다 – 가 – 나 – 라", "나 – 가 – 다 – 라", "라 – 나 – 다 – 가"], a: 0, exp: "Umumiy fikr (나) → tajriba (다) → natija (가) → hayotiy misol (라)." },
        { q: "읽기 18-tur. Bo'sh joyga mos qism.", text: "불황이 길어질수록 소비자들은 지출을 줄이지만 모든 소비를 줄이는 것은 아니다. 큰돈이 드는 소비는 미루는 대신 작은 사치로 만족을 얻으려는 경향이 나타난다. 경기가 나쁠 때 오히려 (   ) 것도 이 때문이다.", opts: ["값싼 고급 디저트의 매출이 늘어나는", "부동산 가격이 급격히 오르는", "모든 상품의 가격이 인하되는", "소비자들이 저축을 포기하는"], a: 0, exp: "Katta xarid kechiktiriladi, kichik hashamat ko'payadi." },
        { q: "읽기 21-tur. Bo'sh joyga mos ibora.", text: "회사를 그만두고 방황하던 시기에 우연히 시작한 일이 지금의 직업이 되었으니 그야말로 (   )인 셈이다.", opts: ["전화위복", "설상가상", "우유부단", "동문서답"], a: 0, exp: "Yomon voqea yaxshilikka aylandi — 전화위복." },
        { q: "읽기 25-tur. Sarlavhani eng yaxshi tushuntirgan gap.", text: "기준 금리 동결… 대출자 한숨 돌려", opts: ["금리를 올리지 않기로 해서 돈을 빌린 사람들이 잠시 안심하게 되었다.", "금리가 크게 올라서 대출을 받은 사람들의 부담이 커졌다.", "금리가 내려가서 대출을 받는 사람이 급증했다.", "대출 규제가 강화되어 돈을 빌리기 어려워졌다."], a: 0, exp: "동결 — o'zgarishsiz qoldirish; 한숨 돌리다 — yengil nafas olmoq." },
        { q: "읽기 30-tur. Bo'sh joyga mos qism.", text: "전문가의 의견이라고 해서 무조건 신뢰하는 태도는 위험하다. 전문가 역시 자신의 분야 밖에서는 일반인과 다를 바 없으며, 분야 안에서도 (   ) 판단이 흐려질 수 있다. 따라서 주장의 근거가 타당한지를 스스로 따져 보는 습관이 필요하다.", opts: ["이해관계에 따라", "증거가 명백할수록", "경험이 많을수록", "객관적으로 분석하면"], a: 0, exp: "Mutaxassisning fikri ham manfaatga qarab xiralashishi mumkin." },
        { q: "읽기 33-tur. Matnga mos gap.", text: "수면 중 뇌는 쉬는 것이 아니라 낮 동안 쌓인 정보를 정리한다. 중요한 기억은 장기 기억으로 옮기고 불필요한 정보는 지우는 것이다. 한 연구에서는 학습 직후 충분히 잔 집단이 밤을 새운 집단에 비해 현저히 높은 기억력을 보였다. 시험 전날 잠을 줄이는 것이 도리어 손해인 까닭이다.", opts: ["공부한 뒤에 잠을 자는 것이 기억에 도움이 된다.", "뇌는 잠자는 동안 아무 활동도 하지 않는다.", "밤을 새운 집단의 기억력이 더 높았다.", "시험 전날에는 잠을 줄이는 것이 유리하다."], a: 0, exp: "Yetarli uxlagan guruh ancha yaxshi eslab qolgan." },
        { q: "읽기 37-tur. Matnning mavzusi.", text: "다양성은 조직에 갈등을 가져온다는 편견이 있다. 실제로 배경이 다른 구성원들은 합의에 이르는 데 시간이 더 걸린다. 그러나 그 과정에서 미처 간과했던 위험이 드러나고 새로운 대안이 모색된다. 비슷한 사람들끼리 빠르게 내린 결정보다 결과가 나은 경우가 많은 것은 그 때문이다.", opts: ["구성원의 다양성은 더 나은 결정을 이끌어 낸다.", "다양한 구성원이 모이면 갈등만 커진다.", "빠른 합의가 조직의 성과를 높인다.", "배경이 비슷한 사람들이 일을 더 잘한다."], a: 0, exp: "Xilma-xillik sekinlashtiradi, lekin natija yaxshiroq." },
        { q: "읽기 42-tur. Tagiga chizilgan qismdagi «men»ning his-tuyg'usi.", text: "아버지는 평생 고향을 떠난 적이 없었다. 서울로 올라가겠다는 내 말에 아버지는 아무 대답 없이 마당만 쓸었다. 떠나는 날 아침, 가방 속에서 낡은 봉투 하나가 나왔다. 꼬깃꼬깃한 지폐 몇 장과 함께 '밥은 굶지 마라'는 서툰 글씨가 적혀 있었다. 나는 차마 고개를 들 수 없었다.", opts: ["죄송하고 가슴이 뭉클하다", "화가 나고 억울하다", "지루하고 답답하다", "자랑스럽고 뿌듯하다"], a: 0, exp: "Otaning jimgina g'amxo'rligi oldida boshini ko'tara olmadi — uyat va ta'sirlanish." },
        { q: "읽기 46-tur. Muallifning munosabati.", text: "인공지능이 쓴 글이 사람의 글과 구별되지 않는 시대가 되었다. 이를 두고 창작의 종말을 말하는 것은 성급하다. 사진이 등장했을 때 회화가 사라질 것이라던 우려와 달리 화가들은 오히려 새로운 표현을 모색했다. 중요한 것은 도구가 아니라 그것으로 무엇을 말하려는가이다.", opts: ["기술의 변화를 지나치게 비관할 필요가 없다고 본다.", "인공지능이 창작을 끝낼 것이라고 우려한다.", "인공지능의 글쓰기를 금지해야 한다고 주장한다.", "사진이 회화보다 뛰어나다고 평가한다."], a: 0, exp: "«Oxirat deyish shoshilinch» — ortiqcha vahima kerak emas." },
        { q: "쓰기 54. Inshoda dalilni kuchaytiradigan eng mos gap.", text: "Mavzu: «경쟁은 사회 발전에 도움이 되는가»", opts: ["경쟁은 개인의 잠재력을 끌어낼뿐더러 사회 전체의 효율을 촉진한다는 점에서 긍정적이다.", "경쟁은 진짜 너무 좋은 것 같아요.", "저는 경쟁을 좋아합니다.", "경쟁이 뭐가 나쁜지 모르겠다."], a: 0, exp: "Kitobiy uslub, yuqori daraja bog'lovchi (-(으)ㄹ뿐더러) va aniq asos." }
      ]
    }
  ]
});

STAGES.splice(STAGES.length - 1, 0, ...ADV);
