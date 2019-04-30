import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.module.scss';


const App = (props) => {
  const { children } = props;
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reloads.
      </p>
      <Link to="about"> About </Link>
      <Link to="contacts"> Contacts </Link>
      {children}

    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
