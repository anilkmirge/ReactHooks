import React from 'react';

function Bookables ({ bookablesByGroup }) {
  const group = "rooms";
  const bookables = bookablesByGroup[group] || [];
  let bookableIndex = 0;

  function changeBookable (selectedIndex) {
    bookableIndex = selectedIndex;
  }

  return (
    <ul className="bookables">
      {bookables.map((b, i) => (
        <li
          key={b.title}
          className={i === bookableIndex ? "selected" : null}
          onClick={() => changeBookable(i)}
        >
          {b.title}
        </li>
      ))}
    </ul>
  );
}

export default Bookables;