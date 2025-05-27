import { useForm } from "react-hook-form";
import OrderSum from "./OrderSum";

type FormData = {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  note?: string;
};

const BillingInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex gap-[24px] mt-[32px] ml-[300px]">
        <div className=" w-[872px]  border-[#E6E6E6]">
          <h1 className="text-2xl font-medium">Billing Information</h1>

          <div className="flex flex-wrap gap-[1rem]">
            {/* First Name */}
            <div className="w-[280px] h-[78px] mt-[20px]">
              <label
                htmlFor="firstName"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                First name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="firstName"
                placeholder="Your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="w-[280px] h-[78px] mt-[20px]">
              <label
                htmlFor="lastName"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Last name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="lastName"
                placeholder="Your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Company Name (Optional) */}
            <div className="w-[280px] h-[78px] mt-[20px]">
              <label
                htmlFor="companyName"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Company Name (optional)
              </label>
              <input
                {...register("companyName", { required: "Company Name is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="companyName"
                placeholder="Company name"
              />
               {errors.companyName && (
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Street Address */}
            <div className="w-full h-[78px]">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Street Address
              </label>
              <input
                {...register("streetAddress", {
                  required: "Street Address is required",
                })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="streetAddress"
                placeholder="Street address"
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">
                  {errors.streetAddress.message}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="w-[280px] h-[78px]">
              <label
                htmlFor="country"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Country / Region
              </label>
              <input
                {...register("country", { required: "Country is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="country"
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            {/* State */}
            <div className="w-[280px] h-[78px]">
              <label
                htmlFor="state"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                State
              </label>
              <input
                {...register("state", { required: "State is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="state"
                placeholder="State"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            {/* Zip Code */}
            <div className="w-[280px] h-[78px]">
              <label
                htmlFor="zipCode"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Zip Code
              </label>
              <input
                {...register("zipCode", { required: "Zip Code is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="zipCode"
                placeholder="Zip Code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="w-[428px] h-[78px]">
              <label
                htmlFor="email"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="email"
                id="email"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="w-[428px] h-[78px]">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-normal text-[#1A1A1A]"
              >
                Phone Number
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="py-[10px] flex gap-[6px] border-b-2 mb-[2rem] items-center mt-[2rem]">
            <input type="checkbox" className="w-[20px] h-[20px]" />
            <p className="font-normal text-sm text-[#4D4D4D]">
              Ship to a different address
            </p>
          </div>
          <section className="h-[175px]  mt-[32px]">
            <h1 className="font-medium text-2xl">Additional Info</h1>
            <div className="h-[129px] mt-[20px]">
              <h1 className="font-normal text-sm">Order Notes (Optional)</h1>

              <input
                {...register("note", { required: "name is required" })}
                className="mt-[8px] p-3 w-full h-[100px] border rounded-md border-gray-300 "
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery"
                id="note"
              />
              {errors.note && (
                <p className="text-red-500 text-sm">{errors.note.message}</p>
              )}

            </div>
          </section>
        </div>
        <div className="w-[424px]">
          <OrderSum />
        </div>
      </section>
    </form>
  );
};

export default BillingInfo;
