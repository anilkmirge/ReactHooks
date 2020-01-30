import React, { useState } from 'react';

function Bookables ({ bookablesByGroup }) {
  const group = "rooms";
  const bookables = bookablesByGroup[group] || [];
  const [ bookableIndex, setBookableIndex ] = useState(0);

  function changeBookable (selectedIndex) {
    setBookableIndex(selectedIndex);
  }

  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookables.length);
  }

  return (
    <div>
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
      <p>
        <button onClick={nextBookable} autoFocus>Next</button>
      </p>
    </div>
  );
}

export default Bookables;
