import Pizza from "./menus/Pizza";
import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishesh to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :).</p>
      )}
    </main>
  );
};

export default Menu;
