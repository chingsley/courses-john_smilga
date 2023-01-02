import React, { useState, useRef, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import Icon from './Icon';
import logo from './logo.svg';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef =  useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if(!linksRef.current) return;
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if(!linksContainerRef.current) return;
    if(showLinks) {
      // note: For this to work the link-container must have a default css height: auto !important. See .link-container{} style in the css
      // see https://getir.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22688215#overview (time: 6:20)
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  )
                })}
            </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}><Icon type={icon} /></a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;