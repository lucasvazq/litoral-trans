import { Header, Whatsapp, Footer } from "..";

export const Base = (props: { breadcrumb?: string, children: JSX.Element | JSX.Element[], items?: { href: string, description: string }[] }) => {
  return (
    <>
      <Header breadcrumb={props.breadcrumb} items={props.items} />
      <Whatsapp />
      <div className="mt-24">{props.children}</div>
      <Footer />
    </>
  );
};
