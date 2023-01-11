import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />{/** without this line, the pages will not show when we route */}
    </>
  )
}

export default SharedLayout