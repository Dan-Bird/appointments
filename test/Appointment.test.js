import * as React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;
  const render = component => ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
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

describe('AppointmentsDayView', () => {
  let container;
  const render = component => ReactDOM.render(component, container);
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: {
        firstname: 'Ashley',
      },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: {
        firstname: 'Jordan',
      },
    },
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(
      appointments.length
    );
  });

  it('renders each component in an li', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelectorAll('li')).toHaveLength(appointments.length);
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
  });

  it('intitially shows a message saying there are no appointments today', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch(
      'There are no appointments scheduled for today.'
    );
  });

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.textContent).toMatch('Ashley');
  });

  it('has a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelectorAll('li > button')).toHaveLength(
      appointments.length
    );
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
  });

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    const button = container.querySelectorAll('button')[1];
    ReactTestUtils.Simulate.click(button);

    expect(container.textContent).toMatch('Jordan');
  });
});
