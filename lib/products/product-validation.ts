import {z} from "zod";

export const productSchema = z.object({
    name:z.string().min(3,{message:"Name must be atleast 3 character"}),
    slug:z.string().min(3,{message:"Slug must be atleast 3 character"}).max(120,{message:"Slug must be maximum of 120 character"}).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:"Slug must be lower case, numbers and hypens"}),
    tagline:z.string().max(120,{message:"Tagline must be maximum of 120 character"}),
    description:z.string().optional(),
    websiteurl:z.string().min(5,{message:"Website must be atleast of 5 character"}),
    tags:z.string().min(1,{message:"Tags are required"}).transform((val)=>val.split(",").map((tag)=>tag.trim().toLowerCase())),
})
