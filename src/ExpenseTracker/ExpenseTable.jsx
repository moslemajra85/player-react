const ExpenseTable = () => {


  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cake</td>
          <td>$10</td>
          <td>Food</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>$100</td>
         </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
