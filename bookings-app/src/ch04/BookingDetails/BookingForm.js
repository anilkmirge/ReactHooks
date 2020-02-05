import React, { useState, useRef } from 'react';

const BookingForm = ({ booking, handleSave, users, userID }) => {

  console.log("BookingForm called");
  console.log(userID);

  const { title, session, day, bookable, bookerID } = booking;
  const [ formTitle, setFormTitle ] = useState();
  const booker = users.filter(u => u.id === bookerID)[0];

  const handleChange = e => {
    setFormTitle(e.target.value);
  };

  const handleSaveClick = () => {
    titleRef.current = title;
    handleSave({
      ...booking,
      title: formTitle,
      bookerID: userID
    });
  };

  const titleRef = useRef();
  if (titleRef.current !== title) {
    titleRef.current = title;
    setFormTitle(title);
  }

  return (
      <div>
        <p>
          <input type="text" onChange={handleChange} value={formTitle || ""} placeholder="Booking Title" />
        </p>
        <p>{ bookable }</p>
        <p>{ day } { session }</p>
        {booker && (
          <p>Booked by { booker.name }</p>
        )}
        <button onClick={handleSaveClick}>Save</button>
      </div>
  );
};

export default BookingForm;