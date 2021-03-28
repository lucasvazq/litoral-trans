import * as React from "react"

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

class Section extends React.Component<SectionProps> {
  render() {
    return (
      <section className={`py-12 px-4 sm:px-8 w-screen ${this.props.className || ""}`}>
        <div className="flex flex-col items-center container m-auto">{this.props.children}</div>
      </section>
    )
  }
}

export default Section
