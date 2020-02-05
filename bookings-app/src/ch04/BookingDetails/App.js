import React, { useState } from "react";
import "../App.css";

import usersData from "../usersData";

import Bookables from "./Bookables";
import BookableDetails from "./BookableDetails";
import Bookings from "./Bookings";
import UserPicker from "./UserPicker";

const App = () => {

  console.log("App called");

  const [ bookable, setBookable ] = useState();
  const [ userID, setUserID ] = useState(1);

  return (
    <div className="App">
      <header>
        <UserPicker
            users={usersData}
            userID={userID}
            setUserID={setUserID}
        />
      </header>

      <main>
        <Bookables
            bookable={bookable}
            setBookable={setBookable}
        />
        <Bookings
            bookable={bookable}
            userID={userID}
            users={usersData}
        />
      </main>

      <aside>
        <BookableDetails bookable={bookable} />
      </aside>
    </div>
  );
};

export default App;