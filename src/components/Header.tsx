import React from "react"

const Header = () => {
  return (
    <header
      id="site-header"
      className="w-full p-5 flex flex-col items-start gap-y-4"
    >
      <h1 className="font-sans-kr text-6xl font-bold">한결</h1>
      <p className="font-sans-kr text-xl font-normal ml-2">
        마, 읽고 쓰고 보고 듣고 나누고 하는거 다 합니다.
      </p>
      <article className="w-full ml-2 flex flex-col gap-y-1 font-light text-sm">
        <p>
          긴 글은{" "}
          <a
            href={"https://hankyeol-dev.github.io/hankyeolk"}
            className="text-blue-500 cursor-pointer hover:text-blue-700 hover:ease-in hover:duration-300"
          >
            블로그
          </a>
          를 통해서 발행하고 있습니다.
        </p>
        <p>
          이 페이지에서는 짧은 호흡으로 제가 평소에 읽고, 쓰고, 보고, 듣고,
          나누고 하는 모든 내용을 기록하여 공유하고자 합니다.
        </p>
        <p>TypeScript, Gatsby, TailwindCSS, Notion API로 만들어갑니다. 🚀</p>
      </article>
    </header>
  )
}

export default Header
