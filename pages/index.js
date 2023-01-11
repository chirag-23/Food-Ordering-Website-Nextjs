import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cherry's Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in Delhi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await axios.get("https://cherrypizzas.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
