import { Header } from "./Header";

export const Base = (props: {breadcrumb: string; children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Header breadcrumb={props.breadcrumb} />
      <div className="mt-24">{props.children}</div>
    </>
  );
};
