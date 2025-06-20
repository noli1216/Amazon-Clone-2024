import React from "react";
import Routing from "./Router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "./components/DataProvider/DataProvider";

import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type"; 

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter >
      <Routing />
    </BrowserRouter>
  );
}
export default App;


//basename="/Amazon-Clone-2024"
