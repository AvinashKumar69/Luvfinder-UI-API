import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import tablePic1 from '../assets/tablePic1.png';


const ProductTable = () => {

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
                    <tr>
                        <th scope="row">1</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">16</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">17</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">19</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">20</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">21</th>
                        <td className="d-flex align-items-left justify-content-start">
                            <img className="rounded-circle" src={tablePic1} style={{ width: '18px', height: '23px' }} />
                            <span style={{ fontWeight: '600' }}>Bittrex</span>
                        </td>
                        <td className="LTC">
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <span>0.1337</span>
                        </td>
                        <td className="BID">
                            0.073153 %
                        </td>
                        <td>
                            <span style={{ fontWeight: '600', marginRight: '5px' }}>$</span>
                            <div style={{ display: 'inline' }}>2,430,136,636.82</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;