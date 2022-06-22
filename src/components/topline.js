import React from 'react';
import ReactLogo from "./ReactLogo";
import ReactMenu from "./ReactMenu";

function TopLine() {
    return (
        <div className='topline-sticky topline-box'>
                <div className='topline-content-box left-side-box'>
                <div><ReactLogo /></div>
                </div>

                <div className='topline-content-box right-side-box'>
                <div className="menuClass"><ReactMenu /></div>
                    {/* <img src={MenuIcon} alt='Menu icon' className='MenuClass'></img> */}
                </div>
        </div>
    )
}

export default TopLine