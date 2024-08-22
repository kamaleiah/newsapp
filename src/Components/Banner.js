import React from "react";
import './Home.css';
import { useCrud } from "../context/appContext";
import { useNavigate } from "react-router-dom";

function Banner (prop) {
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
        <h2 className="page-header">
            <i className ="bars icon" onClick={prop.menu} 
              style={{marginTop:'5px', cursor:'pointer' }}/>
            Find My News
            <div className="ui-search">
                <div className="ui icon input" style={{width:'300px'}}>
                    <input type="text" placeholder="Search article" value={search} 
                        onChange={(e) => setSearch(e.target.value)} />
                    <i className="search icon"/>
                </div>
                <button className="ui button black" style={{marginLeft:'5px'}} 
                    onClick={aSearch}>SEARCH</button>
            </div>
            <div style={{display:'flex'}}>
            <div className="user-icon">
                <i className="user circle icon" style={{marginBottom:'13px'}}/>{userInfo? username:""}</div>
            <button className="ui button black" onClick={userLogout}>LOGOUT</button>
            </div>
        </h2>
        <div className="page-banner">
                <h1 className="header-text">Discover the latest news</h1>
        </div>
      </>
    )
}

export default Banner;