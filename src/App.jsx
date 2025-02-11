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
  
  let promoContainerDisplacement = (promoTitle.length * 450) + 450;

  let promoContainerStyleLeft = "-".concat(promoContainerDisplacement.toString(), "px");
  let promoContainerStyleWidth = promoContainerDisplacement.toString().concat("px");

  var timeLine1 = new Timeline();
  useGSAP(() => {
    timeLine1.to(promoContainerRef.current,{
        x: 450, 
        duration: 3,
        delay: 3,
        repeat: -1,
        repeatDelay: 3,
      }
    );
    // timeLine1.to(promoContainerRef.current,{
    //   x: -(450 * promoTitle.length),
    //   duration: 0,
    // });
  });

  let containerStyle = {
    left: promoContainerStyleLeft,
    width: promoContainerStyleWidth,
    // left: '-1800px',
    // width: '1800px'
  };
  return (
    // <div className='App'>

    //   <div className='box' ref={boxRef}></div>
    // </div>
    <div className='promo-area-left'>


      {/* <div className='container' ref={promoContainerRef} style={promoContainerStyleLeft}> */}
      {/* <div className='container' ref="promoContainerRef"> */}
      {/* <div className='container' ref={promoContainerRef} id="pliz"> */}
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
