export class ResponseJsonHandler{
    static Success( res , message = "success",statusCode = 201, data = null ){
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        })
    }   

    static Error(res, message = "Something went wrong", statusCode = 401, error = null){
        return res.status(statusCode).json({
            success: false,
            message,
            error
        })
    }
}