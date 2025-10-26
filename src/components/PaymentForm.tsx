
import { PaymentFormInpust, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = () => {
 const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<PaymentFormInpust>({
     resolver: zodResolver(paymentFormSchema),
   });
 
   const router = useRouter()
   const handlePaymentForm: SubmitHandler<PaymentFormInpust> = (data) => {
   
   };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Jhosh"
          className="border-b border-gray-200 outline-0 text-sm"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500"> {errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="josh@gmail.com"
          className="border-b border-gray-200 outline-0 text-sm"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500"> {errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+122323231"
          className="border-b border-gray-200 outline-0 text-sm"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500"> {errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="123 new johor, Doha"
          className="border-b border-gray-200 outline-0 text-sm"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500"> {errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Neon City"
          className="border-b border-gray-200 outline-0 text-sm"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500"> {errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex justify-center items-center gap-2 "
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
