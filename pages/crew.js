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
          Crew <a href='https://fernandocutire.com'>Fercu and Asley</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Crew;