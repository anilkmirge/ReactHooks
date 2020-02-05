import React, { useState, useMemo } from 'react';
import { days, sessions } from "../config";
import bookingsData from "../bookingsData";
import BookingsGrid from "./BookingsGrid";
import BookingDetails from "./BookingDetails";

function Bookings({ bookable, userID, users }) {

  console.log("Bookings called");

  const [ bookings, setBookings ] = useState(bookingsData);
  const [ booking, setBooking ] = useState();

  const bookingsLookup = useMemo(() => getBookingsLookup(bookings, bookable), [bookings, bookable]);

  function saveBooking (booking) {
    const hasBooking = bookings.find(b => b.id && b.id === booking.id);

    if (!hasBooking) {
      setBookings(b => b.concat(booking));
      setBooking(booking);
    }
  }

  return (
    <div className="bookings">
      <BookingsGrid bookings={bookingsLookup} setBooking={setBooking} />

      <BookingDetails
        booking={booking}
        userID={userID}
        users={users}
        bookable={bookable}
        saveBooking={saveBooking}
      />
    </div>
  );
}

export default Bookings;


function getBookingsLookup (bookings, bookable) {

  console.log("getBookingsLookup called");

  const lookup = {};

  if (bookable) {
    sessions.forEach(session => {
      lookup[session] = {};

      days.forEach(day => {
        lookup[session][day] = {session, day, bookableID: bookable.id};
      });
    });

    bookings
        .filter(booking => booking.bookableID === bookable.id)
        .forEach((booking) => {
          lookup[booking.session][booking.day] = booking;
        });
  }

  return lookup;
}