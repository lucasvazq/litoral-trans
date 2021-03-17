import * as React from "react"

import { Footer, Header, Whatsapp } from ".."

export const Base = (props: { children: React.ReactNode | React.ReactNode[], items?: { path: string, id: string, description: string }[] }) => (
  <>
    <Header items={props.items} />
    <Whatsapp />
    <div className="mt-24">{props.children}</div>
    <Footer />
  </>
)
