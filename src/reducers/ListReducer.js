import { TYPES } from '@/actions/ListActions';

const initialState = {
  list: [],
};

export const listReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.ADD_MOVIE:
      if ([...state.list].find(el => el.id === payload.id)) {
        return { ...state };
      } else {
        return {
          ...state,
          list: [...state.list, payload],
        };
      }
    case TYPES.REMOVE_MOVIE:
      return {
        ...state,
        list: [...state.list].filter(item => item.id !== payload),
      };
    default:
      return state;
  }
};
