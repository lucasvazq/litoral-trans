import * as React from "react"

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: string;
}

class Section extends React.Component<SectionProps> {
  render() {
    return (
      // Changes in the padding Y requires an adjustament in margin Y of Id element.
      <section className={`py-12 px-4 sm:px-8 w-full ${this.props.className || ""}`} style={this.props.style}>
        <div className="flex flex-col items-center container m-auto">{this.props.children}</div>
      </section>
    )
  }
}

export default Section
