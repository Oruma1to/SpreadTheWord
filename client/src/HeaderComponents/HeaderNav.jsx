import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderNav.css'

export default function HeaderNav(props) {

  return (
    <div className="headerNavContainer">
      <Link to="/" className="headerNavLink">Home</Link>
      <Link to="" className="headerNavLink">Latest</Link>
      <Link to="" className="headerNavLink">Beginners Guide</Link>
      {props.currentUser
          ?
          <><Link to="/new/post"className="headerNavLink">New Post</Link></>
          :
          <Link className="headerNavLink" to='/user/login'>Login/Register</Link>
      }
      {props.currentUser
          ?
        <>
          {props.currentUser.admin === true 
            ?
            <p className="headerNavAdmin">{props.currentUser.username} (Admin)</p>
            :
            <p className="headerNavUser">{props.currentUser.username}</p>
          }

          <Link to="" className="headerNavLink" onClick={props.handleLogout}>Logout</Link></>
          :
          <></>
      }

    </div>
  )
}
