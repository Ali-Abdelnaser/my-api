const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// تحميل البيانات من ملف JSON
let Data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// ✅ Save Data to File
function saveDataToFile() {
  fs.writeFileSync('data.json', JSON.stringify(Data, null, 2)); // حفظ البيانات المعدلة في الملف
}

// ✅ GET - كل الناس
app.get("/people", (req, res) => {
  res.json(Data);
});

// ✅ GET - شخص واحد بالـ ID
app.get("/people/:id", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Person not found" });
  res.json(person);
});

// ✅ POST - إضافة شخص جديد
app.post("/people", (req, res) => {
  const newPerson = { ...req.body, attendance: false }; // عدم حضور الشخص عند إضافته
  Data.push(newPerson);
  saveDataToFile(); // حفظ البيانات بعد إضافة شخص جديد
  res.status(201).json(newPerson);
});

// ✅ POST - Confirm Attendance
app.post("/people/:id/confirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Person not found" });

  person.attendance = true; // تأكيد الحضور
  saveDataToFile(); // حفظ البيانات بعد التأكيد
  res.status(200).json({ message: "Attendance Confirmed", person });
});

// ✅ POST - Unconfirm Attendance
app.post("/people/:id/unconfirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Person not found" });

  person.attendance = false; // إلغاء الحضور
  saveDataToFile(); // حفظ البيانات بعد إلغاء الحضور
  res.status(200).json({ message: "Attendance Unconfirmed", person });
});

app.get("/people/attended", (req, res) => {
  const attendedPeople = Data.filter((item) => item.attendance === true);
  if (attendedPeople.length > 0) {
    res.status(404).json(attendedPeople); 
  } else {
    res.status(200).json({ message: "No attended participants found." }); 
  }
});



app.delete("/people/:id", (req, res) => {
  const personIndex = Data.findIndex((item) => item.id === req.params.id);
  if (personIndex === -1)
    return res.status(404).json({ message: "Person not found" });

  Data.splice(personIndex, 1); // إزالة الشخص من البيانات
  saveDataToFile(); // حفظ البيانات بعد الحذف
  res.status(200).json({ message: "Deleted successfully" });
});

// ✅ GET - Search by name
app.get("/people/search", (req, res) => {
  const query = req.query.name?.toLowerCase() || "";
  const results = Data.filter(
    (item) => item.name.toLowerCase().includes(query) // البحث عن الأسماء
  );
  res.json(results);
});

// ✅ Root API
app.get("/", (req, res) => {
  res.send("API is running. Use /people to get data.");
});

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
