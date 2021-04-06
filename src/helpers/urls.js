export const getImageUrl = img =>
  img && `https://image.tmdb.org/t/p/original${img}`;

export const getTrailerUrl = (video, defaultValue = '') =>
  video
    ? `https://www.youtube.com/watch?v=${video?.results[0]?.key}`
    : defaultValue;
