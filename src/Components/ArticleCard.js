import React, {useState} from "react";
import { useFavCrud } from "../context/favContext";

function ArticleCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const { handleFavourites } = useFavCrud()
    const { id, company, title, website, imageUrl, date } = props.a 

    const getId = (id) => {
        handleFavourites(id);       
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const initials = company ? company.split(' ').map(companyPart => companyPart[0]).join('') : '';
    const avatarStyle = {
        backgroundColor: 'red', 
        color: 'white',
        borderRadius: '50%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px', 
        marginTop: '5px',
    };
    
    const cStyle = {
        width:'250px', 
        height:'350px', 
        margin:'10px',
        border: 'solid', 
        borderColor: isHovered ? 'orange' : 'white', 
        transition: 'background-color 0.3s ease-in-out'
    }

    return (
       
    <div className="ui card centered" style={cStyle} 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="content" style={{display:'flex', padding:'8px'}}>
                <div style={avatarStyle}>{initials}</div>
                <div style={{marginLeft:"8px"}}>
                <div className="description"><h4>{company}</h4></div>
                <div className="description">{date}</div>
                </div>
            </div>
            { isHovered ? ( 
                <div className="content">
                <div className="description">{title}</div>
                <a rel="noreferrer" href={website} target="_blank">
                <button className="ui button orange">Read More</button>
                </a>
                </div>
            ) : (
            <>
                <div className="image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                    <img src={imageUrl} alt="article-image" />
                </div>
                <div className="content">
                    <div className="description" style={{ maxHeight: '100px', overflow: 'hidden' }}>{title}</div>
                </div>
            </>
            ) }
                <i className={"heart icon"} 
                style={{margin:'0px 0px 10px 10px', color: isHovered? 'red':'grey', cursor:'pointer'}} 
                onClick={() => getId(id)}/>
        </div>
    )
}

export default ArticleCard;