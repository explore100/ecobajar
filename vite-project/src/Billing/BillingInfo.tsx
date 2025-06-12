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
    alert("Billing information submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 sm:px-6 lg:px-0">
      <section className="flex flex-col lg:flex-row gap-6 mt-8 lg:ml-[300px]">
        <div className="w-full lg:w-[872px]">
          <h1 className="text-2xl font-medium mb-4">Billing Information</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="firstName"
                placeholder="Your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="lastName"
                placeholder="Your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="text-sm font-medium">
                Company Name (optional)
              </label>
              <input
                  {...register("companyName", { required: "Company Name is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="companyName"
                placeholder="Company name"
              />
               {errors.companyName && 
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              }
            </div>

            {/* Street Address */}
            <div className="sm:col-span-2 lg:col-span-3">
              <label htmlFor="streetAddress" className="text-sm font-medium">
                Street Address
              </label>
              <input
                {...register("streetAddress", { required: "Street Address is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="streetAddress"
                placeholder="Street address"
              />
              {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="text-sm font-medium">
                Country / Region
              </label>
              <input
                {...register("country", { required: "Country is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="country"
                placeholder="Country"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="text-sm font-medium">
                State
              </label>
              <input
                {...register("state", { required: "State is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="state"
                placeholder="State"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="text-sm font-medium">
                Zip Code
              </label>
              <input
                {...register("zipCode", { required: "Zip Code is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="zipCode"
                placeholder="Zip Code"
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
            </div>

            {/* Email */}
            <div className="sm:col-span-2 ">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="email"
                id="email"
                placeholder="Email address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", { required: "Phone number is required" })}
                className="mt-2 p-3 w-full border rounded-md border-[#E6E6E6]"
                type="text"
                id="phoneNumber"
                placeholder="Phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          {/* Ship to different address */}
          <div className="py-4 flex items-center gap-2 border-b mt-6 mb-6">
            <input type="checkbox" className="w-5 h-5" />
            <p className="text-sm text-gray-700">Ship to a different address</p>
          </div>

          {/* Notes */}
          <section className="mt-6">
            <h1 className="text-xl font-medium">Additional Info</h1>
            <div className="mt-4">
              <label htmlFor="note" className="text-sm font-medium">
                Order Notes (optional)
              </label>
              <textarea
                {...register("note", { required: "Add some note for feedback" })}
                className="mt-2 p-3 w-full h-[100px] border rounded-md border-gray-300 resize-none"
                id="note"
                placeholder="Notes about your order, e.g. delivery instructions"
              />
              {errors.note && <p className="text-red-500 text-sm">{errors.note.message}</p>}

            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[424px]">
          <OrderSum />
        </div>
      </section>
    </form>
  );
};

export default BillingInfo;
