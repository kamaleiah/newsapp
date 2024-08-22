import React, { useState } from "react";
import ArticleList from "./ArticleList";
import Favourites from "./Favourites";
import './Home.css';
import Banner from "./Banner";
import About from "./About";

function Homepage () {

    const [ sidebar, setSidebar ] = useState(false);

    const favmenu = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
        <section>
            { sidebar &&
                <aside>
                    <button className="x-btn" onClick={favmenu}>X</button>
                    <Favourites/>
                </aside> }
            <Banner menu={favmenu}/>
        </section>

        <section>
            <h1 style={{textAlign:'center'}}>ABOUT</h1>
            <div className="line-after"></div>
            <About/>
        </section>
            
        <section>
            <div>
                <h1 style={{textAlign:'center'}}>ARTICLES</h1>
                <div className="line-after"></div>
            </div>
            <article style={{width: sidebar? '70%':'100%'}}>
                <ArticleList/>
            </article>  
        </section>
        </>
    )
}

export default Homepage;