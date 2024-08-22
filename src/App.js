import React from "react";
import { HashRouter, Router, Routes , Route, Navigate } from 'react-router-dom';
import UserLogin from "./Components/UserLogin";
import Homepage from "./Components/HomePage";
import { useCrud } from "./context/appContext";
import Register from "./Components/Register";
import { FavContextProvider } from "./context/favContext";


function App() {

  const { isLoggedIn } = useCrud();

  return (
    <div>
        <HashRouter>
          <Router basename="/">
            <FavContextProvider>
              <Routes>

                <Route path="/" 
                  element = { isLoggedIn ? <Navigate to="/home"/> : <UserLogin />}
                />
                <Route path="/home"
                  element = { !isLoggedIn ? <Navigate to="/"/> : <Homepage/>}
                />
                <Route path="/register" 
                  element = { isLoggedIn ? <Navigate to="/home"/> : <Register />}
                />
                
              </Routes> 
            </FavContextProvider>       
          </Router>
      </HashRouter>
    </div>

  );
}

export default App;
