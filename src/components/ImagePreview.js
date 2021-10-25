import React from 'react'
import '../App.css'

export default function ImagePreview({ link }) {
  return (
    <img className="imagePreview" src={link.image}></img>
  )
}
