import React from 'react'

export default function Link({ link, onClick, onMouseOut }) {
  return (
    <li>
      <a href={link.url}>{link.text}</a> - <span onClick={onClick} >{link.title}</span>
    </li>
  )
}
