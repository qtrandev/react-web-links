import React from 'react'

export default function Link({ link, onClick, onHover, onMouseOut }) {
  return (
    <li onMouseOver={onHover} onMouseOut={onMouseOut} onMou>
      <a href={link.url}>{link.text}</a> - <span onClick={onClick}>{link.title}</span>
      <br />
    </li>
  )
}
