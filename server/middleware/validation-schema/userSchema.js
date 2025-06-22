import { z } from "zod";

export const userDetailSchema = z.object({
    body : z.object({
        name : z.string({required_error:" Full name is required "}),
        age : z.string({required_error:" Age is required "}),
        role : z.string({required_error:" Role is required "}),
    })
})