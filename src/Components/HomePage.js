import React from "react";
import ArticleList from "./ArticleList";
import Favourites from "./Favourites";
import './Home.css';
import { useCrud } from "../context/appContext";
import { useNavigate } from "react-router-dom";

function Homepage () {
    const { logout, search, setSearch, handleSearch, userInfo } = useCrud();
    const { username } = userInfo;
    const navigate = useNavigate();

    const aSearch = (e) => {
        handleSearch(search)
    }

    const userLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <>

        <h2 className="page-header">Find My News
            <div className="ui-search">
                <div className="ui icon input" style={{width:'300px'}}>
                    <input type="text" placeholder="Search" value={search} 
                        onChange={(e) => setSearch(e.target.value)} />
                    <i className="search icon"/>
                </div>
                <button className="ui button orange" style={{marginLeft:'5px'}} 
                    onClick={aSearch}>SEARCH</button>
            </div>
            <div style={{display:'flex'}}>
            <div className="user-icon">
                <i className="user circle icon" style={{marginBottom:'13px'}}/>{userInfo? username:""}</div>
            <button className="ui button orange" onClick={userLogout}>LOGOUT</button>
            </div>
        </h2>
   
        <section>
           <aside>
                <Favourites/>
           </aside>

           <article>
                <ArticleList/>
           </article>
        </section>
        </>
    )
}

export default Homepage;