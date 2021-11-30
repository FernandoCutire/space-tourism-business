import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import data from '../assets/starter/data.json';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

const images = [moon, mars, europa, titan];

function Destination() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const list = document.querySelectorAll('li.planet-link');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
      i === index && list[i].classList.add('active');
    }
  }, [index]);

  return (
    <div>
      <Head>
        <title>Destination</title>
        <meta name='description' content='Destination for people' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar />
      <div className='destination'>
        <main className='planet-wrapper'>
          <h1 className='planet-header-text'>
            <span>01</span> Pick your destination
          </h1>
          <div className='planet-container'>
            <section className='planet-img-wrapper'>
              <Image src={images[index]} alt={data.destinations[index].name} />
            </section>
            <section className='planet-text-wrapper'>
              <ul className='planet-links'>
                <li className='planet-link active' onClick={() => setIndex(0)}>
                  Moon
                </li>
                <li className='planet-link' onClick={() => setIndex(1)}>
                  Mars
                </li>
                <li className='planet-link' onClick={() => setIndex(2)}>
                  Europa
                </li>
                <li className='planet-link' onClick={() => setIndex(3)}>
                  Titan
                </li>
              </ul>
              <h2 className='planet--name'>{data.destinations[index].name}</h2>
              <p className='planet--description'>
                {data.destinations[index].description}
              </p>
              <ul className='planet--stats-container'>
                <li className='planet--stats'>
                  <p className='heading'>Avg. Distance</p>
                  <h4 className='value'>{data.destinations[index].distance}</h4>
                </li>
                <li className='planet--stats'>
                  <p className='heading'>Est. Travel Time</p>
                  <h4 className='value'>{data.destinations[index].travel}</h4>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Destination;
