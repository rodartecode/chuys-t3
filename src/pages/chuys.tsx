import { type NextPage } from "next";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const Chuys: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chuy&#39;s Tacos y Taquizas</title>
        <meta name="description" content="Chuy's Tacos y Taquizas" />
      </Head>
      <Header />
      <main>
        <h1>Chuys</h1>
      </main>
      <Footer />
    </>
  );
};

export default Chuys;