const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs"); // لتحميل مكتبة قراءة وكتابة الملفات

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// قراءة البيانات من ملف JSON
let Data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// ✅ دالة لحفظ البيانات في الملف
function saveDataToFile() {
  fs.writeFileSync('data.json', JSON.stringify(Data, null, 2)); // حفظ البيانات المعدلة في الملف
}

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
  const newPerson = { ...req.body, attendance: false }; // التأكد من أن الحضور يكون false عند الإضافة
  Data.push(newPerson);
  saveDataToFile(); // حفظ البيانات بعد الإضافة
  res.status(201).json(newPerson);
});

// ✅ POST - Confirm Attendance
app.post("/people/:id/confirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  person.attendance = true;
  saveDataToFile(); // حفظ البيانات بعد تأكيد الحضور
  res.status(200).json({ message: "Attendance Confirmed", person });
});

// ✅ POST - Unconfirm Attendance
app.post("/people/:id/unconfirm", (req, res) => {
  const person = Data.find((item) => item.id === req.params.id);
  if (!person) return res.status(404).json({ message: "Not Found" });
  person.attendance = false;
  saveDataToFile(); // حفظ البيانات بعد إلغاء الحضور
  res.status(200).json({ message: "Attendance Unconfirmed", person });
});

// ✅ GET - الناس اللي حضرت
app.get("/people/attended", (req, res) => {
  // التأكد من أن الـ attendance بتساوي true فقط
  const attendedPeople = Data.filter((item) => item.attendance === true); 

  if (attendedPeople.length > 0) {
    res.status(200).json(attendedPeople); // إرجاع البيانات اللي حضرت
  } else {
    res.status(404).json({ message: "No attended participants found." }); // لو مفيش حد حضر
  }
});


// ✅ DELETE - حذف شخص من الداتا
app.delete("/people/:id", (req, res) => {
  Data = Data.filter((item) => item.id !== req.params.id);
  saveDataToFile(); // حفظ البيانات بعد الحذف
  res.status(200).send({ message: "Deleted" });
});

// ✅ Root API
app.get("/", (req, res) => {
  res.send("API is running. Use /people to get data.");
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
