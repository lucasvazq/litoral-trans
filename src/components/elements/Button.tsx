import * as React from "react"

import dynamic from 'next/dynamic'

import { IconType, Route } from '..'

interface IconButtonProps {
  icon: IconType,
  ariaLabel: string,
  onClick: React.MouseEventHandler,
  className?: string,
}



export class IconButton extends React.Component<IconButtonProps> {
  render() {
    return (
      <button type="button" aria-label={this.props.ariaLabel} onClick={this.props.onClick} className={`focus:outline-none text-3xl ${this.props.className || ""}`}><this.props.icon /></button>
    )
  }
}
