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
                            <div className="dropdown-menu dropdown">
                                {['DOGE', 'SHIB', 'MIM', 'SPELL', 'BABYDOGE', 'ELON', 'SAMO', 'CATE', 'HOGE', 'DOBO'].map(coin =>
                                    <li key={coin} onClick={() => updateCoinType(coin)}><a className="dropdown-item" name='DOGE'>{coin}</a></li>
                                )}
                            </div>
                        </li>

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
            </div >
        </nav >
    )
}

export default Header;