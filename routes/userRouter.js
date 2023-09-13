import express from "express";

const router = express.Router();

router.get("/home",(req, res)=>{
    res.send("<h1> This User is /home</h1>");
});

router.get("/admin",(req, res)=>{
    res.send("<h1> This User is /admin</h1>");
});

router.get("/contact",(req, res)=>{
    res.send("<h1> This User is /contact</h1>");
});

export default router;