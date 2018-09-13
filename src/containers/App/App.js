import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../../hoc/Layout';
import Home from '../../components/Home';
import Shop from '../Shop';
import Orders from '../Orders';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/orders" exact component={Orders} />
          <Redirect from="/" to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
