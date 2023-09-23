/* eslint-disable react/prop-types */
import CardProducts from "../components/CardProducts";

const Products = ({ products, addItemToCart }) => {
  return (
    <div className={"pt-20 px-5 w-full h-[calc(100vh-56px)] bg-gray-200"}>
      <div className={"mx-auto w-[58%] space-y-4"}>
        <h3 className={"text-3xl text-slate-800 font-semibold"}>Products</h3>
        <p className={"text-slate-600 font-thin text-lg"}>
          Take a look at our products
        </p>
        <div className={"grid grid-cols-2 gap-4"}>
          {products.map((product) => {
            return (
              <CardProducts
                key={product.id}
                product={product}
                onAddItemToCart={addItemToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
