import fetch from 'isomorphic-unfetch'

let controller = new AbortController()
const { signal } = controller
let doSignal = signal

class API {
  static cancel() {
    controller.abort()
    controller = new AbortController()
    doSignal = controller.signal
  }

  static request(url, method, body) {
    const data = {
      method,
      headers: { Accept: 'application/json, text/plain, */*' },
      signal: doSignal,
    }

    if (localStorage.getItem('token') !== null) {
      data.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }

    if (method === 'POST' || method === 'PUT') {
      data.data = body
    }

    return new Promise((resolve, reject) => {
      fetch(url, data)
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server')
          }
          return response.json()
        })
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }
}

export default API
