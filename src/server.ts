import dotenv from "dotenv";
dotenv.config();
import app from "./app";

// Calling packages
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Connected to the Database successfully");
    const PORT = process.env.PORT ?? 3003;

    app.listen(PORT, () => {
      console.log(`Server is successfully running on port ${PORT}🎉👏`);
    });
  })
  .catch((error) => {
    console.log("Erorr in connecting to the Database 🛑 ", error);
  });
