import { userModal } from "../models/user.js";

export class userService{
    static async getAllUser(){
        try{
          const userDetails =  await userModal.find();
          return userDetails;
        }
        catch(error){
            return error;
        }
    }

    static async createUser(req,next){
      try{
        const { name , role , age } = req.body;

        const isExisting = await userModal.findOne({name})

        if(isExisting){
            return ({ Message : "Already register User" })
        }
            
        const newUser  = new userModal({
            name,
            role,
            age
        })

        await newUser.save();
        return ({Message:"New user saved successfully"})
      }
      catch(error){
        return error
      }
    }
}