// api/index.js
let savedText = "Hello World";

export default function handler(req, res) {
  if (req.method === 'POST') {
    // This is where your Typewriter Menu sends data
    savedText = req.body.text;
    return res.status(200).send("Text Updated");
  } else {
    // This is where Build Logic "fetches" the data
    return res.status(200).send(savedText);
  }
}
