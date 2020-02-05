import React, { useState, useMemo } from 'react';
import { getEmptyGrid } from "./gridHelpers";
import BookingsGrid from "./BookingsGrid";
import BookingDetails from "./BookingDetails";

function Bookings({ bookable }) {
  const [ booking, setBooking ] = useState();

  const lookup = useMemo(
    () => bookable ? getEmptyGrid(bookable) : {},
    [bookable]
  );

  return (
    <div className="bookings">
      <BookingsGrid
        bookingsLookup={lookup}
        booking={booking}
        setBooking={setBooking}
      />

      <BookingDetails
        booking={booking}
        bookable={bookable}
      />
    </div>
  );
}

export default Bookings;