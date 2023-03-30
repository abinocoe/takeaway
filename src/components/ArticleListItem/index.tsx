import React from 'react';
import classNames from 'classnames';
import { Article } from '../../types/article';
import './index.css';

interface ArticleListItemProps {
  article: Article;
  hasBeenViewed: boolean;
  showArticleDetail: (article: Article) => void;
}

const ArticleListItem = ({
  article,
  hasBeenViewed,
  showArticleDetail,
}: ArticleListItemProps) => {
  const onClick = () => showArticleDetail(article);

  const classes = classNames('article-wrapper', { viewed: hasBeenViewed });

  return (
    <div className={classes} data-testid="list-item" onClick={onClick}>
      <div>
        <p>{article.title}</p>
        <p>{article.location.town}</p>
      </div>
      <img alt={article.title} src={article.photos[0].files.small} />
    </div>
  );
};

export default ArticleListItem;
