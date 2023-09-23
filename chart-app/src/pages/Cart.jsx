/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cart = ({ cart }) => {
  if (cart.items.length) {
    return (
      <div className={"pt-20 px-5 w-full h-[calc(100vh-56px)] bg-gray-200"}>
        <div className={"mx-auto w-[58%] space-y-4"}>
          <h3 className={"text-3xl text-slate-800 font-semibold"}>Your Cart</h3>
          <table className="w-full mt-10">
            <thead className="bg-slate-800 text-white ">
              <tr>
                <th colSpan="2" className="py-3 px-7 text-left">
                  Product
                </th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="border border-white text-center">
              {cart.items.map(({ id, imgURL, price, qty, name }) => {
                return (
                  <tr key={id}>
                    <td className="px-7 py-3 flex items-center gap-5">
                      <img
                        src={imgURL}
                        className="w-10 h-auto"
                        alt="logo-product"
                      />
                      {name}
                    </td>
                    <td></td>
                    <td>${price}</td>
                    <td>{qty}</td>
                    <td className="font-bold">${price * qty}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-center font-bold">
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-slate-800 text-white p-3">Total</td>
                <td className="bg-slate-800 text-white">${cart.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={"pt-20 px-5 w-full h-[calc(100vh-56px)] bg-gray-200"}>
      <div className={"mx-auto w-[58%] space-y-4"}>
        <h3 className={"text-3xl text-slate-800 font-semibold"}>Your Cart</h3>
        <p className={"text-slate-600 font-thin text-lg"}>
          You have not added any product to your cart yet.
        </p>
      </div>
    </div>
  );
};

export default Cart;
