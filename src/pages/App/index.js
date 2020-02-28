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
    <>
      <Navbar />
      <main className='section'>
        <div className='container'>
          <Switch>
            <Route path={ROUTES.PRODUCTS} component={Products} />
            <Route path={ROUTES.CUSTOMERS} component={Customers} />
            <Route path={ROUTES.ARCHIEVES} component={Archieves} />
            <Route path={ROUTES.NOTES} component={Notes} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          </Switch>
        </div>
      </main>
    </>
  )
}

export default App
