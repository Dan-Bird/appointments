import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <div key={appointment.startsAt}></div>
      ))}
    </ol>
  </div>
);
