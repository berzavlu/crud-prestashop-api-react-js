import React, { useEffect, useState } from 'react'
import API from '../../api'

const Dashboard = () => {
  const [productos, setProductos] = useState([])
  const getProductos = async () => {
    try {
      const result = await API.request(
        'https://lulumuebles.com.pe/api/products?output_format=JSON&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ'
      )
      const urls = []
      result.products.map((e) =>
        urls.push(
          `https://lulumuebles.com.pe/api/products/${e.id}?output_format=JSON&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ`
        )
      )
      Promise.all(
        urls.map((request) => {
          return fetch(request)
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              return data
            })
        })
      )
        .then((values) => {
          setProductos(values)
        })
        .catch(console.error.bind(console))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductos()
  }, [])
  console.log(productos)
  return (
    <div>
      {productos.map((e, i) => {
        return (
          <div key={i}>
            <img
              style={{ width: '150', height: '150px' }}
              src={`https://lulumuebles.com.pe/api/images/products/${e.product.id}/${e.product.associations.images[0].id}`}
              alt='img'
            />
            {e.product.name} - Precio: {e.product.price}
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
