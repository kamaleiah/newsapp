import { createContext, useContext, useState, useEffect } from "react";
import { app, auth, userdb } from "../api/firebase";
import { getDatabase, ref, get } from "firebase/database";
import { doc, updateDoc, arrayUnion, deleteField, onSnapshot } from "firebase/firestore";

const favContext = createContext({});

export function FavContextProvider ({children}) {

    const [ favourites, setFavourites ] = useState([])
    const user = auth.currentUser;

  const getFav = async () => {
    if (user) {
      const unsubscribe = onSnapshot(doc(userdb, "users", user.uid), (snapshot) => {
      const favItems = snapshot.data().favourites;
      setFavourites(favItems);
      });
      return () => unsubscribe();
    }
  }

  useEffect(() => {
    (async() => {
        await getFav()
    })()
}, [user])

  const handleFavourites = async (id) => {
    
    const db = getDatabase(app) 
    const dbRef = ref( db, `articles/${id}` )
    const snapshot = await get(dbRef)
    const fav = snapshot.val();
    console.log(fav)

    try {
      const userRef = doc(userdb, "users", user.uid);
      await updateDoc(userRef, {
        favourites: arrayUnion(fav)
      });
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const clearFavourites = async (favourites) => {

    if (user) {
      const userRef = doc(userdb, "users", user.uid);
  
      try {
        await updateDoc(userRef, {
          favourites: deleteField()
        });
        setFavourites([])
        console.log("Field deleted successfully");
      } catch (error) {
        console.error("Error deleting field:", error);
      }
    }
  };


    const value = {
      
        handleFavourites,
        favourites,
        clearFavourites,
        getFav
    }

    return <favContext.Provider value = {value} >
        {children}
    </favContext.Provider>
}

export function useFavCrud() {
    return useContext(favContext)
};