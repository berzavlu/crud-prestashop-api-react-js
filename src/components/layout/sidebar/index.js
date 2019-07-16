import React from 'react'
import { NavLink } from 'react-router-dom'

const funcLinkUser = () => {
  const path = window.location.pathname.split('/')[1]
  return path === 'users' || path === 'user'
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            <div className='iconBullet' />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' isActive={funcLinkUser}>
            <div className='iconBullet' />
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to='/configuration' activeClassName='active'>
            <div className='iconBullet' />
            Configuración
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
