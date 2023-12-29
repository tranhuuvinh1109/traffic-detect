import React from 'react';
import logo from '../../assets/image/logo.png';

const Header: React.FC = () => {
  return (
    <div className="w-full flex border-b border-zinc-600 justify-between">
      <div className="w-2/12 flex items-center">
        <img src={logo} alt="logo" className="w-16" />
        <h3 className="text-2xl font-semibold text-regal-blue">Traffic - Detect</h3>
      </div>
      <div className="w-8/12 flex items-center justify-end">
        <div className="px-10">
          <input placeholder="Search" className="px-4 py-2 rounded-md text-zinc-800" />
        </div>
      </div>
    </div>
  );
};
export default Header;
