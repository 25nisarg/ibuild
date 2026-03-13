'use server'
import { auth } from "@clerk/nextjs/server"
import { success } from "zod"

type FormState = {
    success: boolean,
    error?: Record<string, string[]>,
    message: string,
}
export const addProductAction = async (prevState: FormState, formData: FormData) => {
    console.log(formData)

    try{
        const {userId} = await auth();
        if(!userId){
            return {
                success: false,
                message:"Sign in to submit!"
            }
        }
        const rawFormData = Object.fromEntries(formData.entries());
        //validate data
        
    }
    catch(e){
        return {
            success: false,
            error: e,
            message: "Product Didnt added Successfully",
        }
    }
}