import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./models/user.model.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
