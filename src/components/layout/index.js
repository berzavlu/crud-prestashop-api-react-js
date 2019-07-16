import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const AppLayout = ({ children, title, history }) => (
  <React.Fragment>
    <Header title={title} history={history} />
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  </React.Fragment>
)

export default AppLayout
