import { authService } from "../services/authService.js";
import { ResponseJsonHandler } from "../helpers/responseJsonHandler.js";

export class authController{
  static async createUser(req, res, next) {
    try{    
      const resultMsg = await authService.createUser();
      ResponseJsonHandler.Success(res,resultMsg);
    }
    catch(error){
      ResponseJsonHandler.Error(res,error.message);
    }
  }
}  