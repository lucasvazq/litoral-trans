import { ReactNode } from "react";

export const Paragraph = (props: { children: ReactNode, className?: string }) => <p className={`max-w-prose ${props.className || ""}`}>{props.children}</p>;
