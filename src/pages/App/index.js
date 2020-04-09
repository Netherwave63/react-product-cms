import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Dashboard from '../Dashboard';
import Products from '../Products';
import Customers from '../Customers';
import Version from '../Version';
import { Route, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { getProducts } from '../../store/actionCreators/products';
import { getCustomers } from '../../store/actionCreators/customers';
import { connect } from 'react-redux';

const App = ({ 
  // dispatch
  getProducts,
  getCustomers
}) => {
  useEffect(() => {
    getProducts();
    getCustomers();
  }, []);

  return (
    <div className='app container'>
      <Navbar />
      <main>
        <Switch>
          <Route path={ROUTES.PRODUCTS} component={Products} />
          <Route path={ROUTES.CUSTOMERS} component={Customers} />
          <Route path={ROUTES.VERSION} component={Version} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getCustomers: () => dispatch(getCustomers())
});

export default connect(null, mapDispatchToProps)(App);
