import React from "react";

import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/withAnalytics.js";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/logo.png" width="200" />
    <Title>Hello</Title>
    <Link href="/user">
      <a>Users</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
