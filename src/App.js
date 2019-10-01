import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin'
import jsonServiceProvider from 'ra-data-json-server'
import { UserList } from './users';

const dataProvider = jsonServiceProvider('http://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={ dataProvider }>
    <Resource name="settings" />
    <Resource name="users" list={ UserList } />
  </Admin>
)

export default App;
