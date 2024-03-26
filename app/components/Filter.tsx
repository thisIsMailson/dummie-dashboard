// FilterComponent.js
import React from "react";

const FilterComponent = ({ options, onSelectFilter }: any) => {
  const handleFilterChange = (event: any) => {
    const selectedFilter = event.target.value;
    onSelectFilter(selectedFilter);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        {options.map((option: any, index: any) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
