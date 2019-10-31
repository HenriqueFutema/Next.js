import React from "react";

import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Hello</h1>
    <Link href="/user">
      <a>Users</a>
    </Link>
  </div>
);

export default Home;
