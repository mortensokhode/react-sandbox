import React from 'react'
import { StyledRow } from "./styles/styles01";
import ReactLogo from "../../../components/ReactLogo";
import { StyledH1, StyledLink, StyledNav } from "./components/styles/styles02";
  
const Header = () => {
  return (
    <div className='Header-box'>
        <div className='IngressRamme'>
            <div className='IngressOuter blurredShadow'>
                <div className='IngressBoks' onClick={detailShow}>
                <StyledRow>
                    <ReactLogo />
                    <StyledH1>Blaba bladibla Grommelom</StyledH1>
                    <ReactLogo />
                </StyledRow>

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

    // return (
    //   <StyledHeader>
    //     <StyledRow>
    //       <ReactLogo />
    //       <StyledH1>React Lessons 2.0</StyledH1>
    //       <ReactLogo />
    //     </StyledRow>
    //     <StyledNav>
    //       <StyledLink to="/about-us">About</StyledLink>
    //       <StyledLink to="/cat-facts">Cat Api</StyledLink>
    //       <StyledLink to="/pante-person-selector">Panting</StyledLink>
    //       <StyledLink to="/student-projects">Projects</StyledLink>
    //     </StyledNav>
    //   </StyledHeader>
    // );
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
  