import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <li key={appointment.startsAt}>
          <button type="button">
            {appointmentTimeOfDay(appointment.startsAt)}
          </button>
        </li>
      ))}
    </ol>
    {appointments.length ? (
      <Appointment {...appointments[0]} />
    ) : (
      <p>There are no appointments scheduled for today.</p>
    )}
  </div>
);

function appointmentTimeOfDay(startsAt) {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}
