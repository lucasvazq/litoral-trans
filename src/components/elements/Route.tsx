import Link from "next/link";
import { IconType } from "react-icons";
import { MouseEventHandler } from "react";

export const Route = (props: {
  href: string,
  description?: string | JSX.Element | JSX.Element[],
  icon?: IconType,
  className?: string,
  onClick?: MouseEventHandler,
  style?: { [key: string]: any },
}) => {
  return (
    <div className="flex items-center">
      <Link href={props.href}>
        <a
          className={`inline-block font-sans ${props.className ? props.className : ""} ${props.description && props.icon ? "w-max" : ""}`}
          onClick={props.onClick ? props.onClick : null}
          style={props.style ? props.style : null}
        >
          <div className="flex items-center">
            {props.icon ? <props.icon className={`inline-block ${props.description ? "mr-1" : ""}`} /> : null}
            {props.description}
          </div>
        </a>
      </Link>
    </div>
  );
};
