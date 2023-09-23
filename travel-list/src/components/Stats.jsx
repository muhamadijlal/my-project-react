const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const totalItem = items.length;
  const totalPackedItem = items.filter((item) => item.packed).length;
  const percentage = (totalPackedItem / totalItem) * 100;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You got everything! Ready to go ✈️"
      ) : (
        <em>
          💼 You have {totalItem} items on your list, and you already packed
          {totalPackedItem} ({Math.round(percentage) || 0}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
