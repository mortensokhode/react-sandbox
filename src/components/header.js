import React from 'react'
import IngressBox from './ingressBox';
import DetailsBox from './detailsBox';
import {gitHubHeader, gitHubRepositories} from './gitHubfunction';

const Header = () => {
  return (
    <div className='Header-box'>
        <div className='topSpace'></div>

        <div className='IngressRamme'>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                    <h2 className='IngressText'>
                        Blaba bladibla Grommelom
                    </h2>
                    <h3 className='IngressText'>
                        Nada innhold
                    </h3>
                </div>
            </div>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                    <h2 className='IngressText'>
                        Ny fiffig overskrift 
                    </h2><br />
                    <h3 className='IngressText'>
                        Med enda mer ultrainteressant innhold
                    </h3>
                </div>
            </div>
        </div>
            <IngressBox />
            <DetailsBox />
    </div>
  )
};
  
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

  export default Header;
  