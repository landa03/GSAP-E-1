import { useRef, useState, useCallback } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TimelineMax } from 'gsap/gsap-core';
import { Timeline } from 'gsap/gsap-core';

let promoTitle = ["promo-1-title", "promo-2-title", "promo-3-title"];
let promoMessage = ["promo-1", "promo-2", "promo-3"];

function App() {
  let [count, setCount] = useState(0)
  let [promoState, setPromoState] = useState(0);

  let promoContainerRef = useRef();

  // var timeLine1 = new Timeline({onComplete: selectNextPromo});
  var timeLine1 = new Timeline({onStart: selectNextPromo, onComplete: restartAnimation});
  useGSAP(() => {
    timeLine1.to(promoContainerRef.current,{
        x: 450, 
        duration: 3,
        delay: 3,
        repeat: 0,
        repeatDelay: 0,
      }
    );
  });

  var oldPromoIndex = promoTitle.length - 1;
  var newPromoIndex = 0;

  function restartAnimation() {
    timeLine1.progress(0);
    timeLine1.play();
    
  }
  
  function selectNextPromo(){
    setPromoState(promoState + 1);
    // console.log("next promo" ,oldPromoIndex ,newPromoIndex);
    console.log(promoTitle[oldPromoIndex], promoTitle[newPromoIndex])
    if (newPromoIndex >= (promoTitle.length - 1)) {
      newPromoIndex = 0;
      oldPromoIndex = promoTitle.length - 1;
    }else {
      newPromoIndex ++;
      oldPromoIndex = newPromoIndex - 1;
    }
  }

  return (
    // <div className='App'>

    //   <div className='box' ref={boxRef}></div>
    // </div>
    <div className='promo-area-left'>


      <div className='container' ref={promoContainerRef}>
        
        <div className='newPromo'>
          <div className='title'>
            {promoTitle[newPromoIndex]}
            {/* Tailored software, perfect fit. */}
            {/* {promoMessage['promo-1-title']} */}
          </div>
          <div className='message'>
            {promoMessage[newPromoIndex]}
          </div>
        </div>
        
        <div className='oldPromo'>
          <div className='title'>
            {promoTitle[oldPromoIndex]}
          </div>
          <div className='message'>
            {promoMessage[oldPromoIndex]}
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
