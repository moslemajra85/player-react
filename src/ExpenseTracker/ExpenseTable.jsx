const ExpenseTable = (props) => {
   return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map((expense) => (
          <tr>
            <td>{expense.name}</td>
            <td>{expense.price}</td>
            <td>{expense.category}</td>
            <td>
              {' '}
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
