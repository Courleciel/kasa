import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../data/housing_adverstisements.json'

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
          <Card key={ad.id} cover={ad.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
