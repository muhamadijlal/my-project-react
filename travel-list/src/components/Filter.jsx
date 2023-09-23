const Filter = ({ onHandleFilter, sortBy, onHandleClearItems }) => {
  return (
    <div style={{ display: "flex" }}>
      <select value={sortBy} onChange={(e) => onHandleFilter(e.target.value)}>
        <option value="input">Sort By Input Order</option>
        <option value="named">Sort By Named Order</option>
        <option value="checked">Sort By Checked Order</option>
      </select>
      <button onClick={onHandleClearItems}>Clear List</button>
    </div>
  );
};

export default Filter;
