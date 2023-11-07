// Test ID: IIDSAT
//#3RTU1A
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import  OrderItem  from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fecher = useFetcher();
  useEffect(function() {
    if(!fecher.data && fecher.state === 'idle')
    fecher.load('/menu')
  }, [fecher])
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(id, cart);
  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">order #{id} Status</h2>

        <div className="space-x-2">
          {priority && <span className="px-3 py-1 font-semibold tracking-wide uppercase bg-red-500 rounded-full text-red-50">Priority</span>}
          <span className="px-3 py-1 font-semibold tracking-wide uppercase bg-green-500 rounded-full text-green-50">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-5 bg-stone-200">
        <p className="text-sm font-medium text-stone-600"> 
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="border-t border-b dive-stone-200 dive-y">
        {cart.map(item => <OrderItem item={item} key={item.pizzaId} isLoadingIngredients={fecher.state === 'loading'}  ingredients={fecher?.data?.find(el => el.id === item.pizzaId).ingredients ?? []} />)}
      </ul>

      <div className="px-6 py-5 space-y-2 bg-stone-200">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order} />  }
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
