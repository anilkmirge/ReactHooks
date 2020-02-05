import React, {useState} from "react";
import "../App.css";

import { users } from "../../db";

import Bookables from "./Bookables";
import BookableDetails from "./BookableDetails";
import Bookings from "./Bookings";
import UserPicker from "./UserPicker";
import UserContext from "./UserContext";

function App () {
  const [ bookable, setBookable ] = useState();
  const [ userID, setUserID ] = useState(1);

  return (
    <UserContext.Provider value={{ users, userID, setUserID }}>
      <div className="App">
        <header>
          <UserPicker />
        </header>

        <main>
          <Bookables
            bookable={bookable}
            setBookable={setBookable}
          />
          <Bookings
            bookable={bookable}
          />
        </main>

        <aside>
          <BookableDetails
            bookable={bookable} />
        </aside>
      </div>
    </UserContext.Provider>
  );
}

export default App;