import React from 'react';
import BookingForm from "./BookingForm";

const BookingDetails = ({ booking }) => {
  return (
    <div className="bookingDetails">
      <h2>Booking Details</h2>
      {booking && (
        <BookingForm booking={booking} />
      )}
    </div>
  );
};

export default BookingDetails;