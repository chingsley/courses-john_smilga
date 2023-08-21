import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import Icon from './Icon';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()!;

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    {/* <aside className='sidebar'> */}
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                <Icon type={icon} />
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map(link => {
          const { id, url, icon  } = link;
          return (
            <li key={id}>
              <a href={url}>
                <Icon type={icon} />
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar;