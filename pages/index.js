import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import { Header } from "../components/Header";
import { Statistic } from "../components/Statistics";
import Loading from "../components/Loading/Loading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Duunihakuri | Etusivu</title>
        <meta
          name="description"
          content="Duunihakuri | Löydä Unelmiesi Työpaikka Etsi työpaikkoja ympäri Suomea"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <hr />
      <Header />

      <Statistic />
      <main className={styles.main}>
        <HeroSection />
      </main>
    </div>
  );
}
