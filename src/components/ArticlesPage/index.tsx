import React from 'react';
import { useArticleQuery } from '../../hooks/useArticleQuery';

const ArticlesPage = () => {
  const { data, isError, isLoading } = useArticleQuery();
  console.log({ data });
  return (
    <div className="article-page">
      <div>Olio Takeaway</div>
    </div>
  );
};

export default ArticlesPage;
