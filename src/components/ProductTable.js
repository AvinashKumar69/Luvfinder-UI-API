import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import tablePic1 from '../assets/tablePic1.png';


const ProductTable = (props) => {

    const { mainData } = props
    console.log('mainData in ProductTable-->', mainData);

    // const bidPercentageArray = mainData?.map((bidPercentage) => {
    //     return (
    //         bidPercentage.bid_percentage
    //     )
    // })
    // console.log('bidPercentageArray--->', bidPercentageArray);

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <div className="table-responsive mb-5 mx-4" data-aos='fade-up'>
            <table className="table">
                <thead>
                    <tr>
                        <th className="pointer rounded-top align-middle" scope="col">#</th>
                        <th scope="col">Platform</th>
                        <th id='lastTrade' scope="col" style={{ width: '30%' }}>Last Traded Price</th>
                        <th id="bid" scope="col">Bid Percentage</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        mainData && mainData.length > 0 && mainData?.map((data, ind) => {
                            return (
                                <tr key={ind}>
                                    <th scope="row">{ind + 1}</th>
                                    <td className="d-flex align-items-left justify-content-start">
                                        <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                                        <span style={{ fontWeight: '600' }}>{data.name}</span>
                                    </td>
                                    <td className="LTC">
                                        <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                                        <span>
                                            {data.last_trade_price}
                                        </span>
                                    </td>
                                    <td className="BID">
                                        {data.bid_percentage}
                                    </td>
                                    <td>
                                        <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                                        <div style={{ display: 'inline' }}>
                                            {data.volume}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;