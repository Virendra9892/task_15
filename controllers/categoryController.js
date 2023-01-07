const redisClient = require("../utils/redis") 

exports.setCategory = async(req,res,next)=>{
    try{
      const data =   await redisClient.set("email",'v@htfgfgjfhgf@gmail.com');
       res.send({message:"cetegory created sucessfully",result:data})
    }
    catch(error){
        next(error)
    }
}

exports.getCategory = async(req,res,next)=>{
    try{
     const data=await redisClient.get('email')
     res.send({message:"cetegory found sucessfully",result:data})
    }
    catch(error){
        next(error)
    }
}

exports.deleteCategory = async(req,res,next)=>{
    try{
        await redisClient.del('email')
        res.send({message:"category deleted sucessfully"})
    }
    catch(error){
        next(error)
    }
}
