const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; // 👈 مهم عشان Railway يشتغل

app.use(cors());
app.use(bodyParser.json());

let hrData = [
  { id: "HR_1", name: "Mayar Emam", email: "emam1@gmail.com", team: "HR" },
  {
    id: "HR_2",
    name: "Mostafa Mohamed",
    email: "mostafamhmed20@gmail.com",
    team: "HR",
  },
];

app.get("/hr", (req, res) => {
  res.json(hrData);
});

app.listen(PORT, () => {
  console.log(`API running on PORT ${PORT}`);
});
