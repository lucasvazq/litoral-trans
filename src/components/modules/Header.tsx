import * as React from "react"

import { HiMenuAlt3, HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { RiArrowDropRightLine } from "react-icons/ri"
import { VscClose } from "react-icons/vsc"

import BrandPresentation from "./BrandPresentation"
import Section from "./Section"
import InteractiveButton from "../elements/InteractiveButton"
import LinkButton from "../elements/LinkButton"
import PlainLinkButton from "../elements/PlainLinkButton"
import Route from "../elements/Route"
import Ul from "../elements/Ul"

interface HeaderProps {
  expandableItems?: { path: string, id: string, description: string }[];
  inlineItems: { path: string, id: string, description: string }[];
}

interface HeaderState {
  menuIsActive: boolean;
  clientWidth?: number;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  menuRef: React.RefObject<any>
  node: HTMLDivElement

  /*
  The sticky display is a good approach, but I have problems when the height of the screen is too small and
  need to scroll through the expandable menu to see the items.
  So my solution was to use the header with the fixed display and commensurate its size with another
  element that uses the same classes that define its height.
  These classes are listed below, but first, a comment: we use pt and pb instead of py because the firsts take priority over the last one,
  and the Section element has a py defined in their classes.
  A change in these values requires also an adjustment in the margin-Y value of the Id element.
  */
  inlineContentHeight = "h-8 lg:h-18"
  sectionYPadding = "pt-8 pb-8"

  constructor(props: HeaderProps) {
    super(props)
    this.menuRef = React.createRef()
    this.state = {
      menuIsActive: false,
      clientWidth: null,
    }
  }

  componentDidMount() {
    this.node = this.menuRef.current
    this.updateClientWidth()
    window.addEventListener("resize", this.updateClientWidth)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateClientWidth)
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

  updateClientWidth = () => {
    this.setState({ clientWidth: document.body.clientWidth })
  }

  render() {
    return (
      <>
        {/* Header */}
        <nav className={`focus:outline-none overflow-y-auto shadow-lg fixed max-h-screen top-0 z-2`} tabIndex={0}>
          <Section
            className={`bg-primary w-screen ${this.sectionYPadding} ${this.state.clientWidth ? "" : "w-screen"}`}
            {...(this.state.clientWidth ? { style: { width: this.state.clientWidth } } : {})}
          >
            <div className={`flex items-center justify-between w-full ${this.inlineContentHeight}`}>
              <Route href="/">
                <BrandPresentation />
              </Route>

              {/* Inline navbar options. Only visible at large resolution. */}
              <ul className="hidden lg:flex">
                {/* Custom items. */}
                {this.props.inlineItems
                  ? Object.values(this.props.inlineItems).map((item, index) => (
                      <li key={index} className={index ? "pl-8" : ""}>
                        <PlainLinkButton href={`${item.path}${item.id}`} className="lg:text-lg">
                          {item.description}
                        </PlainLinkButton>
                      </li>
                    ))
                  : null}
              </ul>

              {/* Button used to expand an options menu. Invisible at large resolution. */}
              <InteractiveButton
                icon={this.state.menuIsActive ? VscClose : HiMenuAlt3}
                aria-label={this.state.menuIsActive ? "Cerrar menú desplegable" : "Expandir menú desplegable"}
                onClick={() => this.setState({ menuIsActive: !this.state.menuIsActive })}
                className="lg:hidden"
              />
            </div>

            {/* The expandable options menu. */}
            <div ref={this.menuRef} className={`lg:hidden w-full ${this.state.menuIsActive ? "" : "hidden"}`} aria-hidden={!this.state.menuIsActive}>
              <Ul className={this.props.expandableItems ? "pt-4" : ""}>
                {/* Custom items. */}
                {this.props.expandableItems
                  ? Object.values(this.props.expandableItems).map((item, index) => (
                      <li key={index} className="flex">
                        <Route href={`${item.path}${item.id}`} onClick={() => this.setState({ menuIsActive: false })} className="text-lg sm:text-xl hover:text-primary-darker">
                          <RiArrowDropRightLine className="mr-1" />
                          {item.description}
                        </Route>
                      </li>
                    ))
                  : null}

                {/* Default items. */}
                <li className="text-md flex justify-center pt-6">
                  <LinkButton href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} newTab={true} />
                </li>
                <li className="text-md flex justify-center pt-2">
                  <LinkButton
                    href={`tel:+${process.env.telCountryCode}${process.env.telPrefix}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                    icon={HiPhone}
                    description={`+${process.env.telCountryCode} ${process.env.telPrefix} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
                    newTab={true}
                  />
                </li>
              </Ul>
            </div>
          </Section>
        </nav>

        {/* Element that compensates the missing height of the header in the content flow. */}
        <div className={this.sectionYPadding}>
          <div className={this.inlineContentHeight} />
        </div>
      </>
    )
  }
}

export default Header
