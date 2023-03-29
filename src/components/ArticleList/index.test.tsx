import { render, screen } from '@testing-library/react';
import ArticleList from '.';
import { mockArticle } from '../../testData/mockArticle';

describe('ArticleList', () => {
  it('renders a list of articles', () => {
    render(
      <ArticleList data={[mockArticle]} isError={false} isLoading={false} />
    );
    expect(screen.getByTestId('articles-success')).toHaveTextContent('Ambipur');
  });
  it('renders a message when no articles are available', () => {
    render(<ArticleList data={[]} isError={false} isLoading={false} />);
    expect(screen.getByTestId('articles-empty')).toHaveTextContent(
      'No articles available'
    );
  });
  it('renders a message when query error is present', () => {
    render(<ArticleList isError={true} isLoading={false} />);
    expect(screen.getByTestId('articles-error')).toHaveTextContent(
      'An error occurred'
    );
  });
  it('renders a message when in a loading state', () => {
    render(<ArticleList isError={false} isLoading={true} />);
    expect(screen.getByTestId('articles-loading')).toHaveTextContent('Loading');
  });
});
