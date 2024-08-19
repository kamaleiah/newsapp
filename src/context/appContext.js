import { createContext, useContext, useState, useEffect } from "react";
import { app, auth, userdb } from "../api/firebase";
import { getDatabase, ref, get } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { getDoc, setDoc, doc } from "firebase/firestore";

const appContext = createContext({});

export function ContextProvider ({children}) {
    
    const [ userInfo, setUserInfo ] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [article, setArticle] = useState([]);
    const [ search, setSearch] = useState("");
    const [ sResults, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false)

  const handleRegister = async ({email, username, password}) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(userdb, "users", user.uid), {
          email: user.email,
          username: username,
        });
      }
      alert("User Registered Successfully!")
    }
    catch (error) {
        console.log(error.message);
    };
  }
  
  const login = async ({email,password}) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true)
      localStorage.setItem('loggedInUser', JSON.stringify(auth));
    }
    catch (error) {
      toast.error(error.message, {position:"bottom-center"})
    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  },[]);

  const userData = async () => {
    auth.onAuthStateChanged( async (user) => {
      console.log(user)
      if (!user) return 
      const docRef = doc( userdb, "users", user.uid );
      const snapshot = await getDoc(docRef);
      
      if (snapshot.exists()) {
        setUserInfo(snapshot.data());

      }
      else {
        console.log("User is not logged in");
      }
    })

  }

  useEffect(() => {
    userData();
  }, []);

  const logout = () => {
    auth.signOut();
    setIsLoggedIn(false)
    localStorage.removeItem('loggedInUser')
  };

  const retrieveArticles = async () => {

    const db = getDatabase(app) 
    const dbRef = ref( db, "articles" )
    const snapshot = await get(dbRef)
    const data = snapshot.val()
    setArticle(data)
    
  };

  const handleSearch = (search) => {
    setSearch(search);
    if (search !== "") {
      const newList = article.filter((article) => {
        return Object.values(article)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      })
      setResult(newList);
      setShowResults(true);
    } 
    else {
      setResult(article);
    }
  }
    
    const value = {
        login, isLoggedIn, setIsLoggedIn, logout,
        article, retrieveArticles,
        search, setSearch,
        sResults, showResults,
        handleSearch,
        userInfo,
        handleRegister,
    }

    return <appContext.Provider value = {value} >
        {children}
    </appContext.Provider>
}

export function useCrud() {
    return useContext(appContext)
};