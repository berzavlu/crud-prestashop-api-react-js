import React, { Component } from 'react'

class Login extends Component {
  state = {
    form: {
      user: '',
      password: '',
    },
  }

  doLogin = (event) => {
    event.preventDefault()
    const { history } = this.props
    const tokenExmaple = 'eyJhbGrHDcEfxjoYZgeFONFh7HgQ'
    localStorage.setItem('token', tokenExmaple)
    history.push('/')
  }

  changeValue = ({ target }) => {
    const { form } = this.state
    const { name, value } = target
    form[name] = value
    this.setState({ form })
  }

  render() {
    const { form } = this.state
    return (
      <div>
        <form onSubmit={this.doLogin}>
          <input
            value={form.user}
            name='user'
            id='user'
            type='text'
            placeholder='Ingresa tu usuario'
            required
            onChange={this.changeValue}
            autoComplete='off'
          />
          <input
            value={form.password}
            name='password'
            id='password'
            type='password'
            placeholder='Contraseña'
            required
            onChange={this.changeValue}
          />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default Login
