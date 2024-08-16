import { useParams, Navigate } from 'react-router-dom';
import advertisements from '../../data/housing_adverstisements.json';
import Slideshow from '../../components/SlideShow';
import Collapse from '../../components/Collapse';

function Housing() {
  const { id } = useParams();
  const advertisement = advertisements.find(ad => ad.id === id);

  if (!advertisement) {
    return <Navigate to="/error" />;
  }

  const rating = Number(advertisement.rating);

  return (
    <div className='housing'>
      <Slideshow pictures={advertisement.pictures} />

      <div className='housing-header'>
        <div className='housing-info'>
          <h1>{advertisement.title}</h1>
          <h2>{advertisement.location}</h2>
        </div>
        <div className='host-section'>
          <div className='host-info'>
            <div className='host-details'>
              <p className='host-name'>{advertisement.host.name}</p>
            </div>
            <img src={advertisement.host.picture} alt={advertisement.host.name} className='host-picture' />
          </div>
          <div className='host-rating'>
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='housing-tags'>
        {advertisement.tags.map((tag, index) => (
          <span key={index} className='housing-tag'>{tag}</span>
        ))}
      </div>

      <div className='housing_elements'>
        <Collapse title="Description" content={advertisement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {advertisement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Housing;
