import * as React from "react"

import { Footer, Header, Whatsapp } from ".."

interface BaseProps {
  children: React.ReactNode | React.ReactNode[]
  items?: { path: string, id: string, description: string }[]
}

export class Base extends React.Component<BaseProps> {
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
