import React, { useState, useEffect } from 'react'
import API from '../../api'

const Users = (props) => {
  const [users, setUsers] = useState([])

  const goLink = ({ name }) => {
    const { history } = props
    history.push(`user/${name}`)
  }

  const fetchData = async () => {
    try {
      const data = await API.request('https://pokeapi.co/api/v2/pokemon', 'GET')
      setUsers(data.results)
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted')
      } else {
        console.error('Ups :( ', err)
      }
    }
  }

  useEffect(() => {
    fetchData() // hago el fetch
    return () => API.cancel() // es como cancelar el request en componentWillUnmount()
  }, [])

  const cancelRequest = () => {
    API.cancel()
  }

  const doRequest = () => {
    fetchData()
  }

  return (
    <div>
      <button type='button' onClick={cancelRequest}>
        Cancelar Request
      </button>
      <button type='button' onClick={doRequest}>
        Crear Request
      </button>
      <h1>Users</h1>
      {users.map((e, i) => (
        <div onClick={() => goLink(e)} key={i} style={{ cursor: 'pointer' }}>
          {e.name}
        </div>
      ))}
    </div>
  )
}

export default Users
