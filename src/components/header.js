import React from 'react'
import ProfilePic from '../img/profilePicSmall.jpg'

function Header() {
    return (
        <div>
            <div className='Header-box'>
                <div className='Header-flex-box'>
                    <div className='Header-text-box'>
                        <h1 className='Header-text1'>
                            Hei, jeg <br></br> heter <span className='Strong-text'>Morten</span>
                        </h1>
                        <h3 className='Header-text2'>
                            og er en <b><span className='Strong-text'> frontendutvikler </span></b> <br></br> fra <span className='Strong-text'>Bergen </span>
                        </h3>
                    </div>

                    <div className='Center'>
                        <img src={ProfilePic} alt='profile old handsome man' className='Profile-pic Pic-animation'></img>
                        <div className='About-btn' onClick={aboutShow}>Om meg</div>
                    </div>
                </div>
                <p className='About-text' id='about' >
                    <span className='About-text-one'>
                        Jeg er en kar i 60 årene som er glad i alt som har med it og hardware å gjøre.
                        <br /> <br />
                        På fritiden liker jeg å gjøre.

                    </span>
                    <br /> <br />
                    <span className='About-text-two'>
                    Jeg har jobbet noen år i IT-bransjen allerede og .....
                    </span>
                    <br /> <br />
                    Det jeg liker best med front-end 
                    <br /> <br />
                    Utenom koding så har 
                    <br /> <br />
                    Hvis du er på utkikk etter en 
                    <br /> <br />
                    <br /> <br />
                    <span>
                        Mail: mortenso.kodehode @gmail.com
                        <br />
                        Tlf: jepp
                    </span>
                </p>
            </div>
        </div>
    )
}
let aboutSwitch = false;
function aboutShow() {
    const about = document.getElementById('about')
    if (aboutSwitch === false) {
        about.classList.add('About-show')
    }
    else {
        about.classList.remove('About-show')
    }
    aboutSwitch = !aboutSwitch
}
export default Header