import React from 'react';
import { Article } from '../../types/article';
import ArticleListItem from '../ArticleListItem';

interface ArticleListProps {
  data?: Article[];
  isError: boolean;
  isLoading: boolean;
}

const ArticleList = ({ data, isError, isLoading }: ArticleListProps) => {
  if (isLoading) {
    return <p data-testid="articles-loading">Loading...</p>;
  }

  if (isError) {
    return (
      <p data-testid="articles-error">
        An error occurred, please try again later
      </p>
    );
  }

  return data && data.length > 0 ? (
    <div data-testid="articles-success">
      {data.map((article) => (
        <ArticleListItem article={article} key={article.id} />
      ))}
    </div>
  ) : (
    <p data-testid="articles-empty">No articles available :(</p>
  );
};

export default ArticleList;
