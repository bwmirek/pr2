import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MovieCard = (props) => {
  return (
    <Link href={`/details/${props.id}`}>
      <a className={'block bg-white h-full grid grid-cols-6 transition hover:drop-shadow-xl border border-1 rounded-xl overflow-hidden'}>
        <div className={'col-span-2 relative'}>
          <Image unoptimized layout={'fill'} objectFit={'cover'} src={props.image} alt={props.title} className={'h-full'}/>
        </div>
        <div className={'col-span-4 p-4'}>
          <h2 className={'text-3xl font-bold mb-4 line-clamp-1'}>
            {props.title}
          </h2>
          <p className={'line-clamp-3'}>
            {props.content}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default MovieCard;
