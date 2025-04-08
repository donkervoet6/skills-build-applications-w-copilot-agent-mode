import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://musical-spoon-pvjv4656x4f6p7x-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2 className="text-center">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
