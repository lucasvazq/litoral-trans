import * as React from "react"

interface ScriptProps {
  data: string;
  type?: string;
}

class Script extends React.Component<ScriptProps> {
  render() {
    return <script dangerouslySetInnerHTML={{ __html: this.props.data.replace(/\n\s*/g, "") }} type={this.props.type} />
  }
}

export default Script
