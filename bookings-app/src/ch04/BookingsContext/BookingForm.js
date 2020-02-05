import React, { useState, useRef, useContext } from 'react';
import UserContext from "./UserContext";

const BookingForm = ({ booking }) => {

  console.log("BookingForm called");

  const { users, userID } = useContext(UserContext);
  const { title, session, day, bookable, bookerID } = booking;
  const [ formTitle, setFormTitle ] = useState();
  const booker = users.filter(u => u.id === (bookerID || userID))[0];

  const handleChange = e => {
    setFormTitle(e.target.value);
  };

  const handleSaveClick = () => {
    // TODO
  };

  const titleRef = useRef();
  if (titleRef.current !== title) {
    titleRef.current = title;
    setFormTitle(title);
  }

  return (
    <div>
      <p>
        <input
          type="text"
          onChange={handleChange}
          value={formTitle || ""} placeholder="Booking Title"
        />
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