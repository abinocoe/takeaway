import {
  useQuery, UseQueryResult,
} from "@tanstack/react-query";
import { Article } from '../types/article';

export const useArticleQuery:() => UseQueryResult<Article[], unknown> = () => useQuery({
  queryKey: ['olio-articles'],
  queryFn: fetchArticles
})


export const fetchArticles = async () => {
  const response = await fetch(`https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('error calling Olio test articles endpoint');
  }
  return response.json();
};

