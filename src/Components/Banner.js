import React, { useEffect} from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCrud } from "../context/appContext";

function Banner () {
    const { article } = useCrud();

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
        <div 
            style={{
                backgroundColor:"white", 
                width:'100%', 
                height:"500px",
                }}>
            <div className="container" data-aos="fade-up" data-aos-delay="100" style={{float:'right'}}>
            <div className="row gy-4">
            <div className="col-lg-8">
                <div className="banner swiper">
                    <div className="swiper-wrapper align-items-center" style={{alignItems:"center"}}>
                    { (article.slice(0,5)).map((a) => (
                    <div className="swiper-slide">
                        <img src={a.imageUrl} alt="" 
                        style={{width:"50%", maxHeight:'450px', float:'right'}}/>
                    </div>
                    ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
            </div>      
            </div>
        </div>
    )
}

export default Banner;