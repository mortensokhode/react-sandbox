import React from 'react'

function Header() {
    return (
            <div className='Header-box'>
                <div className='IngressRamme'>
                    <div className='IngressOuter blurredShadow'>
                        <div className='IngressBoks' onClick={detailShow}>
                            <h1 className='Header-text'>
                                Blaba bladibla <br /> <span className='ThinText'>Grommelom</span>
                            </h1><br />
                            <h3 className='Header-text'>
                                Nada innhold
                            </h3>
                        </div>
                    </div>
                    <div className='IngressOuter blurredShadow'>
                        <div className='IngressBoks' onClick={detailShow}>
                            <h1 className='Header-text'>
                                Ny fiffig overskrift 
                            </h1><br />
                            <h3 className='Header-text'>
                                Med enda mer ultrainteressant innhold
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="detailOuter blurredShadow" id='details'>
                <div className="detailBox" id='details'>
                    <p className='DetailedText'>
                        <span>
                        <br /><br />
                        </span><br /> <br />
                        <span>
                            Mail: mortenso.kodehode@gmail.com
                            <br />
                            Tlf: jepp
                        </span>
                    </p>
                </div>
                </div>

            </div>
    )
}

let detailsSwitch = false;

function detailShow() {
    const details = document.getElementById('details')
    if (detailsSwitch === false) {
        details.classList.add('DetailShow')
        }
    else {
        details.classList.remove('DetailShow')
        }
    detailsSwitch = !detailsSwitch
}

export default Header