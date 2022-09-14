const carouselInner = document.querySelector(".carousel-inner");
const btnILY = document.querySelector(".btn-dark");

const ILY100 = [
  "Ek het jou lief",
  "Te Dua",
  "أحبك",
  "քեզ սիրում եմ",
  "আমিতোমায়ভালোবাসি",
  "Я люблю цябе",
  "Обичам те",
  "Soro lahn nhee ah",
  "T'estimo",
  "Tsi ge yu i",
  "Ne mohotatse",
  "我爱你",
  "U kamakutu nu",
  "Ti tengu cara",
  "Kisakihitin",
  "Mi aime jou",
  "Volim te",
  "Miluji tě",
  "Jeg Elsker Dig",
  "Ik hou van jou",
  "Mi amas vin",
  "Ma armastan sind",
  "Afgreki'",
  "Eg elski teg",
  "Doset daram",
  "Mahal kita",
  "Mina rakastan sinua",
  "Je t'aime",
  "Ik hald fan dy",
  "მიყვარხარ",
  "Ich liebe dich",
  "Σ 'αγαπώ",
  "હુંતમનેપ્રેમ",
  "Palangga ko ikaw",
  "Aloha Au Ia`oe",
  "אני אוהב אותך",
  "Guina higugma ko ikaw",
  "मैंतुमसेप्यारकरताहूँ",
  "Kuv hlub koj",
  "Nu' umi unangwa'ta",
  "Szeretlek",
  "Eg elska tig Ég elska þig",
  "Palangga ko ikaw",
  "Negligevapse",
  "aim i' ngra leat",
  "Ti amo",
  "私はあなたを愛して",
  "ನಾನುನಿನ್ನಪ್ರೀತಿಸುತ್ತೇನೆ",
  "Kaluguran daka",
  "Nakupenda",
  "Tu magel moga cho",
  "당신을사랑",
  "ຂ້ອຍຮັກເຈົ້າ",
  "Te amo",
  "Es tevi miilu",
  "Bahibak",
  "Tave myliu",
  "Ech hun dech gaer",
  "Te Sakam Te сакам",
  "Saya cintakan mu",
  "Njan Ninne Premikunnu",
  "Inhobbok",
  "Me tula prem karto",
  "Kanbhik",
  "Ana moajaba bik",
  "Ni mits neki",
  "Ayor anosh'ni",
  "Jeg elsker deg",
  "من شما را دوست دارم",
  "Kocham Ciebie",
  "Eu te amo",
  "Te iubesc",
  "Ya tebya liubliu  Я люблю тебя",
  "Волим те",
  "Ke a go rata",
  "Maa tokhe pyar kendo ahyan",
  "Techihhila",
  "Lu`bim ta",
  "Ljubim te",
  "Te quiero",
  "Ninapenda wewe",
  "Jag alskar dig",
  "Ich lieb Di",
  "Mi lobi joe",
  "Mahal kita",
  "Ua Here Vau Ia Oe",
  "நான்உன்னைகாதலிக்கிறேன்",
  "నేనునిన్నుప్రేమిస్తున్నాను",
  "ผมรักคุณ",
  "Ha eh bak",
  "Seni Seviyorum",
  "Я люблю тебе",
  "میں تم سے پیار کرتا ہوں",
  "Tôi yêu các bạn",
  "'Rwy'n dy garu di",
  "איך ליבע איר",
  "Mo ni fe",
  "Ezhele hezdege",
  "Aku Mencintaimu Vivian",
];

for (let index = 0; index < ILY100.length; index++) {
  const carouselItem = document.createElement("div");
  const header1 = document.createElement("h1");
  let content = document.createTextNode(ILY100[index]);

  carouselItem.classList.add("carousel-item");
  carouselItem.setAttribute("data-bs-interval", 2000);

  // append child
  header1.appendChild(content);
  carouselItem.appendChild(header1);
  carouselInner.appendChild(carouselItem);

  if (header1.textContent == "Aku Mencintaimu Vivian") {
    header1.style.color = "#f65a83";
  }
}

btnILY.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      new Notification("I Love You Far More Than 3000", {
        body: "Aku Mencintaimu Vivian",
      });
    }
  });
});
