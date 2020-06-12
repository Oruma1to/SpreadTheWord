import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'
// import Logo from './Logo'

export default function Header() {
  return (
    <div className="header-container">
      {/* <div className="h-logo-container">
        <Logo />
      </div> */}
      <div className="h-nav-container">
        <HeaderNav />
      </div>
    </div>
  )
}
