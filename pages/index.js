import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Apps with Fercu and Asley</title>
        <meta
          name='description'
          content='An app created by Fernando and Asley'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <main className={styles.main}>
        <section>
          <article>
            <h2>So, you want to go to space</h2>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <button>
            <span>Explore</span>
          </button>
        </section>
      </main>
    </div>
  );
}
