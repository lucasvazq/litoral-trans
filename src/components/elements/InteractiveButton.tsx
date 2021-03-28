import * as React from "react"

interface InteractiveButtonProps {
  icon: React.ComponentType;
  ariaLabel: string;
  onClick: React.MouseEventHandler;
  className?: string;
}

class InteractiveButton extends React.Component<InteractiveButtonProps> {
  render() {
    return (
      <button type="button" aria-label={this.props.ariaLabel} onClick={this.props.onClick} className={`focus:outline-none text-3xl ${this.props.className || ""}`}>
        <this.props.icon />
      </button>
    )
  }
}

export default InteractiveButton
