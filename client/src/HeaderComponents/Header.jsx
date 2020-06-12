import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'

export default function Header() {
  return (
    <div className="header-container">
      <div className="nav-container">
        <HeaderNav />
      </div>
    </div>
  )
}
