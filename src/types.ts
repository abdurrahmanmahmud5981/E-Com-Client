import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription:string;
    description:string;
    price:number;
    sizes:string[];
    colors:string[];
    images:Record<string,string>;
}

export type ProductsType = ProductType[];


export type CartItemType = ProductType & {
    quantity:number;
    selectedSize:string;
    selectedColor:string;
}

export type CartItemsType = CartItemType[]


export const shippinFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email().min(1,"Email is required!"),
    phone: z.string().min(7, "Phone must be between 7 and 10 digits!").max(10,"Phone must be between 7 and 10 digits!").regex(/^\d+$/,"Phone number only contain numbers!"),
    address:z.string().min(1,"Address is required!"),
    city:z.string().min(1,"City is required!"),
}) 

export type ShippingFormInpust = z.infer<typeof shippinFormSchema> ;


export const paymentFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email().min(1,"Email is required!"),
    phone: z.string().min(7, "Phone must be between 7 and 10 digits!").max(10,"Phone must be between 7 and 10 digits!").regex(/^\d+$/,"Phone number only contain numbers!"),
    address:z.string().min(1,"Address is required!"),
    city:z.string().min(1,"City is required!"),
}) 

export type PaymentFormInpust = z.infer<typeof paymentFormSchema> ;