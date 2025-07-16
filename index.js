const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let Data = [
  {
    id: "HR_1",
    name: "Mayar Emam",
    email: "emam1@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_2",
    name: "Mostafa Mohamed",
    email: "mostafamhmed20@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_3",
    name: "Ahmed Mohamed Saad",
    email: "ahmed.saad.eladl1@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_4",
    name: "Salma Medhat",
    email: "salmamedhat1010@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_5",
    name: "Doaa Mohamed",
    email: "doaaelshazly304@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_6",
    name: "Yassmena Abdullah",
    email: "yassmenabdallah76@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_7",
    name: "Shahd Hesham",
    email: "Shahdawd35@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_8",
    name: "Basma Aly Alkomy",
    email: "Basmaalialkomy@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_9",
    name: "Mahmoud hatem",
    email: "mahmoudhatemc@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_10",
    name: "Ali abdelnaser",
    email: "alinaserhema60@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_11",
    name: "ziad Alboghdadi",
    email: "mziad9832@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_12",
    name: "mohamed sakr",
    email: "mo.sakr1400@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_13",
    name: "shahd elhosiny",
    email: "shahdelhosiny21@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_14",
    name: "yasser moawad",
    email: "yassermoawad2@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_15",
    name: "hoda abdo",
    email: "hodaabdo01204@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_16",
    name: "mohamed ismail",
    email: "mohamedismailmohamed356@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_17",
    name: "Omnia Abdelazim",
    email: "omniaabdo2040@gmail.com",
    team: "HR",
    attendance: false,
  },
  {
    id: "HR_18",
    name: "Naira Farhat",
    email: "nairafarhat7@gmail.com",
    team: "HR",
    attendance: false,
  },

  // Assistant Team
  {
    id: "AS_1",
    name: "Abdullrahman Ayman",
    email: "abdullr7m3n3ym3n@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_2",
    name: "Basmala Ahmed Atia",
    email: "cocoattia24@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_3",
    name: "Bahaa Wael",
    email: "pepowael2006m@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_4",
    name: "Shahd Elsayed",
    email: "elsyedshahd534@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_5",
    name: "KhaledRezk Shehata",
    email: "krzq335@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_6",
    name: "Hamza Yehia Sherif",
    email: "mehamza805@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_7",
    name: "baraa mabrok",
    email: "baraa0email@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_8",
    name: "Ahmed Mohamd Elnahas",
    email: "nhassahmed1@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_9",
    name: "khalid hany",
    email: "khalid.hany13@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_10",
    name: "mohamed aboelmaged",
    email: "mohamedabelmaged0@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_11",
    name: "norhan khalid",
    email: "nkankakhaled@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_12",
    name: "doha hussien",
    email: "dohahussienborhamshadi@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_13",
    name: "shahd tarek",
    email: "shahddraz198@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_14",
    name: "aida mohamed",
    email: "aida1214789@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_15",
    name: "nagham ahmed",
    email: "nagham.ahmed909@gmail.com",
    team: "Assistant",
    attendance: false,
  },
  {
    id: "AS_16",
    name: "OMAR AHMED",
    email: "abdelazimomar2@gmail.com",
    team: "Assistant",
    attendance: false,
  },

  // Logistics Team
  {
    id: "LO_1",
    name: "Abdullah mostafa",
    email: "abdallahmostafa62005@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_2",
    name: "Asmaa Barghout",
    email: "asmaabarghout019@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_3",
    name: "Fatma Abdelfatah",
    email: "fabdelfatah69@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_4",
    name: "Abdel Gawad Mohamed",
    email: "gawadelkholy.2005@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_5",
    name: "mehad magdy mohamed",
    email: "mimo.34369@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_6",
    name: "Ahmed Hesham",
    email: "ah1259918@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_7",
    name: "Sara Osama",
    email: "so4992800@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_8",
    name: "Asmaa Ahmed",
    email: "asma2a7md2004@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_9",
    name: "Mayar Gamal Kazem",
    email: "kassemmayar15@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_10",
    name: "Malak Nagah",
    email: "malknagah492@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_11",
    name: "Yousef Mohamed Fathy",
    email: "ym877250@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_12",
    name: "Mohamed Ehab Tolba",
    email: "mohamedehabtolba2006@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_13",
    name: "AHMED EHAB",
    email: "ae884904@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_14",
    name: "Dina Kamal",
    email: "dinaaakamelll@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_15",
    name: "hager mohsen",
    email: "hagar.mn72@gmail.com",
    team: "Logistics",
    attendance: false,
  },
  {
    id: "LO_16",
    name: "hana ayman",
    email: "ha814329@gmail.com",
    team: "Logistics",
    attendance: false,
  },

  // Business Team
  {
    id: "BS_1",
    name: "Fares",
    email: "farestarek566@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_2",
    name: "Ahmed Elhorany",
    email: "elhorany23@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_3",
    name: "Mahmoud Shawky",
    email: "mashawkii11@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_4",
    name: "Ali Nasr",
    email: "alinasreladl5@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_5",
    name: "SALAH",
    email: "salahayman.a2005@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_6",
    name: "Omnia Emad",
    email: "amiinaemaa22@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_7",
    name: "Ahmed shaheen",
    email: "ahmeshaheen573@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_8",
    name: "Ahmed Mohamed Saber",
    email: "asd425882@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_9",
    name: "yousef eleraky",
    email: "gooeleraky8@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_10",
    name: "Moaz Abdo Zaghloul",
    email: "moazzaghlol92@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_11",
    name: "AYA SALAH",
    email: "ayasalahmohammed08@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_12",
    name: "Mohamed Elsherbiny",
    email: "melsherbiny912@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_13",
    name: "Ahmed Mohamed Salah",
    email: "erewrrewrewr11@gmail.com",
    team: "Business",
    attendance: false,
  },
  {
    id: "BS_14",
    name: "Moaz mohamed Elmaasarawy",
    email: "moathmohamed15@gmail.com",
    team: "Business",
    attendance: false,
  },

  // Media Team
  {
    id: "MD_1",
    name: "Arwa Hany",
    email: "arwahany766@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_2",
    name: "Ganna Mamdouh",
    email: "ge2019916@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_3",
    name: "Fatma Mostafa",
    email: "fatmamo2951@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_4",
    name: "Hanya elmasry",
    email: "hanyaelmasry18@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_5",
    name: "menaa waleed",
    email: "mennawaleed702@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_6",
    name: "mohamed elmansy",
    email: "moelmansy2006@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_7",
    name: "mohamed saleh",
    email: "m1o2h3a4m5e6d7500@gmail.com",
    team: "Media",
    attendance: false,
  },
  {
    id: "MD_8",
    name: "fatma waled",
    email: "fatmawaleed245@gmail.com",
    team: "Media",
    attendance: false,
  },
];

