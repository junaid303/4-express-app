import express from "express";

const router = express.Router();


router.get("/", (req,res)=>{
    res.send("<h1> This is Restaurant /home </h1>");
});

router.get("/about", (req,res)=>{
    res.send("<h1> This is Restaurant /about </h1>");
});

router.get("/contact", (req,res)=>{
    res.send("<h1> This is Restaurant /contact </h1>");
});


export default router;