import React from "react";
import { useFavCrud } from "../context/favContext";
import { useCrud } from "../context/appContext";
import './Home.css';

function Favourites () {
    const { userInfo } = useCrud();
    const { favourites, clearFavourites } = useFavCrud();
    const { username, email } = userInfo;
    
    const clearAll = () => {
        clearFavourites();
    }

    const cellStyle = {
        borderStyle: 'none none solid none',
        borderWidth: '1px',
        height: '55px', 
        overflow: 'hidden'
    }

    const initials = username ? username.split(' ').map(namePart => namePart[0]).join('') : '';
    const avatarStyle = {
        backgroundColor: 'coral', 
        color: 'black',
        borderRadius: '50%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px', 
        marginTop: '5px',
    };

    return (
        <>

        <div className="user-info">
            <div style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
                <div style={avatarStyle}><h3>{initials}</h3></div>
            </div><br/>
            <strong>{username}</strong>
            <p>{email}</p>
        </div>
            <h3>My Favourites
            <button className="ui button black" style={{float:"right"}} onClick={clearAll}>CLEAR</button>
            </h3>
      
        <div className="ui celled list">
            {favourites && (favourites.map((fav) => (
            
            <div key={fav.id} className="content" style={cellStyle}>
                <a href={fav.website} target="_blank" style={{color:'black'}}>
                <div className="header">{fav.title}</div>
                </a>
            </div>
           
        )))}
        </div>
        </>
    )

}

export default Favourites;