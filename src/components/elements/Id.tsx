import * as React from "react"

interface IdProps {
  id: string;
}

class Id extends React.Component<IdProps> {
  render() {
    // These margin-Y values depend on Header element height and Section element inner padding.
    return <div id={this.props.id} className="absolute -my-36 lg:-my-46" />
  }
}

export default Id
