import React from 'react';
import '../styles/Navbar.css';



const ProductTableFilter = () => {
    return (
        <div className='dropdown nav-item' style={{ display: 'inline-block' }}>
            <div className="btn-group dropdown nav-item">
                <button type="button" className="btn btn-warning dropdown-toggle btn-coin" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{
                        color: 'black', borderRadius: '5px',
                        minWidth: '80px', marginBottom: '10px', marginLeft: '15px'
                    }}
                >
                    USD
                </button>
                <ul className="dropdown-menu dropdown">
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                </ul>
            </div>

            <div className="btn-group dropdown">
                <button type="button" className="btn btn-warning dropdown-toggle btn-cryp" data-bs-toggle="dropdown" aria-expanded="false"
                    style={{
                        color: 'black', borderRadius: '5px',
                        minWidth: '100px', marginBottom: '10px', marginLeft: '15px'
                    }}
                >
                    DOGE
                </button>
                <ul className="dropdown-menu dropdown">
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                    <li><a className="dropdown-item" href="#">DOGE</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductTableFilter;