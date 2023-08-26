let mongoose=require("mongoose")


let companySchema=new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  companyname:String,
  user:{
      _id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
      }
  }
    
})

module.exports=mongoose.model("Company",companySchema)