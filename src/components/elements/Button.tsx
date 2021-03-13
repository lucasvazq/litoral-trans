import { IconType } from "react-icons";
import { Route } from "..";

export const Button = (props: { href: string, icon: IconType, description: JSX.Element | JSX.Element[] | string }) => {
  return (
    <div className="rounded-lg bg-secondary m-2 p-2 w-80 flex justify-center">
      <Route href={props.href} icon={props.icon} description={props.description} />
    </div>
  );
};
