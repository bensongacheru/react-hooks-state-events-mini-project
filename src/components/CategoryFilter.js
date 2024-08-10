// src/components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => (
  <div>
    {categories.map(category => (
      <button
        key={category}
        className={category === selectedCategory ? 'selected' : ''}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;

