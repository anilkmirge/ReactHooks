import React from "react";

function BookablesGroups ({ groups, group, setGroup }) {
  return (
    <select value={group} onChange={e => setGroup(e.target.value)} selected={group}>
      {groups.map(g => <option value={g} key={g}>{g}</option>)}
    </select>
  );
}

export default BookablesGroups;