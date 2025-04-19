import BillingInfo from "../Billing/BillingInfo"
import OrderSum from "../Billing/OrderSum"


const CheckOut = () => {
  return (
    <div className="flex gap-[24px]">
      <BillingInfo/>
      <OrderSum/>
    </div>
  )
}

export default CheckOut