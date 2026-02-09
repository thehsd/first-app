import useBasket from "../../store/basket-store";
import ProductItem from "../../components/product-item";

const BasketView = () => {
  const { actions, basketItems } = useBasket();

  return (
    <div>
      <button
        onClick={actions.removeAll}
        className="bg-orange-400 p-3 rounded-md text-white cursor-pointer"
      >
        Remove All Item
      </button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 p-3">
        {basketItems.map((item) => (
          <ProductItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BasketView;
