import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import heroSectionPic1 from '../assets/heroSectionPic1.png';



const HeroSection = () => {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <div className='container-fluid conta font-font-custom'>
            <div className='row' style={{ padding: '0px 14px' }}>
                <div className='col-lg-8 col-md-7 col-xs-12 d-flex flex-column justify-content-center align-items-left' data-aos='fade-right'>
                    <div className="h w-100">Top Memes Tokens by Market Capitalization</div>
                    <div className="small-heading">
                        This page lists the top meme coins and tokens. These projects are listed by market capitalization with the largest first and then descending in order.
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-xs-12">
                    <img src={heroSectionPic1} data-aos='fade-left' style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;