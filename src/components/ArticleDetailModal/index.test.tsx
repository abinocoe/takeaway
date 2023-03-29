import { fireEvent, render, screen } from '@testing-library/react';
import ArticleDetailModal from '.';
import { mockArticle } from '../../testData/mockArticle';

describe('ArticleDetailModal', () => {
  it('renders a modal', () => {
    render(
      <ArticleDetailModal
        close={jest.fn()}
        isOpen={true}
        viewedArticle={mockArticle}
      />
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('does not render if not open', () => {
    render(
      <ArticleDetailModal
        close={jest.fn()}
        isOpen={false}
        viewedArticle={mockArticle}
      />
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
  it('calls the close handler on button click', () => {
    const closeSpy = jest.fn();
    render(
      <ArticleDetailModal
        close={closeSpy}
        isOpen={true}
        viewedArticle={mockArticle}
      />
    );
    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
