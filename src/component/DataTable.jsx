import React, { useState } from 'react';

const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
  },
  {
    id: 2,
    firstName: 'Kavin',
    lastName: 'D',
    email: 'kavin@example.com',
    phoneNumber: '098765432',
  },
  {
    id: 3,
    firstName: 'Aravind',
    lastName: 'B',
    email: 'aravi@example.com',
    phoneNumber: '1257486384',
  },

  // Add more data here
];

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = data.filter(item =>
    item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phoneNumber.includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
