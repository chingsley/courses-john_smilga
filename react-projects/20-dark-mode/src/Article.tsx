import React from 'react';
import moment from 'moment';
import { IArticle } from './data';

const Article: React.FC<IArticle> = (props) => {
  const { title, snippet, date, length } = props;
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
    </article>
  );
};

export default Article;
