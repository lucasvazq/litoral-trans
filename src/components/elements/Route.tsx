import Link from "next/link";
import { IconType } from "react-icons";

export const Route = (props: {href: string; description: string | JSX.Element | JSX.Element[]; icon?: IconType; className?: string}) => {
    const Icon = props.icon;
    return (
        <div className="flex items-center">
            <Link href={props.href}>
                <a className={`inline-block font-sans w-max ${props.className ? props.className : ''}`}>
                    <div className="flex items-center">
                        {Icon ? <Icon className="inline-block mr-1"/> : null}
                        {props.description}
                    </div>
                </a>
            </Link>
        </div>
    )
}