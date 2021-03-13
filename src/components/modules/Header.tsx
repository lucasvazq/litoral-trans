import { useState, createRef, RefObject, useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { HiPhone, HiMenuAlt3 } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Route } from "..";

export const Header = (props: { breadcrumb?: string, items?: { href: string, description: string }[] }) => {
  const hiddenMenu: RefObject<HTMLDivElement> = createRef();
  const navBar: RefObject<HTMLElement> = createRef();
  const [menuIsActive, setMenuIsActive] = useState(false);
  useEffect(() => {
    const node = hiddenMenu.current;
    if (menuIsActive) {
      node.classList.remove("hidden");
    }
    setTimeout(() => {
      if (menuIsActive) {
        node.classList.remove("hidden");
      } else {
        node.classList.add("hidden");
      }
    }, 100);
  }, [menuIsActive]);

  return (
    <nav ref={navBar} className="bg-primary text-light fixed shadow-lg top-0 w-full z-2">
      <div className="m-8">
        <div className="flex justify-between">
          <Route href="/" description={process.env.name} icon={FaShippingFast} className="text-xl font-semibold" />
          <button onClick={() => setMenuIsActive(!menuIsActive)} className="text-3xl flex items-center h-8 w-8">
            <HiMenuAlt3 className={`${menuIsActive ? "hidden" : ""}`} />
            <VscClose className={`${menuIsActive ? "" : "hidden"}`} />
          </button>
        </div>
        <div ref={hiddenMenu} className={`${menuIsActive ? "opacity-100" : "opacity-0"} mt-6 mb-1`}>
          <ul className="list-reset flex-1 justify-end items-center text-lg my-4 font-semibold">
            {props.items
              ? props.items.map((item, index) => (
                  <li key={index}>
                    <Route icon={RiArrowDropRightLine} href={item.href} description={item.description} onClick={() => setMenuIsActive(!menuIsActive)} />
                  </li>
                ))
              : null}
          </ul>
          <ul className="list-reset flex-1 justify-end items-center text-md ml-5">
            <li>
              <Route href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} />
            </li>
            <li>
              <Route
                href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                icon={HiPhone}
                description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
