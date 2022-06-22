import React from 'react'
import { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import {
    BEGINNER_TEXT
}       from './constExports/textconstants'
import { ReactComponent as QuestionSvg } from '../img/question.svg'
import HtmlIcon from '../img/html.png'
import CssIcon from '../img/cssIcon.png'
import JsIcon from '../img/jsIcon.png'
import FigmaIcon from '../img/figmaIcon.png'
import ReactIcon from '../img/React-icon.png'
import { ReactComponent as Arrow } from '../img/Extendarrow.svg'
import AbletonIcon from '../img/ableton-icon-0.jpg'
import GimpIcon from '../img/gimpIcon.png'
import ArrowTurn from './scripts/ArrowTurn'

function Skills() {
    return (
        <div>
            <div className='Skill-component'>
                <div className='Component-spacing'>
                </div>
                <h2 className='H2-headline whiteIshBlur'>Ferdigheter</h2>
                <div className='Grid Skills-animation'>
                    <h3 className='Beginner' id='beginner-elm' onClick={showLevelDetail}>Amatør <QuestionSvg className='Svg'></QuestionSvg></h3>
                    <h3 className='Novice' id='novice-elm' onClick={showLevelDetail}>Dreven <QuestionSvg className='Svg'></QuestionSvg></h3>
                    <h3 className='Junior' id='junior-elm' onClick={showLevelDetail}>Junior <QuestionSvg className='Svg'></QuestionSvg></h3>
                    <h3 className='Senior' id='senior-elm' onClick={showLevelDetail}>Senior <QuestionSvg className='Svg'></QuestionSvg></h3>
                    <img className='Html-icon' src={HtmlIcon} alt='html icon'></img>
                    <img className='Css-icon' src={CssIcon} alt='html icon'></img>
                    <img className='Js-icon' src={JsIcon} alt='html icon'></img>
                    <img className='Figma-icon' src={ReactIcon} alt='html icon'></img>
                    <div className='Html-bar'></div>
                    <div className='Css-bar'></div>
                    <div className='Js-bar'></div>
                    <div className='React-bar'></div>
                </div>

                <div className='Grid-extend Skills-animation-two' id='Grid-extend'>
                    <img className='Figma-icon' src={FigmaIcon} alt='Figma icon'></img>
                    <img className='Live-icon' src={AbletonIcon} alt='Ableton live icon'></img>
                    <img className='Gimp-icon' src={GimpIcon} alt='gimp icon'></img>
                    <div className='Figma-bar'></div>
                    <div className='Live-bar'></div>
                    <div className='Gimp-bar'></div>
                </div>

                <div className='Explain Beginner-explain' id='beginner'>{BEGINNER_TEXT}</div>
                <div className='Explain Novice-explain' id='novice'> Kjenner godt til teknologien og hva man kan gjøre med den. Kan arbeide selvstendig med google som hjelp, men trenger noe veiledning</div>
                <div className='Explain Junior-explain' id='junior'> Kan ganske mye og trenger mindre veiledning</div>
                <div className='Explain Senior-explain' id='senior'> Personen som gir veiledning</div>
            </div>

            <div className='Arrow-box' onClick={SkillsExtend}>
                <p>Utvid</p>
                <Arrow className='Arrow' id='Arrow'> </Arrow>
            </div>
        </div>
    )
}

let extendSwitch = false
const consierge = ['Beginner', 'Novice', 'Junior', 'Senior']
var elements = [[{}, false], [{}, false],[{}, false],[{}, false]]

function showLevelDetail(e) {
    elements[0][0] = document.getElementById('beginner')
    elements[1][0] = document.getElementById('novice')
    elements[2][0] = document.getElementById('junior')
    elements[3][0] = document.getElementById('senior')
    
    const showClass = 'Explain-show'
    const clickedElementName = e.target.className

    if (!consierge.includes(e.target.classList.value)) {return}
    
    for  (let i = 0; i < elements.length; i++) {
        if (clickedElementName.toLowerCase() === elements[i][0].id.toLowerCase()) {
            console.log('Clicked ' + clickedElementName + ' ' + showClass + ': ' + elements[i][1])

            if (!elements[i][1]) {
                elements[i][0].classList.add(showClass)
            } else if (elements[i][1]) {
                elements[i][0].classList.remove(showClass) 
            }
            elements[i][1] = !elements[i][1]
        } 
        else {
                elements[i][0].classList.remove(showClass)  
                elements[i][1] = false
        }
    }
}

function SkillsExtend() {
    const extend = document.getElementById('Grid-extend')
    if (extendSwitch === false) {
        extend.classList.add('Skills-extend')
    }
    else {
        extend.classList.remove('Skills-extend')
    }
    extendSwitch = !extendSwitch
    ArrowTurn()
}

export default Skills