import * as React from "react"

import Paragraph from "../components/elements/Paragraph"
import EmptyPageBase from "../components/modules/EmptyPageBase"

class OfflineView extends React.Component {
    render () {
        return <EmptyPageBase
          title="El contenido no existe"
          description="El contenido que está buscando no existe"
          >
                <Paragraph>El contenido que está buscando no existe.</Paragraph>
        </EmptyPageBase>
    }
}

export default OfflineView
