import { useState } from 'react';
import '../styles/Section.css';

// Import images
import alcantara1 from '../assets/images/alcantara1.jpg';
import alcantara2 from '../assets/images/alcantara2.jpg';
import alcantara3 from '../assets/images/alcantara3.jpg';
import alcantara4 from '../assets/images/alcantara4.jpg';
import alcantara5 from '../assets/images/alcantara5.jpg';
import alcantara6 from '../assets/images/alcantara6.jpg';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      img: alcantara1,
      title: "Personal Moment 1",
      description: "A captured memory"
    },
    {
      img: alcantara2,
      title: "Personal Moment 2",
      description: "A captured memory"
    },
    {
      img: alcantara3,
      title: "Personal Moment 3",
      description: "A captured memory"
    },
    {
      img: alcantara4,
      title: "Personal Moment 4",
      description: "A captured memory"
    },
    {
      img: alcantara5,
      title: "Personal Moment 5",
      description: "A captured memory"
    },
    {
      img: alcantara6,
      title: "Personal Moment 6",
      description: "A captured memory"
    }
  ];

  return (
    <section id="gallery" className="section">
      <div className="section-content">
        <h1 className="section-title">Photo Gallery</h1>
        
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="gallery-item section-card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.img} alt={photo.title} />
              <div className="gallery-item-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
              <img src={selectedPhoto.img} alt={selectedPhoto.title} />
              <div className="modal-details">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }


        .gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: pointer;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(92, 64, 51, 0.9);
          color: var(--cream);
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-item-overlay {
          transform: translateY(0);
        }

        .gallery-item-overlay h3 {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
        }

        .gallery-item-overlay p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem; /* Reduced padding */
        }

        .modal-content {
          background: var(--cream);
          padding: 1.5rem; /* Reduced padding */
          border-radius: 8px;
          max-width: 700px; /* Reduced max-width */
          width: 90%;
          position: relative;
        }

        .modal-content img {
          width: 100%;
          max-width: 80vw; /* Limit width to 80% of viewport */
          max-height: 80vh; /* Limit height to 80% of viewport */
          height: auto;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .modal-details {
          text-align: center;
        }

        .modal-details h3 {
          color: var(--primary-dark-brown);
          margin: 0 0 0.5rem;
        }

        .modal-details p {
          color: var(--text-dark);
          margin: 0;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary-dark-brown);
          color: var(--cream);
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          line-height: 1;
          padding: 0;
        }

        .modal-close:hover {
          background: var(--secondary-dark-brown);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
