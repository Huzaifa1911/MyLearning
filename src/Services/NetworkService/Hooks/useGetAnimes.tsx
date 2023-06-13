import {InfiniteData, useInfiniteQuery} from '@tanstack/react-query';
import {pathOr} from 'ramda';

import {axiosInstance} from '../Config';
import {AxiosResponse} from 'axios';
import {TAnime} from '../../../Types';

const select = (
  data: InfiniteData<AxiosResponse<any>>,
): InfiniteData<TAnime> => {
  const animes = data.pages.flatMap(page => page.data?.data);
  return {
    ...data,
    pages: animes.map(anime => {
      return {
        image: pathOr(null, ['images', 'jpg', 'image_url'], anime),
        mal_id: pathOr(0, ['mal_id'], anime),
        rating: pathOr('', ['rating'], anime),
        title: pathOr('', ['title'], anime),
      };
    }),
  };
};

const useGetAnimes = () => {
  return useInfiniteQuery({
    queryKey: ['ANIME_LIST'],
    queryFn: () => axiosInstance.get('anime'),
    select,
  });
};

export default useGetAnimes;
