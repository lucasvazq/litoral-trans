import * as React from "react"

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
}

class Section extends React.Component<SectionProps> {
  render() {
    return (
      // A change in the padding-Y values requires also an adjustment in the margin-Y value of the Id element.
      <section className={`py-12 px-4 sm:px-8 w-full ${this.props.className || ""}`} {...(this.props.width ? { style: { width: this.props.width } } : {})}>
        <div className="flex flex-col items-center container m-auto">{this.props.children}</div>
      </section>
    )
  }
}

export default Section
