import React, {useState} from 'react';

function BookingsGrid({ bookings, setBooking }) {

  console.log("BookingsGrid called");

  const sessions = Object.keys(bookings);
  const [selected, setSelected] = useState();

  function isSelected(session, day) {
    if (!selected) return false;
    return session === selected.session && day === selected.day;
  }

  function handleClick (booking) {
    setSelected({
      session: booking.session,
      day: booking.day
    });
    setBooking(booking);
  }

  return (
    <div className="bookingsGrid">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
        </thead>
        <tbody>
        {sessions.map(session => {
          const days = Object.keys(bookings[session]);
          return (
            <tr key={session}>
              <th>{session}</th>
              {days.map(day => {
                const booking = bookings[session][day];
                return (
                  <td
                    key={day}
                    onClick={() => handleClick(booking)}
                    className={isSelected(session, day) ? 'selected' : null}
                  >
                    {booking.title}
                  </td>
                );
              })}
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsGrid;