import React from 'react'
import Navbar from '../../components/Navbar'
import Dashboard from '../Dashboard'
import Products from '../Products'
import Customers from '../Customers'
import Archieves from '../Archieves'
import Notes from '../Notes'
import { Route, Switch } from 'react-router-dom'
import ROUTES from '../../constants/routes'

const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>Product CMS</h1>
      <div className='media'>
        <div className='media-left'>
          <div className='box' style={{ minWidth: '180px' }}>
            <Navbar />
          </div>
        </div>
        <div className='media-content'>
          <main className='box'>
            <Switch>
              <Route path={ROUTES.PRODUCTS} component={Products} />
              <Route path={ROUTES.CUSTOMERS} component={Customers} />
              <Route path={ROUTES.ARCHIEVES} component={Archieves} />
              <Route path={ROUTES.NOTES} component={Notes} />
              <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
