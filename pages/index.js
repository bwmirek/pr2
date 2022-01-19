import Head from 'next/head';

import MovieCard from '../components/movie-card';
import { isMovieValid } from '../utils/functions';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>33183</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1>
          Hello World
        </h1>

        <div>
          {props.movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} content={movie.content} image={movie.image}/>
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
