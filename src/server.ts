import dotenv from "dotenv";
dotenv.config();

// Calling packages
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Connected to the Database successfully");
    const PORT = process.env.PORT;
  })
  .catch((error) => {
    console.log("Erorr in connecting to the Database 🛑 ", error);
  });
