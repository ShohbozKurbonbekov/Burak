import express from "express";
import path from "path";
import router from "./router";

// PATHS
const publicPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "views");

// 1 - ENTRANCE ↓
const app = express();
app.use(express.static(publicPath));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// 2 - SESSION ↓

// 3 - VIEWS ↓
app.set("views", viewsPath);
app.set("view engine", "ejs");

// 4 - ROUTERS ↓
app.use("/", router);

export default app;
