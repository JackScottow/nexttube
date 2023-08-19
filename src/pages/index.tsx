import { Poppins } from "next/font/google";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";
import Home from "../components/home";

const Page: NextPageWithLayout = () => {
  return <Home></Home>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
