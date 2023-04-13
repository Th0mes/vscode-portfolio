import { type NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components";

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hi, I{`'`}m Thomes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="flex h-full w-full items-center justify-center">2</h1>
      </Layout>
    </>
  );
};

export default Test;
