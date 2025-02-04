"use client";

export const FoodCategories = ({ categories }) => {
  const choice = categories.map((e, idx) => ({
    selected: idx == 0,
    category: e,
  }));
  return (
    <div className="flex space-x-3">
      {choice.map(function child(e, idx) {
        const color = e.selected
          ? "text-white bg-black border border-black"
          : "text-gray-400 border border-gray-400";
        return (
          <div
            key={idx + 1}
            className={`px-5 py-2 rounded-3xl ${color} hover:bg-black hover:border-black hover:text-white cursor-pointer`}
          >
            {e.category}
          </div>
        );
      })}
    </div>
  );
};

export default FoodCategories;
