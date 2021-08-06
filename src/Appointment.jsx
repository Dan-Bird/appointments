import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);

export const AppointmentsDayView = () => <div id="appointmentsDayView"></div>;
