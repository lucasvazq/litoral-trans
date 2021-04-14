/* Used for next-pwa */

import * as React from "react"

import Paragraph from "../components/elements/Paragraph"
import EmptyPageBase from "../components/modules/EmptyPageBase"

class OfflineView extends React.Component {
  render() {
    return (
      <EmptyPageBase title="Problema de Red" description="Ha ocurrido un problema en su conexión">
        <Paragraph>No es posible conectarse a la página.</Paragraph>
        <Paragraph>Compruebe su conexión de red.</Paragraph>
      </EmptyPageBase>
    )
  }
}

export default OfflineView
