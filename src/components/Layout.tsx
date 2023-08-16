import React, { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto container max-w-[1000px] min-h-[800px] md:min-h-[1250px] flex flex-col items-center font-sans-kr">
      {children}
    </main>
  )
}

export default Layout
