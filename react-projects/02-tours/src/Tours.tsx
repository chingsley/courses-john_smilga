import React from 'react';
import Tour, { TourProps } from './Tour';

interface TourListProps {
  tours: TourProps[];
  removeTour: (id: string) => void;
}
const Tours: React.FC<TourListProps> = (props) => {
  const { tours, removeTour } = props;
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours