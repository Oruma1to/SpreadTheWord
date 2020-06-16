import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'

export default function Header(props) {
  
  return (
      <div className="header-wrapper">
        <div className="site-title">SPREAD THE WORD</div>
        <div className="header-nav">
        <HeaderNav
          {...props}/>
        </div>
      </div>
  )
}
