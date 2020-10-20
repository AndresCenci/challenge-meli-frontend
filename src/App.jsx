import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  console.log('pasa por router');
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />)}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
