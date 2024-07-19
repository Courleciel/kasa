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
    <div>
      <h1>{advertisement.title}</h1>
      <Slideshow pictures={advertisement.pictures} />
      <p>{advertisement.description}</p>
    </div>
  );
}

export default Housing;
