const Stats = ({ items }) => {
  const totalItem = items.length;
  const totalPackedItem = items.filter((item) => item.packed).length;
  const percentage = (totalPackedItem / totalItem) * 100;

  return (
    <footer className="stats">
      <em>
        💼 You have {totalItem} items on your list, and you already packed
        {totalPackedItem} ({Math.round(percentage) || 0}%)
      </em>
    </footer>
  );
};

export default Stats;
