import React from 'react'

export default function Link({ link, onHover, onMouseOut }) {
  return (
    <li onMouseOver={onHover} onMouseOut={onMouseOut}><a href={link.url}>{link.text}</a> - {link.title}<br/></li>
  )
}
