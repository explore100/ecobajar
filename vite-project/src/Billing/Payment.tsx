import { useState } from "react";
import ShopButton from "../Ui/ShopButton";

type Paymented = {
  label: string;
};

const payments: Paymented[] = [
  { label: "Cash On Delivery"  },
  { label: "PayPal" },
  { label: "Amazon Pay" },
];
const Payment: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState("Cash On Delivery");
  return (
    <>
      <div className="w-full h-full p-[24px]">
        <h1 className="font-medium text-xl"> Payement Method</h1>
        <div className="pt-[1rem] ">
            { payments.map((paymen) => (
                <label
                    key={paymen.label}
                    className="flex items-center cursor-pointer text-gray-800"
                >
                    <input
                        type="radio"
                        name="payment"
                        value={paymen.label}
                        checked={selectedPayment === paymen.label}
                        onChange={() => setSelectedPayment(paymen.label)}
                        className="form-radio h-4 w-4"
                    />
                    <span className="ml-2">
                        {paymen.label}
                    </span>
                </label>
            ))}
        </div>
        <div className="mt-[24px] pl-[60px]">
                    <ShopButton
                        title="Proceed Order"
                        icon=""
                        bgcolor="bg-[#00B207]"
                        textcolor="text-white"
                    />
                </div>
      </div>
    </>
  );
};

export default Payment;
