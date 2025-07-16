const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let Data = [
  {
    id: "HR_1",
    name: "Mayar Emam",
    email: "emam1@gmail.com",
    team: "HR",
    attended: false,
  },
  {
    id: "HR_2",
    name: "Mostafa Mohamed",
    email: "mostafamhmed20@gmail.com",
    team: "HR",
    attended: false,
  },
  {
    id: "HR_3",
    name: "Ahmed Mohamed Saad",
    email: "ahmed.saad.eladl1@gmail.com",
    team: "HR",
    attended: false,
  },
  // كمل باقي الناس بنفس الشكل
];

// ✅ GET كل الناس
app.get("/hr", (req, res) => {
  res.json(Data);
});

// ✅ GET شخص واحد بالـ ID
app.get("/hr/:id", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  res.json(person);
});

// ✅ SEARCH بالأسم
app.get("/hr/search", (req, res) => {
  const query = req.query.name?.toLowerCase() || "";
  const results = Data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  res.json(results);
});

// ✅ POST - إضافة عضو جديد
app.post("/hr", (req, res) => {
  const newPerson = { ...req.body, attended: false };
  Data.push(newPerson);
  res.status(201).json(newPerson);
});

// ✅ POST - Confirm الحضور
app.post("/hr/:id/confirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  person.attended = true;
  res.status(200).json({ message: "Attendance Confirmed", person });
});

// ✅ GET الناس اللي حضرت بس
app.get("/hr/attended", (req, res) => {
  const attendedPeople = Data.filter((item) => item.attended === true);
  res.json(attendedPeople);
});

// ✅ DELETE شخص معين بالـ ID
app.delete("/hr/:id", (req, res) => {
  Data = Data.filter((item) => item.id !== req.params.id);
  res.status(200).send({ message: "Deleted" });
});

// ✅ Route رئيسي لو فتحت /
app.get("/", (req, res) => {
  res.send("API is running. Use /hr to get data.");
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
