import * as React from 'react';

export const Appointment = ({ customer: { firstname } }) => (
  <div>{firstname}</div>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = React.useState(0);

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length ? (
        <Appointment {...appointments[selectedAppointment]} />
      ) : (
        <p>There are no appointments scheduled for today.</p>
      )}
    </div>
  );
};

function appointmentTimeOfDay(startsAt) {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}
