import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../data/housing_adverstisements.json'
import { Link } from 'react-router-dom';

function Home() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    setAdvertisements(data);
  }, []);

  return (
    <div>
      <Banner />
      <div className='cards'>
        {advertisements.map(ad => (
          <Link key={ad.id} to={`/logements/${ad.id}`} className='card-link'>
            <Card key={ad.id} cover={ad.cover} title={ad.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
