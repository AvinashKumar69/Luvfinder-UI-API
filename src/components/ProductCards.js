import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import cardBG from '../assets/cardBG1.png';
import cartPic from '../assets/cartPic1.png';


const ProductCards = () => {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <div className='container-fluid overflow-hidden'>
            <div className='row'>

                {/* // Left Side Div // */}
                <div className='col-lg-2 col-md-6 col-xs-12' data-aos='fade-up'>
                    <div className='card pull-up mt-5' style={{ width: '100%' }}>
                        <div className='card-body'>
                            <h5 className='card-title d-flex'>
                                <img src={cartPic}
                                    alt='usd' style={{ width: '30px', height: '30px' }} />
                                <div style={{ paddingLeft: '10px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'rgb(23, 43, 76)' }}>
                                        DOGE/USD
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                        Dogecoin/U.S. Dollar
                                    </div>
                                </div>
                            </h5>
                            <h4 className='card-text' style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 43, 76)' }}>
                                0.45 %
                            </h4>
                            <h6 style={{ color: 'rgb(255, 168, 0)' }}>Last 5 mins</h6>
                            <div className='card-text' style={{ width: '100%', height: '10px' }}>
                                <img src={cardBG} alt='graph' style={{ width: '100%', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6 col-xs-12' data-aos='fade-up'>
                    <div className='card pull-up mt-5' style={{ width: '100%' }}>
                        <div className='card-body'>
                            <h5 className='card-title d-flex'>
                                <img src={cartPic}
                                    alt='usd' style={{ width: '30px', height: '30px' }} />
                                <div style={{ paddingLeft: '10px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'rgb(23, 43, 76)' }}>
                                        DOGE/USD
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                        Dogecoin/U.S. Dollar
                                    </div>
                                </div>
                            </h5>
                            <h4 className='card-text' style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 43, 76)' }}>
                                1.46 %
                            </h4>
                            <h6 style={{ color: 'rgb(255, 168, 0)' }}>Last 1 hour</h6>
                            <div className='card-text' style={{ width: '100%', height: '10px' }}>
                                <img src={cardBG} alt='graph' style={{ width: '100%', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* // Middle Div // */}
                <div id="market" className='col-lg-3 col-md-12 col-xs-12 m-auto' data-aos='fade-up'>
                    <div className="card pull-up mt-5 text-center" style={{ width: '100%', backgroundImage: `url(${'https://luvfinder.luvinu.io/static/media/back-texture.50ab4ad34334a7b43d22.jpg'})` }}>
                        <div className="card-body">
                            <h3 style={{ color: 'rgb(255, 168, 0)' }}>Best Price to Trade</h3>
                            <h4 className="card-text" style={{ fontSize: '32px', fontWeight: '700', color: 'rgb(23, 43, 76)' }}>
                                0.1398721881 %
                            </h4>
                            <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                Average DOGE/USD net price including commission
                            </div>
                        </div>
                    </div>
                </div>

                {/* // Right Side Div // */}
                <div className='col-lg-2 col-md-6 col-xs-12' data-aos='fade-up'>
                    <div className='card pull-up mt-5' style={{ width: '100%' }}>
                        <div className='card-body'>
                            <h5 className='card-title d-flex'>
                                <img src={cartPic}
                                    alt='usd' style={{ width: '30px', height: '30px' }} />
                                <div style={{ paddingLeft: '10px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'rgb(23, 43, 76)' }}>
                                        DOGE/USD
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                        Dogecoin/U.S. Dollar
                                    </div>
                                </div>
                            </h5>
                            <h4 className='card-text' style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 43, 76)' }}>
                                5.19 %
                            </h4>
                            <h6 style={{ color: 'rgb(255, 168, 0)' }}>Last 1 Day</h6>
                            <div className='card-text' style={{ width: '100%', height: '10px' }}>
                                <img src={cardBG} alt='graph' style={{ width: '100%', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6 col-xs-12' data-aos='fade-up'>
                    <div className='card pull-up mt-5' style={{ width: '100%' }}>
                        <div className='card-body'>
                            <h5 className='card-title d-flex'>
                                <img src={cartPic}
                                    alt='usd' style={{ width: '30px', height: '30px' }} />
                                <div style={{ paddingLeft: '10px' }}>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'rgb(23, 43, 76)' }}>
                                        DOGE/USD
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                        Dogecoin/U.S. Dollar
                                    </div>
                                </div>
                            </h5>
                            <h4 className='card-text' style={{ fontSize: '28px', fontWeight: '700', color: 'rgb(23, 43, 76)' }}>
                                11.55 %
                            </h4>
                            <h6 style={{ color: 'rgb(255, 168, 0)' }}>Last 7 Days</h6>
                            <div className='card-text' style={{ width: '100%', height: '10px' }}>
                                <img src={cardBG} alt='graph' style={{ width: '100%', height: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCards;