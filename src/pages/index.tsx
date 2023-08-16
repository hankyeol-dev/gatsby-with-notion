import * as React from "react"
import { Layout, Header, Label, Divider } from "../components"
import "../styles/global.css"

export default function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <Divider />
      <Label title="책" emoji="📚" sectionNum={0} />
    </Layout>
  )
}
