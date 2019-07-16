import React, { useEffect } from 'react'
import API from '../../api'

const Dashboard = () => {
  const getProductos = async () => {
    try {
      const result = await API.request(
        'https://lulumuebles.com.pe/api/products?output_format=JSON&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ'
      )
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])
  return <div>Dashboard</div>
}

export default Dashboard
