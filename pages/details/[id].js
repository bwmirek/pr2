import Image from 'next/image';

const MovieDetails = (props) => {
  return (
    <div className={'block w-bg-white h-[512px] grid grid-cols-5 transition hover:drop-shadow-xl border border-1 rounded-xl overflow-hidden'}>
      <div className={'col-span-1 relative'}>
        <Image unoptimized layout={'fill'} objectFit={'cover'} src={props.movie.image} alt={props.movie.title} className={'h-full'}/>
      </div>
      <div className={'col-span-4 p-16'}>
        <h2 className={'text-3xl font-bold mb-4 line-clamp-1'}>
          {props.movie.title}
        </h2>
        <p className={'mb-12'}>
          {props.movie.content}
        </p>
        <p className={'text-xs'}>
          id: {props.movie.id}
        </p>
      </div>
    </div>
  );
};

MovieDetails.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  const response = await fetch(`https://pr-movies.herokuapp.com/api/movies/${id}`);
  const json = await response.json();

  return {
    movie: json
  };
};

export default MovieDetails;
