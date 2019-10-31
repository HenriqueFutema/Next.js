import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Hello</h1>
    <Link href="/user">
      <a>Users</a>
    </Link>
  </div>
);

export default Home;
