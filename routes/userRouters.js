import express from "express";

const router = express.Router();

import { userHomeController, userAboutController, userContactController } from "../controllers/userControllers.js";

router.get("/", userHomeController);

router.get("/about", userAboutController);

router.get("/contact", userContactController);


export default router;