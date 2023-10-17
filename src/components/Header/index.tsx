import React from 'react';
import logo from '../../assets/image/logo.png';
import { NavItemInterface, navbar } from '../../constant/navbar';
import { NavLink } from 'react-router-dom';
import CustomIcon from '../CustomIcon';

type NavItemType = {
  navbar: NavItemInterface;
};

const NavItem: React.FC<NavItemType> = ({ navbar }) => {
  return (
    <li className="flex px-4">
      <NavLink
        to={navbar.url}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active text-sky-600 border-b-2 border-sky-600' : ''
        }
      >
        <div className="flex items-center py-2">
          <CustomIcon icon={navbar.icon} className="" fontSize={20} />
          <span className="ml-2 text-md">{navbar.label}</span>
        </div>
      </NavLink>
    </li>
  );
};
const Header: React.FC = () => {
  return (
    <div className="w-full flex border-b border-black justify-between">
      <div className="w-2/12 flex items-center">
        <img src={logo} alt="logo" className="w-16" />
        <h3 className="text-2xl text-regal-blue">Traffic - Detect</h3>
      </div>
      <div className="w-6/12 flex justify-center">
        <ul className="flex h-full items-center">
          {navbar.map((item) => {
            return <NavItem key={item.id} navbar={item} />;
          })}
        </ul>
      </div>
      <div className="w-2/12"></div>
    </div>
  );
};
export default Header;
