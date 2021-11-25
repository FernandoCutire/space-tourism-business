import Head from 'next/head';
import Image from 'next/image';
//import styles from  '../styles/Home.module.sass';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touriny Space</title>
        <meta
          name='description'
          content='An app created by Fernando and NornOrn'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar></Navbar>

      <main className='home'>
        <section className='home__main'>
          <article className='home__text--container'>
            <h2 className='home--subheading'>So, you want to travel to</h2>
            <h1 className='home--heading'>Space</h1>
            <p className='home--para'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <Link href='/destination' passHref>
            <a>
              <button
                className='home__explore--container'
                aria-expanded='false'
              >
                <span>Explore</span>
              </button>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
