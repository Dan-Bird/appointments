import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);
