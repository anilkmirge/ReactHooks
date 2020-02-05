import React from 'react';
import BookingForm from "./BookingForm";

const BookingDetails = ({ users, userID, booking, saveBooking }) => {
  console.log("BookingsDetails called");
  return (
    <div className="bookingDetails">
      <h2>Booking Details</h2>
      {booking && (
        <BookingForm handleSave={saveBooking} booking={booking} users={users} userID={userID} />
      )}
    </div>
  );
};

export default BookingDetails;