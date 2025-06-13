import React, { useState } from 'react';

const categories = ['Food', 'Entertainment', 'Utilities'];

function ExpenseForm(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(+event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      price,
      category,
    };

    props.onAddExpense(formData)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-sm bg-white"
      style={{ maxWidth: 400, margin: '2rem auto' }}
    >
      <h4 className="mb-3">Add Expense</h4>
      <div className="mb-3">
        <label htmlFor="expenseName" className="form-label">
          Name
        </label>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          className="form-control"
          id="expenseName"
          name="name"
          placeholder="Expense name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expensePrice" className="form-label">
          Price
        </label>
        <input
          onChange={handlePriceChange}
          value={price === 0 ? '' : price}
          type="number"
          className="form-control"
          id="expensePrice"
          name="price"
          placeholder="Expense price"
          min="0"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expenseCategory" className="form-label">
          Category
        </label>
        <select
          onChange={handleCategoryChange}
          value={category}
          className="form-select"
          id="expenseCategory"
          name="category"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
