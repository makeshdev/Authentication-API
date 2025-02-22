import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

//config the env file
dotenv.config();

//connectDB
connectDB();

//data understanding middleware
app.use(express.json());

//middleware
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Every thing Okey!");
});

const PORT = 5000 || process.env.MONGO_URI;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
