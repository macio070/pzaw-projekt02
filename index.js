import express from "express";
import dictionary, { getSubjects, getSubjectData } from "./models/dictionary.js";
import fs from "node:fs";

const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded());


const html = fs.readFileSync("public/index.html");
app.get("/", (req, res) => {
  res.end(html);
});

app.get("/dictionary", (req, res) => {
  res.render("dictionary", {
    title: "Słownik polsko-angielski",
    subjects: getSubjects(),
  });
});

app.get("/dictionary/:subject", (req, res) => {
  const subject = getSubjectData(req.params.subject);
  if (subject != null) {
    res.render("subject", {
      title: subject.name,
      subject,
    });
  } else {
    res.sendStatus(404);
  }
});

app.post("/dictionary/:subject/add", (req, res) => {
  const subject = getSubjectData(req.params.subject);
  if (subject != null) {
    const { english, polish } = req.body;
     
    if (english && polish) {
      dictionary[subject.id].entry.push({ english: english, polish: polish });
      res.redirect(`/dictionary/${subject.id}`);
    } else {
      res.status(400).send("Angielski i Polski jest wymagany.");
    }
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
