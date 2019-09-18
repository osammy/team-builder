const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const members = [
  {
    id: 0,
    name: "Durotolu",
    email: "durotolun@gmail.com",
    role: "Software Developer"
  },
  {
    id: 1,
    name: "Samuel",
    email: "osamaimafidon@gmail.com",
    role: "Product Manager"
  },
  {
    id: 2,
    name: "Megan Ennis",
    email: "megan_ennis@gmail.com",
    role: "Software Engineer"
  },
  {
    id: 3,
    name: "Lisa Wilton",
    email: "lisa_wilton@gmail.com",
    role: "Software Engineering"
  },
  {
    id: 4,
    name: "Ayomide Jones",
    email: "ayomide_jones@gmail.com",
    role: "Software Engineering"
  },
  {
    id: 5,
    name: "Justinas Vebra",
    email: "justinas_vebra@yahoo.com",
    role: "Team Lead"
  },
  {
    id: 6,
    name: "Tolu Atolagbe",
    email: "tolu_atolagbe@gmail.com",
    role: "Software Engineering"
  },
  {
    id: 7,
    name: "Max Beard",
    email: "max_beard@gmail.com",
    role: "Software Engineering"
  }
];

app.get("/api/members", (req, res) => {
  res.send(members);
});

app.get("/api/members/:id", (req, res) => {
  const member = members.filter(
    member => memeber.id.toString() === req.params.id
  )[0];
  res.status(200).json(member);
});

app.post("/api/members", (req, res) => {
  if (req.body.id !== undefined) members.push(req.body);
  res.status(201).json(members);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
