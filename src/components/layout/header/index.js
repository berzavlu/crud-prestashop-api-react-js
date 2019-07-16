import React from 'react'

const signOut = (history) => {
  localStorage.removeItem('token')
  history.push('/login')
}

const Header = ({ title, history }) => {
  return (
    <React.Fragment>
      <div className='header'>
        <div
          className='header--salir'
          onClick={() => signOut(history)}
          style={{ cursor: 'pointer' }}
        >
          Cerrar Sesión
        </div>
        <br />
        <div className='header--title'>{title}</div>
      </div>
    </React.Fragment>
  )
}

export default Header
