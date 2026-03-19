"use client";
import { SparklesIcon } from "lucide-react";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";


const initialState={
    error:{},
    success:false,
    message:""
}
export default function ProductSubmitForm() {
    const [state,formAction,isPending]=useActionState(addProductAction,initialState)
    const {errors, message, success} = state;
    
    return <form className="space-y-6" action={formAction}>
        <FormField label="Product Name" id="name" name="name" placeholder="My Awsome Project" required onChange={() => { }} error={errors?.name} />

        <FormField label="Slug" id="slug" name="slug" placeholder="my-awsome-project" required onChange={() => { }} error={errors?.slug} helperText="The slug is URL friendly version of the product name." />

        <FormField label="Tagline" id="tagline" name="tagline" placeholder="A brief catchy description" onChange={() => { }} error={errors?.tagline} />

        <FormField textarea={true} label="Desciption" id="description" name="description" placeholder="Tell us more about your project" required onChange={() => { }} error={errors?.description} />

        <FormField label="Website Url" id="websiteurl" name="websiteurl" placeholder="https://yourproduct.com" required onChange={() => { }} error={errors?.websiteurl} helperText="Enter the website link for our product" />

        <FormField label="Tags" id="tags" name="tags" placeholder="AI,SaaS,ML" onChange={() => { }} error={errors?.tags} helperText="Comma-seperated tags" />

        <Button type="submit" className="w-full" size="lg"><SparklesIcon className="size-4"/>Submit Product</Button>
    </form>
}