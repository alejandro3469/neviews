import Head from "next/head";
import Image from "next/image";
import Layout from "./components/Layout/Layout";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Index
      </Layout>
    </div>
  );
}
