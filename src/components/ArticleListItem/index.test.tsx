import { render, screen } from '@testing-library/react';
import ArticleListItem from '.';
import { mockArticle } from '../../testData/mockArticle';

it('renders a title and location', () => {
  render(
    <ArticleListItem article={mockArticle} showArticleDetail={() => {}} />
  );
  const titleElement = screen.getByText(/Ambipur/i);
  expect(titleElement).toBeInTheDocument();
  const locationElement = screen.getByText(/Ystalyfera/i);
  expect(locationElement).toBeInTheDocument();
});
