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
        // <section className="font-font-custom bg-white">
        //     <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        //         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
        //             <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-black font-black">Top Memes Tokens by Market 
        //                 <br className="hidden lg:inline-block" />Capitalization
        //             </h1>
        //             <p className="mb-8 leading-relaxed sm:text-2xl text-xl text-orange-400 font-bold">This page lists the top meme coins and tokens. These projects are listed by market capitalization with the largest first and then descending in order.</p>
        //         </div>
        //         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        //             <img className="object-cover object-center rounded" alt="hero" src="https://luvfinder.luvinu.io/static/media/min.31434c0936590ed1d3e0.png" />
        //         </div>
        //     </div>
        // </section>

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