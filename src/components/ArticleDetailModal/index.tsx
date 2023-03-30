import Modal from 'react-modal';
import { Wrapper } from '@googlemaps/react-wrapper';
import { Article } from '../../types/article';
import Map from '../Map';
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
  const { description, images, location, title } = viewedArticle;
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
            <p>Location: {location.town}</p>
            <p>{location.distance} units of distance from you :)</p>
            <Wrapper apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY || ''}>
              <Map
                latitude={location.latitude}
                longitude={location.longitude}
              />
            </Wrapper>
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
