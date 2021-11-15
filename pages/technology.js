import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';

function Technology() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Technology</title>
        <meta name='description' content='Technology for space tourism' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <main>
        <h1>
          <span>03</span> Space Launch 101
        </h1>
        <div>
          <section>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <div>
              <h2>The technology ...</h2>
              <h1></h1>
              <p></p>
            </div>
          </section>
          <section></section>
        </div>
      </main>
    </div>
  );
}

export default Technology;
