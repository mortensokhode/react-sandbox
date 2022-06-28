import React from 'react'
import IngressBox from './ingressBox';
import DetailsBox from './detailsBox';
// import {myUrl} from './constExports/globalConstants'; 


const Header = () => {
  return (
    <div className='Header-box'>
        <div className='topSpace'></div>

        <div className='IngressRamme'>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                    <h2 className='IngressHeading'>
                        "Something No.1"<br /><br />
                    </h2>
                    <h3 className='IngressText'>
                        "Text line no.1"  <br />
                        "Text line no.2"  <br />
                        "Text line no.3"  <br />
                        "Text line no.4"  <br />
                    </h3>
                </div>
            </div>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                <h2 className='IngressHeading'>
                    "Something No.2"<br /><br />
                    </h2>
                    <h3 className='IngressText'>
                        "Text line no.1"  <br />
                        "Text line no.2"  <br />
                        "Text line no.3"  <br />
                        "Text line no.4"  <br />
                    </h3>
                </div>
            </div>
        </div>
        <div className='IngressRamme'>
            <IngressBox />
        </div>
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
  