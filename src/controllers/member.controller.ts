import { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (error) {
    console.log("Error in Home page: ", error);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (error) {
    console.log("Error in Login Page: ", error);
  }
};
memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (error) {
    console.log("Error in Signup Page: ", error);
  }
};

export default memberController;
