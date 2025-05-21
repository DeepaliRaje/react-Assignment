import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-900">Connections</h1>
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Profiles</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
