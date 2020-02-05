import React, {useState} from "react";
import bookablesData from "../bookablesData";

function Bookables ({ bookable, setBookable }) {
  const [ group, setGroup ] = useState("rooms");
  const bookables = bookablesData[group] || [];
  const groups = Object.keys(bookablesData) || [];

  if (!bookables.includes(bookable)) {
    setBookable(bookables[0]);
  }

  return (
      <div>
        <select
            value={group}
            onChange={e => setGroup(e.target.value)}
            selected={group}
        >
          {groups.map(g => <option value={g} key={g}>{g}</option>)}
        </select>

        <ul className="bookables">
          {bookables.map((b) => (
              <li
                  key={b.title}
                  className={
                    b.id === (bookable && bookable.id) ?
                        "selected" :
                        null
                  }
                  onClick={() => setBookable(b)}
              >
                {b.title}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default Bookables;