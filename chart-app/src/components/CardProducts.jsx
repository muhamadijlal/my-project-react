/* eslint-disable react/prop-types */
import { useState } from "react";

const CardProducts = ({ product, onAddItemToCart }) => {
  const { imgURL, name, desc, price } = product;

  const [item, setItem] = useState(0);

  const handleClear = () => {
    setItem(0);
  };

  return (
    <div className={"bg-white rounded-2xl p-4 flex group"}>
      <div className={"relative w-44 h-auto"}>
        <img
          src={imgURL}
          alt="img-product"
          className={
            " bg-gray-300 p-2 rounded-xl group-hover:rotate-3 duration-300 ease-in-out transition-all"
          }
        />
        <div
          className={
            item
              ? "absolute rounded-full w-6 h-6 border-4 border-white top-1 -right-3 bg-teal-600 flex justify-center items-center text-[8px] text-white font-bold"
              : "hidden"
          }
        >
          {item}
        </div>
      </div>
      <div className={"px-5 w-full"}>
        <h3 className={"text-xl font-semibold text-slate-800"}>{name}</h3>

        <p className={"text-sm font-base text-slate-700"}>{desc}</p>
      </div>
      <div className={"flex items-end relative"}>
        <button
          onClick={handleClear}
          className={
            item
              ? "drop-shadodw-xl rounded-md outline-none ring-2 group/item hover:bg-teal-500 ring-red-700 px-2 py-1 flex absolute top-0 right-0"
              : "hidden"
          }
        >
          <div
            className={
              "text-xs font-bold text-red-700 group-hover/item:text-slate-100 transition-all duration-300 ease-in-out"
            }
          >
            x
          </div>
        </button>
        <button
          onClick={() => onAddItemToCart(product)}
          className={
            "px-4 py-1 rounded-md bg-teal-400 outline-none ring-2 group/item hover:bg-teal-500 ring-teal-700 drop-shadow-xl"
          }
        >
          <p
            className={
              "text-xs font-bold text-teal-700 group-hover/item:text-slate-100 transition-all duration-300 ease-in-out"
            }
          >
            ${price}
          </p>
        </button>
      </div>
    </div>
  );
};

export default CardProducts;
