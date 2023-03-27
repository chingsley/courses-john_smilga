import React, { useState } from 'react';
import styled from 'styled-components';
import { IProductDetail } from '../types/products';
import { Img } from '../components';

interface IProductImagesProps {
  images: IProductDetail["images"];
}
const ProductImages: React.FC<IProductImagesProps> = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <Wrapper>
      <Img src={mainImg.url} alt='' className='main' />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <Img
              key={index}
              src={image.url}
              alt=''
              className={`${image.url === mainImg.url ? 'active' : null}`}
              onClick={() => setMainImg(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
