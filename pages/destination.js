import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';

function Destination() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Destination</title>
        <meta name='description' content='Destination for people' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>01</span> Pick your destination
        </h1>
        <div>
          <section></section>
          <section>
            <ul>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <h2></h2>
            <p></p>
            <div></div>
            <ul>
              <li>
                <p>Avg. Distance</p>
                <h4></h4>
              </li>
              <li>
                <p>Est. Travel TIme</p>
                <h4></h4>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Destination;
