import Head from "next/head";
import { Header } from "./header";

export const Base = ({ title: string; children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* description and others SEO tools */}
      </Head>
      <Header />
      <div className="m-8 pt-28">{children}</div>
    </>
  );
};
