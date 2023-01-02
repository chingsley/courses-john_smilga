import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
    </>
  );
};

export default Icon;
