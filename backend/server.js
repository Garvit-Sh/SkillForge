const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.route");
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
