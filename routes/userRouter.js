import express from "express";
import { userAboutController, userContactController, userHomeController } from "../controllers/userControllers";

const router = express.Router();


router.get("/",userHomeController);

router.get("/about",userAboutController);

router.get("/contact",userContactController);

export default router;