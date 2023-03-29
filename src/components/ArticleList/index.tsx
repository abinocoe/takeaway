import React from 'react';
import { Article } from '../../types/article';

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
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  ) : (
    <p data-testid="articles-empty">No articles available :(</p>
  );
};

export default ArticleList;
