const MovieDetails = (props) => {
  return (
    <div>
      <img src={props.movie.image} alt={props.movie.title}/>
      <h2>
        {props.movie.title}
      </h2>
      <p>
        {props.movie.content}
      </p>
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
