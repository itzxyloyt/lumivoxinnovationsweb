import Head from 'next/Head';
import styles from '../styles/Home.module.css';

const apiUrl = process.env.API_URI;
const title1 = process.env.TITLE;
const seperator = process.env.SEPERATOR;
const title2 = process.env.TITLE2;
const db_uri = process.env.DATABASE_URL;

export default function Home(){
  return {
    <div className={styles.container}>
      <Head>
        <title>Lumivox Innovations</title>
        <meta name="description" content="Lumivox Innovations strives to build the future of technology for the better">
        <link ref="icon" href="http://db.lumivoxinnovations.xyz/">
    </Head>

  <main className={styles.main}>
<h1 className={styles.title}>Lumivox Innovations</h1>
  <p className={styles.description}>Lumivox Innovations Slogan</p>
    </main>
    </div>
};

export async function getStaticPaths() {
  const res = await fetch('http://api.lumivoxinnovations.xyz/data');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: {id: post.id.toString() },
  }));

  return { paths, fallaback: false };
}



export async function getServerSideProps(context) {
  const res = await fetch('http://api.lumivoxinnovations.xyz/data');
  const data = await res.json();

return {
  props: { data },
}
}
function Page({Page}) {
  return <div>{JSON.stringify(data)}</div>;
}

export default Page;
