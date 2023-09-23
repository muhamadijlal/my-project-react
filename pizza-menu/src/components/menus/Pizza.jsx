const Pizza = ({ pizza }) => {
  const { name, ingredients, price, soldOut, photoName } = pizza;

  return (
    <li className={"pizza" + (soldOut ? " sold-out" : "")}>
      <img src={photoName} alt="focaccia-pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
