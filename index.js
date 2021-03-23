const express = require("express");

const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello Express World");
// });

app.get("/", (req, res) => {
  res.send("I am learning Node Express...!!!");
});
app.listen(3000, () => console.log("Listening to port 3000"));
