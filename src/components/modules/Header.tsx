import * as React from "react"

import { FaShippingFast } from "react-icons/fa"
import { HiMenuAlt3, HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { RiArrowDropRightLine } from "react-icons/ri"
import { VscClose } from "react-icons/vsc"

import { IconButton, LinkButton, Route, Ul } from ".."

export const Header = (props: { items?: { path: string, id: string, description: string }[] }) => {
  // Handle menu visibility.
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
    <nav className="overflow-scroll bg-primary shadow-lg fixed max-h-full w-full top-0 py-8 px-4 sm:px-8 z-2">
      <div className="flex items-center justify-between h-8">
        <Route href="/" icon={FaShippingFast} description={process.env.name} className="text-xl sm:text-2xl" />
        <IconButton icon={HiMenuAlt3} ariaLabel="Expandir menú desplegable" onClick={() => setMenuIsActive(true)} className={`${menuIsActive ? "hidden" : ""}`} />
        <IconButton icon={VscClose} ariaLabel="Cerrar menú desplegable" onClick={() => setMenuIsActive(false)} className={`${menuIsActive ? "" : "hidden"}`} />
      </div>
      <div ref={hiddenMenu} className={`${menuIsActive ? "" : "hidden"}`}>
        <Ul className={props.items ? `pt-4` : ""}>
          {/* Custom items */}
          {props.items
            ? Object.values(props.items).map((item, index) => (
                <li key={index} className="flex">
                  <Route href={`${item.path}${item.id}`} icon={RiArrowDropRightLine} description={item.description} onClick={() => setMenuIsActive(!menuIsActive)} className="text-lg sm:text-xl" />
                </li>
              ))
            : null}

          {/* Default items */}
          <li className="text-md flex justify-center pt-6">
            <LinkButton href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} />
          </li>
          <li className="text-md flex justify-center pt-2">
            <LinkButton
              href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
              icon={HiPhone}
              description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
            />
          </li>
        </Ul>
      </div>
    </nav>
  )
}
