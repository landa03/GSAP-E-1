import { useRef, useState, useCallback } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TimelineMax } from 'gsap/gsap-core';
import { Timeline } from 'gsap/gsap-core';

/*las variables requieren nombres mas consistentes y adecuados */
function App() {
  // let promoTitle = ["promo-1-title", "promo-2-title", "promo-3-title", "promo-4-title", "promo-5-title", "promo-6-title", "promo-7-title", "promo-8-title"];
  // let promoMessage = ["promo-1", "promo-2", "promo-3", "promo-4", "promo-5", "promo-6", "promo-7", "promo-8"];
  let promoTitle = ["promo-1-title", "promo-2-title", "promo-3-title"];
  let promoMessage = ["promo-1", "promo-2", "promo-3"];

  let promoContainerRef = useRef();

  // let promoSegmentWidth = 450;
  let promoSegmentWidth = 450;
  
  let promoContainerDisplacement = (promoTitle.length * promoSegmentWidth);

  let promoContainerStyleLeft = "-".concat((promoContainerDisplacement).toString(), "px");
  let promoContainerStyleWidth = (promoContainerDisplacement + promoSegmentWidth).toString().concat("px");
  
  // let timeLine1 = new Timeline({onComplete:movePromo(promoSegmentWidth)});
  let timeLine1 = new Timeline();
  
  useGSAP(() => {
    timeLine1.to(promoContainerRef.current,{
      x: promoSegmentWidth, 
      // x: promoContainerDisplacement - promoSegmentWidth, 
      duration: 3,
      delay: 3,
      // repeat: -1,
      // repeat: 5,
      repeatDelay: 3,
      // onComplete: killAnimation(),
      onComplete:()=>{
        movePromo(promoSegmentWidth);
      }
    }
  );
  // timeLine1.to(promoContainerRef.current,{
    // x: -(450 * promoTitle.length),
    // duration: 0,
    // });
  });
  
  let promoContainerDisplacementInverted = promoContainerDisplacement * -1;
  let containerStyle = {
    left: promoContainerStyleLeft,
    width: promoContainerStyleWidth,
    // left: '-1800px',
    // width: '1800px'
  };
  
  function movePromo(distance) {
    // console.log(promoContainerStyleWidth);
    promoContainerDisplacementInverted = promoContainerDisplacementInverted + distance;
    // console.log(promoContainerDisplacementInverted);

    if (promoContainerDisplacementInverted == 0) {
      promoContainerDisplacementInverted = promoContainerDisplacementInverted - promoContainerDisplacement;
    }

    // let newPromoPosition = "left:".concat(promoContainerDisplacementInverted, "px");
    let newPromoPosition = promoContainerDisplacementInverted.toString().concat("px");
    let promoDiplayersArray = document.getElementsByClassName("container");
    // console.log(newPromoPosition);

    for (let index = 0; index < promoDiplayersArray.length; index++) {
      // console.log(index);
      // promoDiplayersArray[index].setAttribute('style', newPromoPosition); /*al modificar el atributo no se sovrelapa con otras modificacionese */
      // containerStyle.width = promoDiplayersArray /*la variable es un read only */
      promoDiplayersArray[index].style.left = newPromoPosition;
    }

    timeLine1.progress(0);
    timeLine1.resume();
    // console.log("poop");
  }


  // console.log(promoContainerStyleLeft);
  return (
    // <div className='App'>

    //   <div className='box' ref={boxRef}></div>
    // </div>
    <div className='promo-area-left'>

      <div className='container' ref={promoContainerRef} style={containerStyle}>

        {promoTitle.map((promoTitle, index) =>(

          <div className='newPromo'>
            <div className='title'>
              {promoTitle}
            </div>
            <div className='message'>
              {promoMessage[index]}
            </div>
          </div>
        
        ))}

        <div className='oldPromo'>
          <div className='title'>
            {promoTitle[0]}
          </div>
          <div className='message'>
            {promoMessage[0]}
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
