import React from 'react'

export default function Link({ link }) {
  return (
    <li><a href={link.url}>{link.text}</a> - {link.title}<br/></li>
  )
}
