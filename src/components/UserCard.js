import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (

    <div onClick={() => onClick(user)}
      className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition">
      <img
        src={user.image}
        alt={user.firstName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500 mb-2">{user.email}</p>
        <p className="text-sm text-gray-700">
          📍 {user.address.city}, {user.address.state}
        </p>
        <p className="text-sm text-gray-700">📞 {user.phone}</p>
        <p className="text-sm text-gray-700">💼 {user.company?.title}</p>
        <p className="text-xs text-gray-500 mt-2">
          "{user.company?.department} - {user.company?.name}"
        </p>
      </div>
    </div>
  );
};

export default UserCard;
