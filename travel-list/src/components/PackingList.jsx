import { useState } from "react";
import Item from "./packing-list/Item.jsx";
import Filter from "./Filter.jsx";

const PackingList = ({
  ListItem,
  onHandleToggleItem,
  onHandleRemoveItem,
  onHandleClearItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  const handleFilter = (value) => {
    setSortBy(value);
  };

  let sortedItems;

  switch (sortBy) {
    case "named":
      sortedItems = ListItem.slice().sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "checked":
      sortedItems = ListItem.slice().sort((a, b) => a.packed - b.packed);
      break;
    default:
      sortedItems = ListItem;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onHandleToggleItem={onHandleToggleItem}
              onHandleRemoveItem={onHandleRemoveItem}
            />
          );
        })}
      </ul>
      <Filter
        onHandleClearItems={onHandleClearItems}
        onHandleFilter={handleFilter}
        sortBy={sortBy}
      />
    </div>
  );
};

export default PackingList;
