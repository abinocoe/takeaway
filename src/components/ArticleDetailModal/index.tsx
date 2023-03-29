import Modal from 'react-modal';
import { Article } from '../../types/article';
import './index.css';

interface ArticleDetailModalProps {
  close: () => void;
  isOpen: boolean;
  viewedArticle: Article;
}

const ArticleDetailModal = ({
  close,
  isOpen,
  viewedArticle,
}: ArticleDetailModalProps) => {
  const { description, images, title } = viewedArticle;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      appElement={document.getElementById('root') as HTMLElement}>
      <div className="modal-contents" data-testid="modal">
        <div className="tile">
          <div className="tile-contents">
            <button onClick={close} data-testid="close-button">
              Close detail modal
            </button>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
        {images.map((image) => (
          <div className="tile" key={image.uid}>
            <img
              className="article-image"
              alt={title}
              src={image.files.medium}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ArticleDetailModal;
