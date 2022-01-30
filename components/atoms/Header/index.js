import Head from "next/head";

export const ComponentHeader = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
