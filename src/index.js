
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from 'src/history';
import App from './App';
import Home from './Home';
import './index.scss';

const AboutComponent = lazy(() => import('./About'));
const ContactsComponent = lazy(() => import('./Contacts'));
const Loading = () => (<div>loading...</div>);

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/contacts" component={ContactsComponent} />
        </Switch>
      </App>
    </Router>
  </Suspense>,
  document.getElementById('root'),
);
