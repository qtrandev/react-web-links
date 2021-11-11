import React from 'react'
import { useState } from 'react'
import Link from './Link'
import ImagePreview from './ImagePreview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

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
      <h1> <FontAwesomeIcon icon={faGlobeAmericas} color="lightgreen" /> Web Links <FontAwesomeIcon icon={faGlobeAsia} color="lightgreen" /> </h1>
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
