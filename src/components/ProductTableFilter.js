import React from 'react';
import '../styles/Navbar.css';



const ProductTableFilter = (props) => {

    const { updateCurrencyTypeSelect, updateCoinType, coinType, currentCurencyType } = props

    return (
        <div className='dropdown nav-item' style={{ display: 'inline-block' }}>
            <div className="btn-group dropdown nav-item">
                <button type="button" className="btn btn-warning dropdown-toggle btn-coin" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{
                        color: 'black', borderRadius: '5px',
                        minWidth: '80px', marginBottom: '10px', marginLeft: '15px'
                    }}
                >
                    {currentCurencyType}
                </button>
                <div className="dropdown-menu dropdown">
                    {['USD', 'INR', 'JPY', 'EUR', 'RUB', 'CAKE', 'BTC', 'BNB', 'ETH'].map(currencyType =>
                        <li key={currencyType} onClick={() => updateCurrencyTypeSelect(currencyType)}><a className="dropdown-item" name='USD'>{currencyType}</a></li>
                    )}
                </div>
            </div>

            <div className="btn-group dropdown">
                <button type="button" className="btn btn-warning dropdown-toggle btn-cryp" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{
                        color: 'black', borderRadius: '5px',
                        minWidth: '100px', marginBottom: '10px', marginLeft: '15px'
                    }}
                >
                    {coinType}
                </button>
                <div className="dropdown-menu dropdown">
                    {['DOGE', 'SHIB', 'MIM', 'SPELL', 'BABYDOGE', 'ELON', 'SAMO', 'CATE', 'HOGE', 'DOBO'].map(coin =>
                        <li key={coin} onClick={() => updateCoinType(coin)}><a className="dropdown-item" name='DOGE'>{coin}</a></li>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductTableFilter;