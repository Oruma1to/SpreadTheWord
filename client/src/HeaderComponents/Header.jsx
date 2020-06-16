import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'

export default function Header() {
  
  return (
      <div className="header-wrapper">
        <div className="site-title">SPREAD THE WORD</div>
        <div className="header-nav">
          <HeaderNav />
        </div>
      </div>
  )
}
