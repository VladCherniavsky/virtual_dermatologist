import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from 'src/history';
import AboutComponent from 'src/pages/About';
import App from './pages/App/App';
import './index.scss';

const Loading = () => (<div>loading...</div>);

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutComponent} />
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById('root'),
);
