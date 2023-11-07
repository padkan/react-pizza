import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
//isLoadingIngredients, ingredients
function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;
console.log(ingredients);
  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm italic capitalize text-stone-500">{ isLoadingIngredients ? 'Loading...' : ingredients.join(', ') }</p>
    </li>
  );
}

OrderItem.propTypes = {
  ingredients: PropTypes.array.isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItem;
