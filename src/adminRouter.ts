import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const adminRouter = express.Router();

adminRouter.get("/", restaurantController.goHome);

adminRouter.get("/login", restaurantController.getLogin);

adminRouter.get("/signup", restaurantController.getSignup);

export default adminRouter;
