import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import {expect} from 'chai'

import App from './App';
import Header from './containers/Header'
import OrderForm from './components/OrderForm'


it('App renders without crashing', () => {
  shallow(<App />)
});

it('Header renders without crashing', () => {
  shallow(<Header />)
});

it('Order Form renders without crashing', () => {
  shallow(<OrderForm />)
});

it('Header should have a button', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('button')).to.have.length(1);
  })

  it('Order Form should have a form', function () {
      const wrapper = shallow(<OrderForm />);
      expect(wrapper.find('form')).to.have.length(1);
    })
