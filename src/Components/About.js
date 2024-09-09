import React, { useEffect} from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCrud } from "../context/appContext";
import './Home.css';
import img from '../image/design.png';

function About () {
    const { article, isLoggedIn } = useCrud();

    useEffect(() => {
        const swiper = new Swiper('.banner', {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });
      
        return () => {
          swiper.destroy();
        };
      }, []);

    return (
        <div className="container" data-aos="fade-up" data-aos-delay="100" 
            style={{margin:'50px', display:'flex'}}>
            <div style={{width:'40%'}}>
                <h3>Committed to providing accurate and timely information.</h3>
                <img src={img} alt="" 
                    style={{width:'350px', height:'350px', marginLeft:'50px'}}/>
            </div>
            <div className="row gy-4" style={{width:'60%'}}>
                <div className="col-lg-8">
                    <div className="banner swiper">
                        <div className="swiper-wrapper align-items-center">
                        { (article.slice(0,7)).map((a) => (
                        <div className="swiper-slide" key={a.id}>
                            <div className="image-container">
                                <img src={a.imageUrl} alt="" className="image-swipe"/>
                            <div className="swiper-content">
                            <h3 style={{padding: '15px'}}>{a.title}<br/>
                            <a href={a.website} target="_blank">
                                <button className="read-btn">Read More...</button></a>
                            </h3>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>      
        </div>

    )
}

export default About;