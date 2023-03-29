import React from 'react';
import { Article } from '../../types/article';
import './index.css';

interface ArticleListItemProps {
  article: Article;
  showArticleDetail: (article: Article) => void;
}

const ArticleListItem = ({
  article,
  showArticleDetail,
}: ArticleListItemProps) => {
  const onClick = () => showArticleDetail(article);

  return (
    <div className="article-wrapper" data-testid="list-item" onClick={onClick}>
      <div>
        <p>{article.title}</p>
        <p>{article.location.town}</p>
      </div>
      <img alt={article.title} src={article.photos[0].files.small} />
    </div>
  );
};

export default ArticleListItem;
