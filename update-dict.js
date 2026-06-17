const fs = require('fs');

const data = [
    {
      id: 1,
      hallucinationNumber: "Hallucination #1",
      problemTitle: "Curiosity Ko Saza — Jawab Ko Inam",
      problemText: "Nizam-e-taleem mein sirf ratta maar jawab ko marks milte hain. Sawaal poochhna \"disturbance\" samjha jata hai. Bachay ki fitri learning ki taqat kuchli jaati hai.",
      problemUrdu: "نظام میں سوال پوچھنا سزا ہے — رٹا مارنا انعام ہے۔",
      solutionTitle: "Curiosity Engine — Roz Ek Naya Sawaal",
      solutionText: "Al Nibras Finance app mein daily AI-powered question jo bacha khud sochke jawab de. Koi \"wrong answer\" nahi. Har jawab celebrate hota hai. Sawaal poochhna = points milna.",
      solutionUrdu: "ہمارے نظام میں سوال پوچھنا = پوائنٹس ملنا۔",
      tags: ["Finance App", "Education"],
      impactQuote: "Abbas Hussain: \"Celebrate curiosity, not answers\"",
    },
    {
      id: 2,
      hallucinationNumber: "Hallucination #2",
      problemTitle: "School = Learning Ka Jhooth",
      problemText: "Michael Fullan ne 60 saal baad maana: \"I was wrong — quality education cannot be scaled through schools.\" Phir bhi parents aankhein band karke school pe bharosa karte hain.",
      problemUrdu: "اسکول اور سیکھنے کا کوئی لازمی تعلق نہیں ہے۔",
      solutionTitle: "Ghar + School + App — Teeno Mila Ke",
      solutionText: "Al Nibras model mein asli learning teeno jagah hoti hai: Mustafai School (structured), Al Nibras Finance app (daily practice), aur ghar (parent coach module). School akela nahi — ek hissa hai.",
      solutionUrdu: "گھر + اسکول + ایپ — تینوں مل کر سیکھنا ممکن ہے۔",
      tags: ["NGO", "Education", "App"],
      impactQuote: "Michael Fullan 2025: \"Scaling quality education is impossible\"",
    },
    {
      id: 3,
      hallucinationNumber: "Hallucination #3",
      problemTitle: "Pehle 10 Saal Zaya",
      problemText: "Life ke pehle 10 saal personality ki buniyaad banate hain — lekin in saalon mein koi financial literacy nahi sikhaya jata. Ye gap poori zindagi ka financial behavior decide karta hai.",
      problemUrdu: "پہلے دس سال شخصیت کی بنیاد بناتے ہیں — یہ سال ضائع ہو رہے ہیں۔",
      solutionTitle: "Age 5 Se Shuru — Al Nibras Finance",
      solutionText: "App specifically 5-17 age group ke liye design kiya gaya hai. 3 age tiers: 5-8, 9-12, 13-17. Har stage pe age-appropriate Islamic financial concepts. Parents ghar pe role model banein — Parent Coach module se.",
      solutionUrdu: "ہم پانچ سال کی عمر سے مالی تعلیم شروع کرتے ہیں۔",
      tags: ["Finance App", "Parent Coach"],
      impactQuote: "Target: \"Age 5–17 — Pehle 10 saal sahi karo\"",
    },
    {
      id: 4,
      hallucinationNumber: "Hallucination #4",
      problemTitle: "Capitalism Ki 3 Laanaten",
      problemText: "\"Kharidar\" banaya ja raha hai har Pakistani ko. Depression ka ilaj shopping — yeh system ne seekhaya. Paisa aata hai, usi waqt uda diya jata hai kyunki savari aur khushi ka taalluq banaya gaya hai.",
      problemUrdu: "آسائش، سہولت اور خریداری — یہ تین لعنتیں انسان کو صارف بنا رہی ہیں۔",
      solutionTitle: "Islamic 1/3 Rule + Financial Tracker",
      solutionText: "Al Nibras Finance mein har pocket money 3 hisson mein divide hoti hai: 1/3 apne liye, 1/3 dusron ke liye (sadqa), 1/3 kal ke liye (saving). Ye Islamic principle + behavior design = anti-consumption habit se bachpan mein.",
      solutionUrdu: "اسلامی ایک تہائی اصول — خریداری نہیں، بچت اور خدمت سکھائیں۔",
      tags: ["Finance App", "Islamic Finance"],
      impactQuote: "Core principle: \"Bachat aur sadqa — kharidar nahi banana\"",
    },
    {
      id: 5,
      hallucinationNumber: "Hallucination #5",
      problemTitle: "Individual Success Ka Khabt",
      problemText: "School ki diwar pe sirf \"First Position\" ka photo lagta hai. Collective growth, teamwork, aur community ka koi concept nahi. Har bacha akela jeet chahta hai — sab ke nuksan pe.",
      problemUrdu: "صرف فرسٹ آنے والے کی تصویر لگتی ہے — اجتماعی ترقی کا کوئی تصور نہیں۔",
      solutionTitle: "Community Badges + Student Entrepreneur",
      solutionText: "Al Nibras mein badges sirf individual nahi — \"Community Builder\" badge milta hai jab bacha dusron ko seekhata hai. NGO ka student entrepreneur model team-based hai. Ek student 5 ko sikhaye — sab ko points milein.",
      solutionUrdu: "ہمارے نظام میں دوسروں کو سکھانا سب سے بڑا انعام ہے۔",
      tags: ["NGO", "App"],
      impactQuote: "Model: \"Peer learning = extra points — community wins\"",
    },
    {
      id: 6,
      hallucinationNumber: "Hallucination #6",
      problemTitle: "Knowledge Ki Taqseem — Subjects Alag",
      problemText: "Math alag, Science alag, Social Studies alag. Creativity aur innovation tab hoti hai jab ye khane aapaas mein milein. Lekin school ne deewarein khadi kar rakhi hain.",
      problemUrdu: "علم کو خانوں میں بانٹنا تخلیقی صلاحیت کو ختم کر دیتا ہے۔",
      solutionTitle: "Interdisciplinary Curriculum",
      solutionText: "Al Nibras Financial Literacy Curriculum mein ek hi lesson mein math (paisa count karna) + Islamic studies (zakat) + environmental science (zameen ki hifazat) + entrepreneurship (idea banana) sab saath hote hain.",
      solutionUrdu: "ہمارا نصاب — ریاضی، اسلامیات، ماحولیات اور کاروبار ایک ساتھ۔",
      tags: ["Education", "App"],
      impactQuote: "Curriculum: \"4 subjects — 1 lesson — integrated learning\"",
    },
    {
      id: 7,
      hallucinationNumber: "Hallucination #7",
      problemTitle: "Takabbur — Yaqeen Ka Wham",
      problemText: "School mein \"confidence\" sikhaya jata hai — humility nahi. Jise \"complete mastery\" ka wahm ho jata hai woh dusron ke naqtah-e-nazar ko reject karne lagta hai. Ye ethical decline hai.",
      problemUrdu: "اعتماد سکھایا جاتا ہے — عاجزی نہیں۔ یہ اخلاقی زوال ہے۔",
      solutionTitle: "Humility-First Design — \"Main Ghalat...\"",
      solutionText: "Al Nibras AI Mentor kabhi final \"sahi jawab\" nahi deta. Har response mein \"aur kya soch sakte ho?\" hota hai. Islamic value of tawadu (humility) ko app design mein embed kiya gaya hai. Certificate bhi \"learner\" title deta hai, not \"expert.\"",
      solutionUrdu: "ہمارا AI کبھی حتمی جواب نہیں دیتا — تواضع سکھاتا ہے۔",
      tags: ["AI Mentor", "Islamic Values"],
      impactQuote: "Design principle: \"Curiosity over certainty — always\"",
    },
    {
      id: 8,
      hallucinationNumber: "Hallucination #8",
      problemTitle: "Social Mobility Ka Chakkar",
      problemText: "\"Upar jana hai\" ki daud mein insaan apne zameen, apne log, apne purane rishte chhor deta hai. Nai jagah ek \"ajnabi\" ban jata hai. Social capital khatam ho jata hai.",
      problemUrdu: "سماجی ترقی کی دوڑ میں انسان اپنے تعلقات کھو دیتا ہے۔",
      solutionTitle: "Community-Rooted Model",
      solutionText: "Al Nibras model apni zameen pe — Lahore se shuru. Students apne hi school mein entrepreneur banein. Apni hi mohalla mein stall lagayein. Community mein roots gehre hon — phir scale karein. Ukhad ke nahi, jur ke baro.",
      solutionUrdu: "اپنی زمین سے اٹھو — جڑیں مضبوط کرو — پھر بڑھو۔",
      tags: ["NGO", "Education"],
      impactQuote: "Model: \"Hyperlocal first — Lahore pilot — then Pakistan\"",
    },
    {
      id: 9,
      hallucinationNumber: "Hallucination #9",
      problemTitle: "Technology = Najaatdahinda",
      problemText: "\"AI sab kuch solve kar lega\" — ye sochna khud ek hallucination hai. Hamari baqaa zameen, pani, akhlaq, aur insaani taalluq mein hai — machines mein nahi.",
      problemUrdu: "ٹیکنالوجی نجات دہندہ نہیں — انسانیت اور زمین کی حفاظت ضروری ہے۔",
      solutionTitle: "AI as Tool — Not Replacement",
      solutionText: "Al Nibras Finance mein AI sirf ek tool hai jo human connection ko badhaata hai — replace nahi karta. Parent Coach AI tip deta hai lekin actual conversation parent aur bacha karta hai. Curiosity Engine AI sawaal deva hai — jawab bacha sochta hai.",
      solutionUrdu: "AI صرف ایک آلہ ہے — انسانی تعلق کو مضبوط کرتا ہے، بدلتا نہیں۔",
      tags: ["App Design", "AI Ethics"],
      impactQuote: "Philosophy: \"AI assists — humans decide — earth is stakeholder\"",
    },
    {
      id: 10,
      hallucinationNumber: "Hallucination #10",
      problemTitle: "Takhwa Se Maharat Milti Hai — Wahm",
      problemText: "System mein \"complete certainty\" ka inam diya jata hai. Jo nahi janta — kamzor hai. Jo sawaal kare — disturber hai. Ye model intellectual arrogance ki factory hai.",
      problemUrdu: "مکمل یقین کا وہم — عاجزی کا خاتمہ — تکبر کی فیکٹری۔",
      solutionTitle: "Workshop — \"Learner\" Certificate",
      solutionText: "Al Nibras NGO workshops mein koi \"expert\" nahi — sab \"seekhne wale\" hain. Certificate ka naam hai: \"Al Nibras Certified Learner\" — not \"Expert.\" Workshop facilitator khud kehta hai: \"mujhe bhi nahi pata — saath sochtay hain.\"",
      solutionUrdu: "ہمارِی سند کا نام ہے \"سیکھنے والا\" — ماہر نہیں۔",
      tags: ["NGO", "Certificate"],
      impactQuote: "Workshop culture: \"Everyone is a learner — facilitator included\"",
    },
    {
      id: 11,
      hallucinationNumber: "Hallucination #11",
      problemTitle: "Salary = Maqsad-e-Hayat",
      problemText: "System ne sikhaya: apni value apni takhwa se napo. Jo sirf takhwa ke liye kaam karta hai — woh is nizam ka mental ghulam ban jata hai. Service ka concept khatam ho gaya hai.",
      problemUrdu: "تنخواہ کو مقصد بنا لینا — خدمت کے جذبے کا خاتمہ ہے۔",
      solutionTitle: "Service-First — \"Waseela Hai\"",
      solutionText: "Al Nibras NGO ka core philosophy: Student entrepreneurs ko sikhao ke revenue ek tool hai — mission hai community ko financial literacy dena. Abbas Hussain quote app mein daily: \"Takhwa sirf khidmat ki jagah tak pohanchne ka zariya hai.\"",
      solutionUrdu: "تنخواہ صرف خدمت کی جگہ تک پہنچنے کا ذریعہ ہے — اصل مقصد خدمت ہے۔",
      tags: ["NGO", "Islamic Principles", "App"],
      impactQuote: "Mission: \"Service over salary — always\"",
    }
];

