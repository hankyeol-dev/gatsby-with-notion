import { Link } from "gatsby"
import React from "react"
import { CardDataTypes } from "types"

type CardProps = {
  datas: CardDataTypes
}

const Card = ({ datas }: CardProps) => {
  return (
    <Link
      to={datas.link}
      target="_blank"
      id={`${datas.category}-${datas.date}-${datas.id}`}
      className="group relative block h-32 md:w-1/4"
    >
      <span className="absolute inset-0 border-2 border-dashed border-black" />
      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="p-2 transition-opacity group-hover:absolute group-hover:opacity-0">
          <h2 className="text-lg font-medium">{datas.title}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            Go around the world
          </h3>

          <p className="mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            praesentium voluptatem omnis atque culpa repellendus.
          </p>

          <p className="mt-8 font-bold">Read more</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
