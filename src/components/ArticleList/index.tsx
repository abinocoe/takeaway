import React, { useState } from 'react';
import { Article } from '../../types/article';
import ArticleDetailModal from '../ArticleDetailModal';
import ArticleListItem from '../ArticleListItem';

interface ArticleListProps {
  data?: Article[];
  isError: boolean;
  isLoading: boolean;
}

const ArticleList = ({ data, isError, isLoading }: ArticleListProps) => {
  const [articleViewing, setArticleViewing] = useState<Article>();
  const [viewedArticles, setViewedArticles] = useState<Set<number>>(new Set());

  const listItemOnClick = (article: Article) => {
    setArticleViewing(article);
    setViewedArticles(viewedArticles.add(article.id));
  };

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
        <ArticleListItem
          article={article}
          hasBeenViewed={viewedArticles.has(article.id)}
          key={article.id}
          showArticleDetail={listItemOnClick}
        />
      ))}
      {articleViewing && (
        <ArticleDetailModal
          viewedArticle={articleViewing}
          isOpen={!!articleViewing}
          close={() => setArticleViewing(undefined)}
        />
      )}
    </div>
  ) : (
    <p data-testid="articles-empty">No articles available :(</p>
  );
};

export default ArticleList;