const enKeys = {};
const urKeys = {};

data.forEach((item) => {
  enKeys['m' + item.id] = {
    hallucinationNumber: item.hallucinationNumber,
    problemTitle: item.problemTitle,
    problemText: item.problemText,
    problemUrdu: item.problemUrdu, 
    solutionTitle: item.solutionTitle,
    solutionText: item.solutionText,
    solutionUrdu: item.solutionUrdu, 
    tags: item.tags,
    impactQuote: item.impactQuote,
  };
  
  urKeys['m' + item.id] = {
    hallucinationNumber: item.hallucinationNumber.replace('Hallucination', 'غلط فہمی'),
    problemTitle: item.problemTitle,
    problemText: item.problemText,
    problemUrdu: item.problemUrdu,
    solutionTitle: item.solutionTitle,
    solutionText: item.solutionText,
    solutionUrdu: item.solutionUrdu,
    tags: item.tags,
    impactQuote: item.impactQuote,
  };
});

const enDictPath = './dictionaries/en.json';
const urDictPath = './dictionaries/ur.json';

let enDict = JSON.parse(fs.readFileSync(enDictPath, 'utf8'));
let urDict = JSON.parse(fs.readFileSync(urDictPath, 'utf8'));

enDict.about.manifesto.items = enKeys;
urDict.about.manifesto.items = urKeys;

fs.writeFileSync(enDictPath, JSON.stringify(enDict, null, 2), 'utf8');
fs.writeFileSync(urDictPath, JSON.stringify(urDict, null, 2), 'utf8');

console.log('Dictionaries updated successfully.');
