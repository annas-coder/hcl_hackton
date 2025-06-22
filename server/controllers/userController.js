import { userService } from "../services/userService.js";

export class userController{
  static async getAllUser(req, res, next) {
    try{    
      const resultData = await userService.getAllUser(req,next);
       res.status(201).send({
        success:true,
        resultData
      })
    }
    catch(error){
        res.status(201).send({
        success:false,
        Message:"something is failed to executed" + error
      })
    } 
  }

  static async createUser(req,res,next){
     try{    
      const userDetail = await userService.createUser(req,next);
      res.status(201).send({
        success:true,
        ...userDetail
      })
    }
    catch(error){
      res.status(201).send({
        success:false,
        Message:"something is failed to executed" + error
      })
    } 
  }
}  