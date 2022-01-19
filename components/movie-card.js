import * as React from 'react';
import Link from 'next/link';

const MovieCard = (props) => {
  return (
    <Link href={`/details/${props.id}`}>
      <a>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </a>
    </Link>
  );
};

export default MovieCard;