// ✅ GET كل الناس
app.get("/people", (req, res) => {
  res.json(Data);
});

// ✅ GET - شخص واحد بالـ ID
app.get("/people/:id", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  res.json(person);
});

// ✅ GET - Search بالأسم
app.get("/people/search", (req, res) => {
  const query = req.query.name?.toLowerCase() || "";
  const results = Data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  res.json(results);
});

// ✅ POST - إضافة شخص جديد
app.post("/people", (req, res) => {
  const newPerson = { ...req.body, attendance: false };
  Data.push(newPerson);
  res.status(201).json(newPerson);
});

// ✅ POST - Confirm Attendance
app.post("/people/:id/confirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  person.attendance = true;
  res.status(200).json({ message: "Attendance Confirmed", person });
});
// ✅ GET - الناس اللي حضرت (التأكيد)
app.get("/people/attendedPeople", (req, res) => {
  const attendedPeople = Data.filter((item) => item.attendance === true);

  // إرجاع الاسم، البريد الإلكتروني، والفريق فقط
  const simplified = attendedPeople.map(person => ({
    name: person.name,
    email: person.email,
    team: person.team
  }));

  res.json(simplified);
});

// ✅ POST - Unconfirm Attendance
app.post("/people/:id/unconfirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  person.attendance = false;
  res.status(200).json({ message: "Attendance Unconfirmed", person });
});

// ✅ GET - الناس اللي حضرت
app.get("/people/attended", (req, res) => {
  const attendedPeople = Data.filter((item) => item.attendance === true);
  res.json(attendedPeople);
});

// ✅ DELETE - حذف شخص من الداتا
app.delete("/people/:id", (req, res) => {
  Data = Data.filter((item) => item.id !== req.params.id);
  res.status(200).send({ message: "Deleted" });
});

// ✅ Root API
app.get("/", (req, res) => {
  res.send("API is running. Use /people to get data.");
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});