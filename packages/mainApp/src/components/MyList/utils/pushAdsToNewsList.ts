import {chunk, flatMap} from 'lodash';
const pushAdsToNewsList = (newsList, adsList) => {
  const newsListChunks = chunk(newsList, 4);
  const newsListwithAds = flatMap(newsListChunks, (item, index) => {
    return [...item, adsList[index % adsList?.length]];
  });
  return newsListwithAds;
};

export default pushAdsToNewsList;
