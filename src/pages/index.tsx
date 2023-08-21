import * as React from "react"
import { Layout, Header, Label, Divider, Grid } from "../components"
import { CardDataTypes } from "types"
import "../styles/global.css"
import Card from "components/Card"

const tempCardDatas: CardDataTypes[] = [
  {
    id: 1,
    emoji: "👨‍💻",
    category: "book",
    title: "책제목이 이정도로 길면 충분하겠지?",
    author: "작가이름도 이정도면?",
    date: "2023-08-01",
    link: "https://hankyeolk.notion.site/7bcc65771277402b9a72fec97c53ef3d?pvs=4",
    summary:
      "책이나 글에 대한 짧은 내 생각을 요약해서 한 줄로 정리하여 보여주면 이정도가 충분할까?",
  },
  {
    id: 2,
    emoji: "🚀",
    category: "book",
    title: "책제목이 이정도로 길면 충분하겠지2?",
    author: "작가이름도 이정도면2?",
    date: "2023-07-30",
    link: "https://hankyeolk.notion.site/7bcc65771277402b9a72fec97c53ef3d?pvs=4",
    summary:
      "책이나 글에 대한 짧은 내 생각을 요약해서 한 줄로 정리하여 보여주면 이정도가 충분할까?",
  },
]

export default function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <Divider />
      <Label title="책" emoji="📚" sectionNum={0} />
      <Grid>
        <Card datas={tempCardDatas[0]} />
      </Grid>
    </Layout>
  )
}
