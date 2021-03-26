import * as React from "react"

import dynamic from "next/dynamic"

const IconButton = dynamic(() => import("../elements/IconButton"))
const LinkButton = dynamic(() => import("../elements/LinkButton"))
const Route = dynamic(() => import("../elements/Route"))
const Ul = dynamic(() => import("../elements/Ul"))
const SVGFaShippingFast = dynamic(() => import("../svg/SVGFaShippingFast"))
const SVGHiMenuAlt3 = dynamic(() => import("../svg/SVGHiMenuAlt3"))
const SVGHiPhone = dynamic(() => import("../svg/SVGHiPhone"))
const SVGMdEmail = dynamic(() => import("../svg/SVGMdEmail"))
const SVGRiArrowDropRightLine = dynamic(() => import("../svg/SVGRiArrowDropRightLine"))
const SVGVscClose = dynamic(() => import("../svg/SVGVscClose"))

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
      <nav className="overflow-y-auto bg-primary shadow-lg fixed max-h-full w-full top-0 py-8 px-4 sm:px-8 z-2">
        <div className="flex items-center justify-between h-8">
          <Route href="/" icon={SVGFaShippingFast} description={process.env.name} className="text-xl sm:text-2xl" />
          <IconButton icon={SVGHiMenuAlt3} ariaLabel="Expandir menú desplegable" onClick={() => this.setState({ menuIsActive: true })} className={`${this.state.menuIsActive ? "hidden" : ""}`} />
          <IconButton icon={SVGVscClose} ariaLabel="Cerrar menú desplegable" onClick={() => this.setState({ menuIsActive: false })} className={`${this.state.menuIsActive ? "" : "hidden"}`} />
        </div>
        <div ref={this.menuRef} className={`${this.state.menuIsActive ? "" : "hidden"}`}>
          <Ul className={this.props.items ? "pt-4" : ""}>
            {/* Custom items */}
            {this.props.items
              ? Object.values(this.props.items).map((item, index) => (
                  <li key={index} className="flex">
                    <Route
                      href={`${item.path}${item.id}`}
                      icon={SVGRiArrowDropRightLine}
                      description={item.description}
                      onClick={() => this.setState({ menuIsActive: false })}
                      className="text-lg sm:text-xl hover:text-primary-darker"
                    />
                  </li>
                ))
              : null}

            {/* Default items */}
            <li className="text-md flex justify-center pt-6">
              <LinkButton href={`mailto:${process.env.email}`} icon={SVGMdEmail} description={process.env.email} />
            </li>
            <li className="text-md flex justify-center pt-2">
              <LinkButton
                href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                icon={SVGHiPhone}
                description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
              />
            </li>
          </Ul>
        </div>
      </nav>
    )
  }
}

export default Header
