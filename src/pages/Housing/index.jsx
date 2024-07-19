import { useParams } from 'react-router-dom';
import advertisements from '../../data/housing_adverstisements.json';
import Slideshow from '../../components/SlideShow';

function Housing() {
  const { id } = useParams();
  const advertisement = advertisements.find(ad => ad.id === id);

  if (!advertisement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='housing'>
      <Slideshow pictures={advertisement.pictures} />
      <h1>{advertisement.title}</h1>
      <h2>{advertisement.location}</h2>
      <p>{advertisement.description}</p>
    </div>
  );
}

export default Housing;
