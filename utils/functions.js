export const isMovieValid = (movie) => {
  const isValid = (value) => value !== undefined && value !== '';

  if (!isValid(movie.title) || !isValid(movie.image) || !isValid(movie.content)) {
    return false;
  }

  return movie.image.startsWith('http');
};
