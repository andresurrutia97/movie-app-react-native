import { TYPES } from '@/actions/MovieActions';

const initialState = {
  movie: null,
  isFetching: false,
  error: null,
};

export const movieReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.FETCH_MOVIE_START:
      return {
        ...state,
        movie: null,
        isFetching: true,
        error: null,
      };
    case TYPES.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: payload,
        isFetching: false,
        error: null,
      };
    case TYPES.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        movie: null,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
