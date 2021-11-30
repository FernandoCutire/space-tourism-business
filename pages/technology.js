import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import data from '../assets/starter/data.json';
import image1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import image2 from '../assets/technology/image-spaceport-portrait.jpg';
import image3 from '../assets/technology/image-space-capsule-portrait.jpg';

const images = [image1, image2, image3];

function Technology() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const list = document.querySelectorAll('li.tech-link');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
      i === index && list[i].classList.add('active');
    }
  }, [index]);
  return (
    <div className='technology'>
      <Head>
        <title>Technology</title>
        <meta name='description' content='Technology for space tourism' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar />
      <main className='tech-wrapper'>
        <h1 className='tech-header-text'>
          <span>03</span> Space Launch 101
        </h1>
        <div className='tech-container'>
          <section className='tech-text-wrapper'>
            <ul className='tech-links'>
              <li className='tech-link active' onClick={() => setIndex(0)}>
                1
              </li>
              <li className='tech-link' onClick={() => setIndex(1)}>
                2
              </li>
              <li className='tech-link' onClick={() => setIndex(2)}>
                3
              </li>
            </ul>
            <div className='tech-texts'>
              <h2 className='tech-subheading'>The technology ...</h2>
              <h1 className='tech-heading'>{data.technology[index].name}</h1>
              <p className='tech-description'>
                {data.technology[index].description}
              </p>
            </div>
          </section>
          <section className='tech-img-wrapper'>
            <Image src={images[index]} alt='Images' />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Technology;
