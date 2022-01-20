import Head from 'next/head';

import MovieCard from '../components/movie-card';
import { isMovieValid } from '../utils/functions';

const Home = (props) => {
  return (
    <div className={''}>
      <Head>
        <title>33183</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className={'mb-8 text-6xl font-bold uppercase'}>
          Lista filmów
        </h1>

        <div className={'grid grid-cols-3 gap-4'}>
          {props.movies.map(movie => (
            <div key={movie.id} className={''}>
              <MovieCard id={movie.id} title={movie.title} content={movie.content} image={movie.image}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch('https://pr-movies.herokuapp.com/api/movies');
  const json = await response.json();

  return {
    movies: json.filter(movie => isMovieValid(movie))
  };
};

export default Home;
