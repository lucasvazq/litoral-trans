import { ReactNode } from "react";

import { IconType } from "react-icons";

import { Route } from "..";

export const Button = (props: { href: string, icon: IconType, description: ReactNode[] }) => (
  <div className="rounded-lg bg-secondary m-2">
    <Route href={props.href} icon={props.icon} description={props.description} className="p-2 w-full flex justify-center" />
  </div>
);
