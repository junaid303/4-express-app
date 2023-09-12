import express from "express";

const router = express.Router();


router.get("/", (req,res)=>{
    res.send("<h1> This is Delivery Agent /home </h1>");
});

router.get("/about", (req,res)=>{
    res.send("<h1> This is Delivery Agent /about </h1>");
});

router.get("/contact", (req,res)=>{
    res.send("<h1> This is Delivery Agent /contact </h1>");
});


export default router;