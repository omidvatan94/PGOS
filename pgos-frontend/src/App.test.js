import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import App from './App';
import Header from './Header'
import OrderForm from './OrderForm'

it('App renders without crashing', () => {
  shallow(<App />)
});

it('Header renders without crashing', () => {
  shallow(<Header />)
});

it('Order Form renders without crashing', () => {
  shallow(<OrderForm />)
});
