import { SharedLayoutWrapper } from '../../assets/wrappers';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;