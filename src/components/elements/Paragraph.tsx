import * as React from "react"

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

class Paragraph extends React.Component<ParagraphProps> {
  render() {
    return <p className={`break-word max-w-prose ${this.props.className || ""}`}>{this.props.children}</p>
  }
}

export default Paragraph
