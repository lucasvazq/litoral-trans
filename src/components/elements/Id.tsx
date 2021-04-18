import * as React from "react"

interface IdProps {
  id: string;
}

class Id extends React.Component<IdProps> {
  render() {
    // This margins Y values depends on header nav height and section inner padding.
    return <div id={this.props.id} className="absolute -my-36 lg:-my-46" />
  }
}

export default Id
