import React from 'react';
import logo from '../../../assets/logo/logo.png';

export default function Header() {
    return (
        <div className='header bg-sky-950 py-2'>
            <div className="container mx-auto">
                <header>
                    <div className="w-22">
                        <img src={logo} alt="company-logo" />
                    </div>
                </header>
            </div>
        </div>
    )
}
