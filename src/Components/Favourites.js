import React from "react";
import { useFavCrud } from "../context/favContext";


function Favourites () {

    const { favourites, clearFavourites } = useFavCrud();
    
    const clearAll = () => {
        clearFavourites();
    }

    const cellStyle = {
        borderStyle: 'none none solid none',
        borderWidth: '1px',
        height: '55px', 
        overflow: 'hidden'
    }

    return (
        <>
            <h3>My Favourites
            <button className="ui button orange" style={{float:"right"}} onClick={clearAll}>CLEAR</button>
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