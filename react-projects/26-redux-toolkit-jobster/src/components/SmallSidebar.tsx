import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";
import { AppDispatch, RootState } from "../app/store";
import { SmallSidebarWrapper } from "../assets/wrappers";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <SmallSidebarWrapper>

      <div
        className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};

export default SmallSidebar;