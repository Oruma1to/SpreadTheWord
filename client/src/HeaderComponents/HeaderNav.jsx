import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderNav.css'

export default function HeaderNav() {
  return (
    <div className="headerNavContainer">
      <Link to="/" className="headerNavLink">Home</Link>
      <Link to="" className="headerNavLink">Latest</Link>
      <Link to="" className="headerNavLink">Beginners Guide</Link>
      <Link to="" className="headerNavLink">Youtube Creators</Link>
      <Link to="" className="headerNavLink">Twitch Creators</Link>
      <Link to="/user/login" className="headerNavLink">Sign In</Link>
      <Link to="/user/register" className="headerNavLink">Sign Up For an Account</Link>
    </div>
  )
}
