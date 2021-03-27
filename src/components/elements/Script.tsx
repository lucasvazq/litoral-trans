import * as React from "react"

interface ScriptProps {
  data: string;
}

class Script extends React.Component<ScriptProps> {
  render() {
    return <script dangerouslySetInnerHTML={{ __html: this.props.data.replace(/\n\s*/g, "") }} />
  }
}

export default Script
