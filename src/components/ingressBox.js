import React from 'react';
const textPackage = { headline: "Hei, jeg er Morten", ingressParagraph: "Her er det litt mer tekst" };

function IngressH2line(props) {
    return (
        <h2 className='IngressText'>{ props.textLine.headline }</h2>
    )
  }

function IngressH3line(props) {
    return (
        <h3 className='IngressText'>{ props.textLine.ingressParagraph }</h3>
    )
  }

const IngressBox = () => {

    return (
    <>
        <div className='IngressRamme'>
            <div className='IngressOuter blurredShadow'>
                <div className='IngressBoks'>
                    <IngressH2line textLine={ textPackage } />
                    <IngressH3line textLine={ textPackage } />
                </div>
            </div>
        </div>
    </>
)
};

export default IngressBox;
