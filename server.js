const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
const connectDB = require("./connect/dbonnect");

connectDB();
// Middleware
app.use(cors());
app.use(express.json());
colors.enable();

// Routes
app.use("/api/v1/user", require("./routes/user/user.route"));
app.use("/api/v1/folders", require("./routes/folders/folder.route"));

// Listen Application
mongoose.connection.once("open", () => {
  console.log(
    colors.red.underline(`📗Connected`),
    colors.yellow.underline(" to Server!")
  );
  app.listen(port, () => console.log(`Server running in port no : ${port}`));
});
mongoose.connection.on("error", (err) => {
  console.log(colors.red("📕", err));
});
