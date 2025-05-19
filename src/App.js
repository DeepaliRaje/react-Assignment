import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';

function App() {

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users?limit=5&skip=10')
      .then(res => setUsers(res.data.users))
      .catch(err => console.error('API error:', err));
  }, [skip]);

  const nextPage = () => setSkip(prev => prev + limit);
  const prevPage = () => setSkip(prev => Math.max(prev - limit, 0));

  return (

    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map(user => (
         <UserCard key={user.id} user={user} onClick={setSelectedUser} />
        ))}
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />

      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevPage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={skip === 0}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
