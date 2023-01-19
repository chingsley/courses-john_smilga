import React from 'react';
import { IFollower } from './utils';

const Follower: React.FC<IFollower> = (props) => {
  const { avatar_url, html_url, login } = props;
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
