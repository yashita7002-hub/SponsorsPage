import React from 'react'
import './SponsorCard.css'

function SponsorCard({ title, logo, name, tagline }) {
  return (
    <article className="sponsor-card">
      <h3>{title}</h3>
      <img src={logo} alt={name} />
      <p>{name}</p>
      <small>{tagline}</small>
    </article>
  )
}

export default SponsorCard