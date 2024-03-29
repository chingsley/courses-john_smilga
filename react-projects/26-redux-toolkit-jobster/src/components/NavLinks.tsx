import React from 'react';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

interface INavLinksProps {
  toggleSidebar?: () => void;
}

const NavLinks: React.FC<INavLinksProps> = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={toggleSidebar}
            end
          >
            <span className="icon">
              <Icon type={icon} />
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;