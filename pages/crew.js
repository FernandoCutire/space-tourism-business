import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';

function Crew() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crew</title>
        <meta name='description' content='Meet the crew' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>02</span> Meet your crew
        </h1>
      </main>

      <div>
        <section>
          <h3></h3>
          <h2></h2>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section>{/* <img src=''></img> */}</section>
      </div>
    </div>
  );
}

export default Crew;
