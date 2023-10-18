import React from "react";

// Here we learn about
const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding Items to Your Packing List🚀</em>
      </footer>
    );
  }
  const numOfItems = items.length;
  const numberOfItemPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numberOfItemPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You Seem Got Everything! Ready To Go ✈ `
          : `
        💼 You have ${numOfItems} items on your list, and you already packed ${" "}
        ${numberOfItemPacked} (% ${percentage})
        `}
      </em>
    </footer>
  );
};

export default Stats;
