import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderNav.css'

export default function HeaderNav() {
  return (
    <div className="headerNavContainer">
      <Link to="" className="headerNavLink">Home</Link>
      <Link to="/post/1" className="headerNavLink">Latest</Link>
      <Link to="" className="headerNavLink">Reviews</Link>
      <Link to="" className="headerNavLink">Beginners Guide</Link>
      <Link to="" className="headerNavLink">Youtube Creators</Link>
      <Link to="" className="headerNavLink">Twitch Creators</Link>
      <Link to="" className="headerNavLink">Video</Link>
    </div>
  )
}
