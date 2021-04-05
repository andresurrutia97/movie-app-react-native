export const TYPES = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
};

export const addMovie = id => ({
  type: TYPES.ADD_MOVIE,
  payload: id,
});

export const removeMovie = id => ({
  type: TYPES.REMOVE_MOVIE,
  payload: id,
});
