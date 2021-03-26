import * as React from "react"

import dynamic from "next/dynamic"

const Footer = dynamic(() => import("./Footer"))
const Header = dynamic(() => import("./Header"))
const Whatsapp = dynamic(() => import("./Whatsapp"))

interface BaseProps {
  children: React.ReactNode | React.ReactNode[];
  items?: { path: string, id: string, description: string }[];
}

class Base extends React.Component<BaseProps> {
  render() {
    return (
      <>
        <Header items={this.props.items} />
        <Whatsapp />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default Base
