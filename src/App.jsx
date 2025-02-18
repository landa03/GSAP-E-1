import { useRef, useState, useCallback } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TimelineMax } from 'gsap/gsap-core';
import { Timeline } from 'gsap/gsap-core';


function App() {
  let promoTitle = ["promo-1-title", "promo-2-title", "promo-3-title"];
  let promoMessage = ["promo-1", "promo-2", "promo-3"];

  let promoContainerRef = useRef();
  
  let promoContainerDisplacement = (promoTitle.length * 450);

  let promoContainerStyleLeft = "-".concat((promoContainerDisplacement).toString(), "px");
  let promoContainerStyleWidth = (promoContainerDisplacement + 450).toString().concat("px");
  
  // let timeLine1 = new Timeline({onComplete:movePromo(450)});
  let timeLine1 = new Timeline();

  useGSAP(() => {
    timeLine1.to(promoContainerRef.current,{
        x: 450, 
        // x: promoContainerDisplacement - 450, 
        duration: 3,
        delay: 3,
        // repeat: -1,
        // repeat: 5,
        repeatDelay: 3,
        // onComplete: killAnimation(),
        onComplete:()=>{
          movePromo(450);
        }
      }
    );
    // timeLine1.to(promoContainerRef.current,{
      // x: -(450 * promoTitle.length),
      // duration: 0,
    // });
  });

  let diplayedPromotionIndex = 0;
  let promoContainerDisplacementInverted = promoContainerDisplacement * -1;
  function movePromo(distance) {
    diplayedPromotionIndex ++;
    promoContainerDisplacementInverted = promoContainerDisplacementInverted + distance;
    console.log(promoContainerDisplacementInverted);
    if (promoContainerDisplacementInverted == 0) {
      promoContainerDisplacementInverted = promoContainerDisplacementInverted - promoContainerDisplacement
    }
    let newPromoPosition = "left:".concat(promoContainerDisplacementInverted, "px");
    let promoDiplayersArray = document.getElementsByClassName("container");
    console.log(newPromoPosition);
    for (let index = 0; index < promoDiplayersArray.length; index++) {
      // console.log(index);
      promoDiplayersArray[index].setAttribute('style', newPromoPosition);
    }
    timeLine1.progress(0);
    timeLine1.resume();
    // console.log("poop");
  }

  let containerStyle = {
    left: promoContainerStyleLeft,
    width: promoContainerStyleWidth,
    // left: '-1800px',
    // width: '1800px'
  };
  console.log(promoContainerStyleLeft);
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
              {/* Tailored software, perfect fit. */}
              {/* {promoMessage['promo-1-title']} */}
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
  
  // return(
  //   <div>poop</div>
  // )
}

export default App
