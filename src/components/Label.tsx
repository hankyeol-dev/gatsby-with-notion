import React from "react"

type LabelProps = {
  title: string
  emoji: string
  sectionNum: number
}

const Label = ({ title, emoji, sectionNum }: LabelProps) => {
  return (
    <section
      id={`section-label-${title}-${sectionNum}`}
      className="w-full h-full pl-5 mb-3 flex items-center justify-start"
    >
      <div
        id="section-label-sidebar"
        className="w-2 h-[24px] rounded-sm bg-slate-600 mx-2"
      />
      <p className="text-xl text-slate-600">
        {title} {emoji}
      </p>
    </section>
  )
}

export default Label
