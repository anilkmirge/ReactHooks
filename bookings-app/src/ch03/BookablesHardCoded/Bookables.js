import React from 'react';

function Bookables ({ bookablesByGroup }) {
  const group = "rooms";
  const bookables = bookablesByGroup[group] || [];
  const bookableIndex = 0;

  return (
    <ul className="bookables">
      {bookables.map((b, i) => (
        <li
          key={b.title}
          className={i === bookableIndex ? "selected" : null}
        >
          {b.title}
        </li>
      ))}
    </ul>
  );
}

export default Bookables;