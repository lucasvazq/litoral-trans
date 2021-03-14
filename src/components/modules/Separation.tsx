import { ReactNode } from "react";

export const Separation = (props: { children: ReactNode[] }) => <div className="bg-primary text-light text-lg main-font p-8">{props.children}</div>;
