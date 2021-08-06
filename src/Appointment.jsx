import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <li key={appointment.startsAt}>
          {appointmentTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
  </div>
);

function appointmentTimeOfDay(startsAt) {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}
