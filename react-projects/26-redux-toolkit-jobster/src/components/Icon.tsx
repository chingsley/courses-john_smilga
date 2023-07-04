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
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

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
      {type === 'IoBarChartSharp' && <IoBarChartSharp />}
      {type === 'MdQueryStats' && <MdQueryStats />}
      {type === 'ImProfile' && <ImProfile />}
    </>
  );
};

export default Icon;
