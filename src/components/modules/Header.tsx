import * as React from "react"

import { FaShippingFast } from "react-icons/fa"
import { HiMenuAlt3, HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { RiArrowDropRightLine } from "react-icons/ri"
import { VscClose } from "react-icons/vsc"

import IconButton from "../elements/IconButton"
import LinkButton from "../elements/LinkButton"
import Route from "../elements/Route"
import Ul from "../elements/Ul"

interface HeaderProps {
  items?: { path: string, id: string, description: string }[];
}

interface HeaderState {
  menuIsActive: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  menuRef: React.RefObject<any>
  node: HTMLDivElement

  constructor(props: HeaderProps) {
    super(props)
    this.menuRef = React.createRef()
    this.state = {
      menuIsActive: false,
    }
  }

  componentDidMount() {
    this.node = this.menuRef.current
  }

  componentDidUpdate(_: HeaderProps, prevState: HeaderState) {
    if (prevState.menuIsActive !== this.state.menuIsActive) {
      if (this.state.menuIsActive) {
        this.node.classList.remove("hidden")
      } else {
        this.node.classList.add("hidden")
      }
    }
  }

  render() {
    return (
      <>
        <nav className="overflow-y-auto bg-primary shadow-lg fixed max-h-full w-full top-0 py-8 px-4 sm:px-8 z-2">
          <div className="flex items-center justify-between h-8">
            <Route href="/" icon={FaShippingFast} description={process.env.name} className="text-xl sm:text-2xl" />
            <IconButton
              icon={this.state.menuIsActive ? VscClose : HiMenuAlt3}
              ariaLabel={this.state.menuIsActive ? "Cerrar menú desplegable" : "Expandir menú desplegable"}
              onClick={() => this.setState({ menuIsActive: !this.state.menuIsActive })}
            />
          </div>
          <div ref={this.menuRef} className={this.state.menuIsActive ? "" : "hidden"} aria-hidden={!this.state.menuIsActive}>
            <Ul className={this.props.items ? "pt-4" : ""}>
              {/* Custom items */}
              {this.props.items
                ? Object.values(this.props.items).map((item, index) => (
                    <li key={index} className="flex">
                      <Route
                        href={`${item.path}${item.id}`}
                        icon={RiArrowDropRightLine}
                        description={item.description}
                        onClick={() => this.setState({ menuIsActive: false })}
                        className="text-lg sm:text-xl hover:text-primary-darker"
                      />
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
        <div className="h-8 py-8" />
      </>
    )
  }
}

export default Header
