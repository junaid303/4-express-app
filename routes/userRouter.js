import express from "express";

const router = express.Router();

router.get("/home", (req,res)=>{
    res.send("<h1> This Users is /home");
});

router.get("/about", (req,res)=>{
    res.send("<h1> This Users is /about");
});

router.get("/contact", (req,res)=>{
    res.send("<h1> This Users is /contact");
});

export default router;