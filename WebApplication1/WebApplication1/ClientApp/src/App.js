import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Game } from './components/Game';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/Game' component={Game} />
            <Route exact path='/counter' component={Counter} />
            <Route exact path='/fetch-data' component={FetchData} />
        </Layout>
    );
  }
}
