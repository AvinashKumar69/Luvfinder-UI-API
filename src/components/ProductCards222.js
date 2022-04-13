import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import productPic222 from '../assets/productPic222.png';


const ProductCards222 = (props) => {
    console.log('ProductCards222 props logged-->', props);
    const { bidPercentageData, lastTradedPriceData, currentCurencyType, coinType } = props


    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <div className='row justify-content-center overflow-hidden w-100'
            style={{ paddingTop: '40px', paddingBottom: '50px', paddingLeft: '12px', fontSize: '23px' }}
        >

            {/* // Bid Percentage // */}
            <div className='col-lg-4 col-md-4 col-xs-12 overflow-hidden' data-aos='fade-up'>
                <div className='card pull-up mt-5' style={{ width: '100%' }}>
                    <div className='card-body'>
                        <h3 style={{ color: 'rgb(255, 168, 0)' }}>Best place to sell at:</h3>
                        <h5 className='card-title d-flex'>
                            <img src={productPic222} style={{ width: '30px', height: '30px' }} />
                            <div style={{ paddingLeft: '10px', textAlign: 'left' }}>
                                <div style={{ fontWeight: '700', fontSize: '1rem' }}>
                                    {bidPercentageData.name}
                                </div>
                                <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                    {coinType} / {currentCurencyType}
                                </div>
                            </div>
                        </h5>
                        <h4 className='card-text' style={{ fontSize: '25px', fontWeight: '700', whiteSpace: 'nowrap' }}>
                            {coinType} {bidPercentageData.bid_percentage}
                        </h4>
                    </div>
                </div>
            </div>

            {/* // Last Trade Price // */}
            <div className='col-lg-4 col-md-4 col-xs-12 overflow-hidden' data-aos='fade-up'>
                <div className='card pull-up mt-5' style={{ width: '100%' }}>
                    <div className='card-body'>
                        <h3 style={{ color: 'rgb(255, 168, 0)' }}>Best place to purchase at:</h3>
                        <h5 className='card-title d-flex'>
                            <img src={productPic222} style={{ width: '30px', height: '30px' }} />
                            <div style={{ paddingLeft: '10px', textAlign: 'left' }}>
                                <div style={{ fontWeight: '700', fontSize: '1rem' }}>
                                    {lastTradedPriceData.name}
                                </div>
                                <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                    {coinType}/{currentCurencyType}
                                </div>
                            </div>
                        </h5>
                        <h4 className='card-text' style={{ fontSize: '25px', fontWeight: '700', whiteSpace: 'nowrap' }}>
                            {currentCurencyType} {lastTradedPriceData.last_trade_price}
                        </h4>
                    </div>
                </div>
            </div>

            {/* // the profit you earn at 1 coin -- 3rd card // */}
            <div className='col-lg-4 col-md-4 col-xs-12 overflow-hidden' data-aos='fade-up'>
                <div className='card pull-up mt-5' style={{ width: '100%' }}>
                    <div className='card-body'>
                        <h5 style={{ color: 'rgb(255, 168, 0)' }}>The profit you earn at 1 {coinType} Coin</h5>
                        <h5 className='card-title d-flex'>
                            <img src={productPic222} style={{ width: '30px', height: '30px' }} />
                            <div style={{ paddingLeft: '10px', textAlign: 'left' }}>
                                <div style={{ fontWeight: '700', fontSize: '1rem' }}>
                                    {coinType}/{currentCurencyType}
                                </div>
                                <div style={{ fontSize: '14px', color: 'rgb(120, 123, 134)' }}>
                                    {coinType}/{currentCurencyType}
                                </div>
                            </div>
                        </h5>
                        <h4 className='card-text' style={{ fontSize: '25px', fontWeight: '700', whiteSpace: 'nowrap' }}>
                            {currentCurencyType} {bidPercentageData.bid_percentage / lastTradedPriceData.last_trade_price}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCards222;