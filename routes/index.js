const express=require("express")
router=express.Router()
passport=require("passport")
User=require("../models/user")





router.get('/',(req,res)=>{
    res.render("startup",{user:req.user})
})



router.get("/signupForm",(req,res)=>{
    res.render("signup")
})

router.post("/signup",(req,res)=>{
    User.register(new User({
        username:req.body.username,
        emailid:req.body.emailid
    }),req.body.password,(err,user)=>{
        if(err){
            console.log(err)
        }
        passport.authenticate("local")(req,res,()=>{
            console.log(user)
            res.redirect("/home")
        })
    })
})

router.get("/loginForm",(req,res)=>{
    res.render("login")
})


router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        successRedirect:"/home",
        
        failureRedirect:"/login"
    })(req,res)
})

router.get("/logout",(req,res)=>{
    req.logout()
    res.redirect("/loginForm")
})


function checkLogin(req,res,next){
    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect("/loginForm")
    }
}



module.exports=router





