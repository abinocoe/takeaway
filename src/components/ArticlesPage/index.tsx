import React from 'react';
import { useArticleQuery } from '../../hooks/useArticleQuery';
import ArticleList from '../ArticleList';
import './index.css';

const ArticlesPage = () => {
  const { data, isError, isLoading } = useArticleQuery();

  return (
    <div className="articles-page">
      <div>Olio Takeaway</div>
      <ArticleList data={data} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export default ArticlesPage;
