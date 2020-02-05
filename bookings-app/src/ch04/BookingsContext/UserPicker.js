import React, { useContext } from 'react';
import UserContext from "./UserContext";

const UserPicker = () => {
  const { users, userID, setUserID } = useContext(UserContext);
  return (
      <select value={userID} onChange={e => setUserID(parseInt(e.target.value))}>
        {users.map(u => <option value={u.id} key={u.id}>{u.name}</option>)}
      </select>
  );
};

export default UserPicker;