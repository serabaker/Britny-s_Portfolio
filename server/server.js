const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PROT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + " Read More...";
};

app.get("/project1", (req, res) => {
  res.json({
    projects: [
      truncateString(
        "A community sponsorship application aimed at fighting the homeless crisis by outsourcing sponsors out in the local community to help homeless veterans in-process with the VA. This app's primary goal is to in-process homeless veterans through the VA so they can get adequate health care, housing, and employment opportunities. However, the main struggle is that the Veteran doesn't have access to technologies or the basic tools to in-process themselves. That's where this application comes in for the rescue. This application targets a Sponsor as the main user and they can sponsor up to 4 veterans at a time, hence the name 'Connect 4 Vets'.",
        131
      ),
    ],
  });
});

app.get("/blog", (req, res) => {
  res.json({
    blogTitles: ["How to Install Python Pandas in VSCode"],
  });
});

//  need to figure out how to add entries w/o taking up so much space
app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`);
});
