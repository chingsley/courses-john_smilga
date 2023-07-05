import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { toggleSidebar, clearStore } from '../features/user/userSlice';
import { AppDispatch, RootState } from '../app/store';
import { NavbarWrapper } from '../assets/wrappers';


const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const triggerSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={triggerSidebarToggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" type="button" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button className="dropdown-btn" type="button" onClick={() => dispatch(clearStore('Loging out...'))}>
              logout
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;