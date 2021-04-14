import * as React from "react"

import Route from "../elements/Route"
import SVGWhatsapp from "../svg/SVGWhatsapp"

class Whatsapp extends React.Component {
  render() {
    return (
      <div className="fixed bottom-0 right-0 m-5 z-1">
        <Route
          href={`https://api.whatsapp.com/send?phone=${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}&text=${encodeURI(process.env.whatsappMessage)}`}
          className="block min-h-48px min-w-48px"
          aria-label="Enviar mensaje por Whatsapp"
        >
          <SVGWhatsapp />
        </Route>
      </div>
    )
  }
}

export default Whatsapp
