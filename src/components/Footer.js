import React from 'react';


const Footer = (props) => {
    const { updateCurrencyTypeSelect, updateCoinType, coinType, currentCurencyType } = props



    return (
        <>
            <div id='mobile-footer' className='w-100 absolute'>

                <div class="btn-group dropup mr-3 bg-white rounded-lg">
                    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {currentCurencyType}
                    </button>
                    <ul class="dropdown-menu">
                        {['USD', 'INR', 'JPY', 'EUR', 'RUB', 'CAKE', 'BTC', 'BNB', 'ETH'].map(currencyType =>
                            <li key={currencyType} onClick={() => updateCurrencyTypeSelect(currencyType)}><a className="dropdown-item" name='USD'>{currencyType}</a></li>
                        )}
                    </ul>
                </div>

                <div class="btn-group dropup ml-3 bg-white rounded-lg">
                    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {coinType}
                    </button>
                    <ul class="dropdown-menu">
                        {['DOGE', 'SHIB', 'MIM', 'SPELL', 'BABYDOGE', 'ELON', 'SAMO', 'CATE', 'HOGE', 'DOBO'].map(coin =>
                            <li key={coin} onClick={() => updateCoinType(coin)}><a className="dropdown-item" name='DOGE'>{coin}</a></li>
                        )}
                    </ul>
                </div>

            </div>

            <a className='telegram-fixed' href='http://t.me/Luvfindingbot' target='_blank' rel='noreferrer'>
                <i className="bi bi-telegram" style={{ color: 'white', backgroundImage: 'rgb(34, 158, 217)', fontSize: '22px' }}></i>
            </a>
        </>
    )
}

export default Footer;