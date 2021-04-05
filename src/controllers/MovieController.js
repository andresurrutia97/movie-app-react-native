import { HttpClient } from './HttpClient';

export class MovieController {
  constructor() {
    this.basePath = '/movie';
  }

  getMovie = async id => {
    const result = await HttpClient.get(`${this.basePath}/${id}`);
    return result;
  };

  getNowPlaying = async () => {
    const result = await HttpClient.get(`${this.basePath}/now_playing`);
    return result;
  };

  getPopularMovies = async () => {
    const result = await HttpClient.get(`${this.basePath}/popular`);
    return result;
  };

  searchMovie = async name => {
    const result = await HttpClient.get('/search/movie', { query: name });
    return result;
  };
}
