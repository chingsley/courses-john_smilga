import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

interface IconProps {
  type: string;
}
const Icon: React.FC<IconProps> = ({ type }) => {
  return (
    <>
      {type === 'FaFacebook' && <FaFacebook />}
      {type === 'FaTwitter' && <FaTwitter />}
      {type === 'FaLinkedin' && <FaLinkedin />}
      {type === 'FaBehance' && <FaBehance />}
      {type === 'FaSketch' && <FaSketch />}
      {type === 'FaHome' && <FaHome />}
      {type === 'FaUserFriends' && <FaUserFriends />}
      {type === 'FaFolderOpen' && <FaFolderOpen />}
      {type === 'FaCalendarAlt' && <FaCalendarAlt />}
      {type === 'FaWpforms' && <FaWpforms />}
    </>
  );
};

export default Icon;
