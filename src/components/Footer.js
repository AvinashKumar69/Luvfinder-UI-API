import React from 'react';
import { ChatAlt2Icon } from '@heroicons/react/outline';


const Footer = () => {
    return (
        <>
            {/* <div id='mobile-footer' className='w-100'>
                USD / DOGO Dropdown
            </div> */}
            <a className='telegram-fixed' href='http://t.me/Luvfindingbot' target='_blank' rel='noreferrer'>
                <ChatAlt2Icon className='h-6 w-6' style={{ color: 'white', backgroundImage: 'rgb(34, 158, 217)', fontSize: '22px' }} />
            </a>
        </>
    )
}

export default Footer;