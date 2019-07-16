import React from 'react'

const UsersSingle = ({ match }) => {
  const { params } = match
  return <div>Usuario {params.id}</div>
}

export default UsersSingle
