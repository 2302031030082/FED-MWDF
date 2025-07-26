import React, { useEffect, useState } from 'react';

function UserFetcher() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array = run once on mount

  return (
    <div>
      <h2>User List from API</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>👤 {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFetcher;
