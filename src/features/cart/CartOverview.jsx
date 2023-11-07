import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalQuantity } from "./cartSlice";
import { getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
     const totalcartQuantity = useSelector(getTotalQuantity);
     const totalcartPrice = useSelector(getTotalCartPrice);
  if (!totalcartQuantity) return null;
  return (
    <div className="flex items-center justify-between px-4 py-4 uppercase text-stone-200 bg-stone-800 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalcartQuantity} pizzas</span>
        <span>{formatCurrency(totalcartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
