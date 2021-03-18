import * as React from "react"

import { FaShippingFast } from "react-icons/fa"
import { HiMenuAlt3, HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { RiArrowDropRightLine } from "react-icons/ri"
import { VscClose } from "react-icons/vsc"

import { Button, Route } from ".."

export const Header = (props: { items?: { path: string, id: string, description: string }[] }) => {
  /* Handle menu visibility */
  const hiddenMenu: React.RefObject<HTMLDivElement> = React.createRef()
  const [menuIsActive, setMenuIsActive] = React.useState(false)
  React.useEffect(() => {
    const node = hiddenMenu.current
    if (menuIsActive) {
      node.classList.remove("hidden")
    }
    setTimeout(() => {
      if (menuIsActive) {
        node.classList.remove("hidden")
      } else {
        node.classList.add("hidden")
      }
    }, 100)
  }, [menuIsActive])

  return (
    <nav className="bg-primary shadow-lg text-light fixed w-full top-0 z-2">
      <div className="my-8 mx-4 sm:mx-8">
        <div className="flex justify-between">
          <Route href="/" description={process.env.name} icon={FaShippingFast} className="font-semibold text-xl" />
          <button onClick={() => setMenuIsActive(!menuIsActive)} className="text-3xl flex items-center h-8 w-8">
            <HiMenuAlt3 className={`${menuIsActive ? "hidden" : ""}`} />
            <VscClose className={`${menuIsActive ? "" : "hidden"}`} />
          </button>
        </div>
        <div ref={hiddenMenu} className={`${menuIsActive ? "" : "hidden"}`}>
          {/* Custom items */}
          <ul className="list-reset font-semibold text-lg flex-1 items-center justify-end mt-4 mb-6">
            {props.items
              ? Object.values(props.items).map((item, index) => (
                  <li key={index}>
                    <Route icon={RiArrowDropRightLine} href={`${item.path}${item.id}`} description={item.description} onClick={() => setMenuIsActive(!menuIsActive)} />
                  </li>
                ))
              : null}
          </ul>

          {/* Default items */}
          <ul className="list-reset text-md flex-1 items-center justify-end">
            <li className="mb-2">
              <Button href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} />
            </li>
            <li>
              <Button
                href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                icon={HiPhone}
                description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
