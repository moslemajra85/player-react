import React from 'react';


const persons = [
    { name: 'Mark', age: 28, job: '@mdo' },
    { name: 'Jacob', age: 32, job: '@fat' },
    { name: 'John', age: 25, job: '@social' },
    { name: 'Alice', age: 30, job: '@dev' },
];

const Test = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">age</th>
            <th scope="col">job</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
