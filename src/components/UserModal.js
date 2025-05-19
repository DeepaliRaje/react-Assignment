import React from 'react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">✖</button>
        <div className="flex gap-4 items-start">
          <img src={user.image} alt={user.firstName} className="w-32 h-32 object-cover rounded-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{user.email}</p>
            <p className="text-gray-700">Phone: {user.phone}</p>
            <p className="text-gray-700">Age: {user.age}</p>
            <p className="text-gray-700">Gender: {user.gender}</p>
            <p className="text-gray-700">Company: {user.company.name}</p>
            <p className="text-gray-700">Department: {user.company.department}</p>
            <p className="text-gray-700">Title: {user.company.title}</p>
            <p className="text-gray-700">Address: {user.address.address}, {user.address.city}, {user.address.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
