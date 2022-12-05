import React from "react";

interface BookProps {
  author: string;
  title: string;
  imgSrc: string;
  children?: React.ReactNode; 
}

const Book: React.FC<BookProps> = (props) => {
  const { author, title, imgSrc } = props;
  return (
    <article className="book">
      <img src={imgSrc} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

export default Book;
