import React from "react";
import { BrowserRouter as Router, Routes , Route, Navigate } from 'react-router-dom';
import UserLogin from "./Components/UserLogin";
import Homepage from "./Components/HomePage";
import { useCrud } from "./context/appContext";
import Register from "./Components/Register";
import { FavContextProvider } from "./context/favContext";


function App() {

  const { isLoggedIn } = useCrud();

  return (
    <div>
          <Router>
            <FavContextProvider>
              <Routes>

                <Route exact path="/newsapp/" 
                  element = { isLoggedIn ? <Navigate to="/home"/> : <UserLogin />}
                />
                <Route path="/newsapp/home"
                  element = { !isLoggedIn ? <Navigate to="/"/> : <Homepage/>}
                />
                <Route exact path="/newsapp/register" 
                  element = { isLoggedIn ? <Navigate to="/home"/> : <Register />}
                />
                
              </Routes> 
            </FavContextProvider>       
          </Router>
    </div>

  );
}

export default App;
