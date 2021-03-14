import { Footer, Header, Whatsapp } from "..";

export const Base = (props: { items?: { href: string, description: string }[] }) => (
  <>
    <Header items={props.items} />
    <Whatsapp />
    <div className="mt-24">{props.children}</div>
    <Footer />
  </>
);
