import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}
const Img: React.FC<ImgProps> = (props) => {
  return <LazyLoadImage {...props} />;
};

export default Img;
