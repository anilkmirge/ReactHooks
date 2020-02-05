import React from 'react';

const UserPicker = ({ users, userID, setUserID }) => {
  return (
      <select value={userID} onChange={e => setUserID(e.target.value)}>
        {users.map(u => <option value={u.id} key={u.id}>{u.name}</option>)}
      </select>
  );
};

export default UserPicker;