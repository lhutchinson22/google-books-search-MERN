const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// custom routes
app.use("/api/books", require("./routes/book-routes"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
