import React, { useState } from 'react';

function Bookables ({ bookablesByGroup }) {
  const [group, setGroup] = useState("kit");
  const bookables = bookablesByGroup[group] || [];
  const [bookableIndex, setBookableIndex] = useState(1);
  const groups = Object.keys(bookablesByGroup);

  function changeGroup (e) {
    setGroup(e.target.value);
  }

  function changeBookable (selectedIndex) {
    setBookableIndex(selectedIndex);
  }

  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookables.length);
  }

  return (
    <div>
      <select value={group} onChange={changeGroup}>
        {groups.map(g => <option value={g} key={g}>{g}</option>)}
      </select>

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