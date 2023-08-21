import React, { ReactNode } from "react"

type GridProps = {
  children: ReactNode
}

const Grid = ({ children }: GridProps) => {
  return <div className="w-full flex flex-wrap gap-3 p-5">{children}</div>
}

export default Grid
