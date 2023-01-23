import React from 'react';

export interface IPhoto {
  urls: {
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
    portfolio_url: string;
    profile_image: {
      medium: string;
    };
  };
}
const Photo: React.FC<IPhoto> = (props) => {
  const {
    urls: { regular },
    alt_description,
    likes,
    user: {
      name,
      portfolio_url,
      profile_image: { medium },
    },
  } = props;

  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>likes {likes}</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt='' className='user-img' />
        </a>
      </div>
    </article>
  );
};

export default Photo;
