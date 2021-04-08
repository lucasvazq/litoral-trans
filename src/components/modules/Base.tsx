import * as React from "react"

import Footer from "./Footer"
import Header from "./Header"
import Whatsapp from "./Whatsapp"

interface BaseProps {
  children: React.ReactNode;
  inlineItems?: { path: string, id: string, description: string }[];
  expandableItems?: { path: string, id: string, description: string }[];
}

class Base extends React.Component<BaseProps> {
  render() {
    return (
      <>
        <Header inlineItems={this.props.inlineItems} expandableItems={this.props.expandableItems} />

        {/*
          Keep floating icons after the header and before the main content
          so that they take priority in tabindex-based navigation.
        */}
        <Whatsapp />

        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default Base
