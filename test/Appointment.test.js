import * as React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;
  const render = component => ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders the customer first name', () => {
    customer = { firstname: 'Ashley' };

    render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstname: 'Jordan' };

    render(<Appointment customer={customer} />, container);

    expect(container.textContent).toMatch('Jordan');
  });
});
