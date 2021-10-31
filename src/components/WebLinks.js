import React from 'react'
import { useState } from 'react'
import Link from './Link'
import ImagePreview from './ImagePreview'

export default function WebLinks({ links }) {
  const [selected, setSelected] = useState()

  const handleClick = (e, link) => {
    e.preventDefault()
    setSelected(link)
  }

  const handleMouseOut = (e) => {
    e.preventDefault()
    setSelected()
  }

  return (
    <>
      {selected && <ImagePreview link={selected} />}
      <h1> Web Links </h1>
      <ul>
        {links.map((link) => {
          return (
            <Link
              onClick={(e) => handleClick(e, link)}
              onMouseOut={(e) => handleMouseOut(e)}
              key={link.text}
              link={link}
            />
          )
        })}
      </ul>
    </>
  )
}
