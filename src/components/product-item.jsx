import React from "react";
import useBasket from "../store/basket-store";

const ProductItem = ({ data }) => {
  const { title, price, image } = data;
  const { actions } = useBasket();

  // function add() {
  //   actions.addToBasket(data);
  // }

  function remove() {
    actions.removeFromBasket(data);
  }

  return (
    <div className="bg-gray-100 rounded-sm flex flex-col items-center gap-2 p-4">
      <img src={image} alt={title} className="w-37.5 h-50" />
      <div className="self-start flex gap-2 flex-col">
        <h3>{title}</h3>
        <span>Price: ${price}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => actions.addToBasket(data)}
          className="p-2 rounded-md bg-green-600 text-white cursor-pointer self-start "
        >
          add to basket
        </button>
        {data?.quantity && (
          <>
            {data.quantity}
            <button
              onClick={remove}
              className="p-2 rounded-md bg-red-600 text-white cursor-pointer self-start "
            >
              remove from basket
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
