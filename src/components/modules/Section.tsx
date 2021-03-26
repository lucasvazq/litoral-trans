import * as React from "react"

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

class Section extends React.Component<SectionProps> {
  render() {
    return <div className={`flex flex-col items-center py-12 px-4 ${this.props.className || ""}`}>{this.props.children}</div>
  }
}

export default Section
