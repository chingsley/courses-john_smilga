import { useSelector } from 'react-redux';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import { RootState } from '../app/store';
import { BigSidebarWrapper } from '../assets/wrappers';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store: RootState) => store.user);

  return (
    <BigSidebarWrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </BigSidebarWrapper>
  );
};

export default BigSidebar;