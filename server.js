const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

// custom routes
app.use("/blog", require("./routes/book-routes"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening");
});
