import * as React from "react"

interface IdProps {
  id: string;
}

class Id extends React.Component<IdProps> {
  render() {
    return <div id={this.props.id} className="absolute -my-36" />
  }
}

export default Id
