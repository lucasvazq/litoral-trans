import * as React from "react"

import { WithContext, Thing } from "schema-dts"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"
import Whatsapp from "./Whatsapp"

interface BaseProps {
  title: string;
  description: string;
  path: string;
  structuredData: WithContext<Thing>;
  children: React.ReactNode;
  inlineItems?: { path: string, id: string, description: string }[];
  expandableItems?: { path: string, id: string, description: string }[];
}

/**
 * Base component that indexes the view and populate it with default elements.
 */
class Base extends React.Component<BaseProps> {
  render() {
    return (
      <>
        <SEO title={this.props.title} description={this.props.description} path={this.props.path} structuredData={this.props.structuredData} />
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
