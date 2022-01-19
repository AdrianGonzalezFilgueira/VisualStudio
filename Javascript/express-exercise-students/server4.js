const express = require("express");
const { palindrome } = require("./utils/palindrome");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/check/:algo", (req, res) => {
  let msg = "NO es un palíndromo";

  if (palindrome(req.params.algo)) {
    msg = "Es un palíndromo";
  }

  res.status(200).send(msg);
});

app.use(function (req, res) {
  res.status(404).send("No he encontrado lo que buscabas...");
});

app.listen(PORT);