import React from "react";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics.js";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/logo.png" width="200" />
    <h1>Hello</h1>
    <Link href="/user">
      <a>Users</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
