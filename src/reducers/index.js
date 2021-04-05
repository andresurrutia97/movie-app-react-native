import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { homeReducer } from '@/reducers/HomeReducer';
import { movieReducer } from '@/reducers/MovieReducer';
import { listReducer } from '@/reducers/ListReducer';
import { searchReducer } from '@/reducers/SearchReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  home: homeReducer,
  movie: movieReducer,
  list: listReducer,
  search: searchReducer,
});
