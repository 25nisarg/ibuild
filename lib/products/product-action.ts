'use server'
import { auth, currentUser } from "@clerk/nextjs/server"
import { productSchema } from "./product-validation"

import { products } from "@/db/schema"
import { db } from "@/db"
import z from "zod"


type FormState = {
    success: boolean,
    error?: Record<string, string[]>,
    message: string,
}


export const addProductAction = async (prevState: FormState, formData: FormData) => {
    try{
        const {userId,orgId} = await auth();
        if(!userId){
            return {
                success: false,
                message:"Sign in to submit!"
            }
        }
        if(!orgId){
            return {
                success: false,
                message:"You must me a member of organization to submit the project"
            }
        }
        const user = await currentUser()
        const userEmail = user?.primaryEmailAddress?.emailAddress || "Unknown";
        const rawFormData = Object.fromEntries(formData.entries());
        //validate data
        const validateData=productSchema.safeParse(rawFormData)

        if(!validateData.success){
            console.log(validateData.error.flatten().fieldErrors)
            return{
                success:false,
                errors:validateData.error.flatten().fieldErrors,
                message: "Invalid Data"
            };
        }
        const {name,slug,tagline,description,websiteurl,tags} = validateData.data;
        const tagsArray = tags?tags.filter((tag)=>typeof tag=="string"):[];


        //transform the data
        await db.insert(products).values({name,slug,tagline,description,websiteUrl:websiteurl,tags:tagsArray,status:"pending",submittedBy:userEmail,organizationId:orgId,userId});
        return {
            success:true,
            message:"Product Submitted Successfully! It will be reviewed shortly."
        }
    
    }
    catch(e){
        if(e instanceof z.ZodError){
            return {
                success: false,
                errors: e.flatten().fieldErrors,
                message: "Validation Failed",
            }
        }
        return {
            success: false,
            error: e,
            message: "Product Didnt added Successfully",
        }
    }
}