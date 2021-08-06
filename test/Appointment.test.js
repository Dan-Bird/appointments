import * as React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstname: 'Ashley' };
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    const customer = { firstname: 'Jordan' };
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch('Jordan');
  });
});
