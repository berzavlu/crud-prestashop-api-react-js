import React, { useEffect, useState } from 'react'
import API from '../../api'
import ENV from '../../../env'

const { DOMAIN_API, WEBSERVICE_KEY } = ENV[process.env.NODE_ENV]

const Dashboard = () => {
  const [productos, setProductos] = useState([])
  const getProductos = async () => {
    try {
      const result = await API.request('products')
      const urls = []
      result.products.map((e) =>
        urls.push(
          `${DOMAIN_API}products/${e.id}?output_format=JSON&ws_key=${WEBSERVICE_KEY}`
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
              src={`${DOMAIN_API}images/products/${e.product.id}/${e.product.associations.images[0].id}&ws_key=${WEBSERVICE_KEY}`}
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
