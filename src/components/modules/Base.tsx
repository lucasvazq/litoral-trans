import * as React from "react"

import Footer from "./Footer"
import Header from "./Header"
import Whatsapp from "./Whatsapp"

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
