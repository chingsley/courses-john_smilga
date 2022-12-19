import React, { useState } from 'react'
import { ITour } from './interface';

export interface TourProps {
  id: ITour["id"];
  image: ITour["image"];
  info: ITour["info"];
  name: ITour["name"];
  price: ITour["price"];
  removeTour: (id: string) => void;
}

const Tour: React.FC<TourProps> = (props) => {
  const { id, image, info, name, price, removeTour } = props;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(readMore => !readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </p>
      </footer>
    </article>
  )
}

export default Tour