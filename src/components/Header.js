import React from 'react';
import '../styles/Navbar.css';


const Header = (props) => {

    const { updateCurrencyTypeSelect, updateCoinType, coinType, currentCurencyType } = props

    return (
        <nav id='navbar_top' className="navbar navbar-expand-lg navbar-light bg-light font-font-custom font-bold mt-10 bg-white mx-auto sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand brand" href="/" style={{ fontWeight: '900', color: 'orange' }} >LU❤️FINDER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                        <li className="nav-item mr-2">
                            <a className="nav-link" aria-current="page" href="#" style={{ fontWeight: '900', color: 'black' }} >HOME</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#market" style={{ fontWeight: '900', color: 'black' }} >MARKET</a>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle rounded-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{
                                    backgroundColor: 'rgb(255, 179, 31)', color: 'white', borderRadius: '5px',
                                    minWidth: '80px', marginBottom: '10px'
                                }}
                            >
                                {currentCurencyType}
                            </button>
                            {/* <ul className="dropdown-menu rounded-lg" aria-labelledby="navbarDropdown"></ul> */}
                            <div className="dropdown-menu dropdown rounded-lg">
                                {['USD', 'INR', 'JPY', 'EUR', 'RUB', 'CAKE', 'BTC', 'BNB', 'ETH'].map(currencyType =>
                                    <li key={currencyType} onClick={() => updateCurrencyTypeSelect(currencyType)}><a className="dropdown-item" name='USD'>{currencyType}</a></li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle rounded-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{
                                    backgroundColor: 'rgb(255, 179, 31)', color: 'white', borderRadius: '5px',
                                    minWidth: '80px', marginBottom: '10px', marginLeft: '15px'
                                }}
                            >
                                {coinType}
                            </button>
                            {/* <ul className="dropdown-menu rounded-lg" aria-labelledby="navbarDropdown"></ul> */}
                            <div className="dropdown-menu dropdown">
                                {['DOGE', 'SHIB', 'MIM', 'SPELL', 'BABYDOGE', 'ELON', 'SAMO', 'CATE', 'HOGE', 'DOBO'].map(coin =>
                                    <li key={coin} onClick={() => updateCoinType(coin)}><a className="dropdown-item" name='DOGE'>{coin}</a></li>
                                )}
                            </div>
                        </li>
                        {/* <li className="nav-item"
                            style={{
                                backgroundColor: 'rgb(34, 158, 217)', borderRadius: '7px',
                                marginLeft: '15px', color: 'white', width: '100px', marginBottom: '10px'
                            }}
                        >
                            <button className="btn btn-sm rounded-lg font-bold" href="#" type='button'>CONNECT</button>
                        </li> */}

                        <li className='nav-item nav-link mr-0 .header-connect-button' style={{
                            backgroundColor: 'rgb(34, 158, 217)', borderRadius: '7px',
                            marginLeft: '15px', color: 'white', width: '140px', marginBottom: '10px', height: '47px'
                        }}>
                            <a className='btn' href='https://twitter.com/LuvInuCoin' target='_blank' rel='noreferrer'
                                style={{ color: 'white', fontSize: '16px', fontWeight: '900' }}>
                                CONNECT
                                <i className="bi bi-twitter" style={{ color: 'white', marginLeft: '5px' }}></i>
                            </a>
                        </li>

                    </ul>
                </div>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
            </div >
        </nav >



        // <nav id='navbar_top' className='navbar navbar-default navbar-expand-lg container-fluid pt-5 font-bold sticky-top'>
        //     <a className='navbar-brand brand' href='/'>LU❤️FINDER</a>
        //     <button className='navbar-toggler custom-toggler collapsed' type='button' data-toggle='collapse'
        //         data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
        //         aria-label='Toggle navigation'>
        //         <span className='navbar-toggler-icon'></span>
        //     </button>
        //     <div className='navbar-collapse collapse' id='navbarSupportedContent'>
        //         <ul className='navbar-nav w-100 d-flex justify-content-end'>
        //             <li className='nav-items'>
        //                 <a className='nav-link' href='/'>
        //                     Home
        //                     <span className='sr-only'>(current)</span>
        //                 </a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a className='nav-link' href='#market'>Market</a>
        //             </li>
        //             {/* <div className='dropdown nav-item'>
        //                 <button className='dropdown-toggle nav-link btn-coin' type='button' id='dropdownMenuButton'
        //                     data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'
        //                     style={{
        //                         backgroundColor: 'rgb(255, 179, 31)', color: 'white', borderRadius: '5px',
        //                         minWidth: '80px', marginBottom: '10px'
        //                     }}>
        //                     USD
        //                 </button>
        //                 <div className='dropdown' aria-labelledby='dropdownMenuButton'>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                     <div className='dropdown-item'>USD</div>
        //                 </div>
        //             </div> */}

        //             {/* <div className="btn-group dropdown nav-item">
        //                 <button type="button" className="btn btn-warning dropdown-toggle btn-coin" data-bs-toggle="dropdown" aria-expanded="false"
        //                     style={{
        //                         backgroundColor: 'rgb(255, 179, 31)', color: 'white', borderRadius: '5px',
        //                         minWidth: '80px', marginBottom: '10px', marginLeft: '15px'
        //                     }}
        //                 >
        //                     USD
        //                 </button>
        //                 <ul className="dropdown-menu dropdown">
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                     <li><a className="dropdown-item" href="#">USD</a></li>
        //                 </ul>
        //             </div>

        //             <div className="btn-group dropdown">
        //                 <button type="button" className="btn btn-warning dropdown-toggle btn-cryp" data-bs-toggle="dropdown" aria-expanded="false"
        //                     style={{
        //                         backgroundColor: 'rgb(255, 179, 31)', color: 'white', borderRadius: '5px',
        //                         minWidth: '100px', marginBottom: '10px', marginLeft: '15px'
        //                     }}
        //                 >
        //                     DOGE
        //                 </button>
        //                 <ul className="dropdown-menu dropdown">
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                     <li><a className="dropdown-item" href="#">DOGE</a></li>
        //                 </ul>
        //             </div> */}

        //             <li className='nav-item mr-0' style={{
        //                 backgroundColor: 'rgb(34, 158, 217)', borderRadius: '7px',
        //                 marginLeft: '15px', color: 'white', width: '100px', marginBottom: '10px'
        //             }}>
        //                 <a className='btn' href='https://twitter.com/LuvInuCoin' target='_blank' rel='noreferrer'
        //                     style={{ color: 'white' }}>
        //                     CONNECT
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav >
    )
}

export default Header;