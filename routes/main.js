const express=require("express")
router=express.Router()
mongoose=require('mongoose')
Company=require("../models/company")

router.get("/home",(req,res)=>{
    res.render("home",{user:req.user})
})

router.get("/jobs",(req,res)=>{
    res.render("jobs")
})

router.get("/jobs/:companyName",(req,res)=>{
    res.render(req.params.companyName)
})

router.get("/me",(req,res)=>{
    Company.find({"user._id":req.user._id}).then((company)=>{
        res.render("profile",{user:req.user,company:company})
    })
    
})

router.get("/applyjob/:companyName",(req,res)=>{
    Company.findOne({companyname:req.params.companyName}).then((applied)=>{
        if(applied){
          return   res.redirect("/jobs/"+req.params.companyName)
        }
        let company=new Company({
            _id:mongoose.Types.ObjectId(),
            companyname:req.params.companyName,
            user:{_id:req.user._id}
        })
        company.save().then((company)=>{
            console.log(company)
            res.redirect("/me")
            
        })
    })
  
    
})

router.get("/industry",(req,res)=>{
    res.render("industry")
})

router.get("/location",(req,res)=>{
    res.render("location")
})

// industry

router.get("/Design-Internships",(req,res)=>{
    res.render("./view-industry/Design-Internships")
})

router.get("/Engineering-Internships",(req,res)=>{
    res.render("./view-industry/Engineering-Internships")
})

router.get("/IT-Internships",(req,res)=>{
    res.render("./view-industry/IT-Internships")
})

router.get("/Marketing-Internships",(req,res)=>{
    res.render("./view-industry/Marketing-Internships")
})

// location

router.get("/mumbai",(req,res)=>{
    res.render("./view-location/mumbai")
})

router.get("/delhi",(req,res)=>{
    res.render("./view-location/delhi")
})

router.get("/bangalore",(req,res)=>{
    res.render("./view-location/bangalore")
})

router.get("/hyderabad",(req,res)=>{
    res.render("./view-location/hyderabad")
})

router.get("/kolkata",(req,res)=>{
    res.render("./view-location/kolkata")
})


module.exports=router