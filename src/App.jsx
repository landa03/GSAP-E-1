import { useRef, useState, useCallback } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TimelineMax } from 'gsap/gsap-core';
import { Timeline } from 'gsap/gsap-core';



function App() {
  const [count, setCount] = useState(0)

  const promoContainerRef = useRef();

  var timeLine1 = new Timeline({onComplete: selectNextPromo});
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

  function selectNextPromo(){
    console.log("next promo")
    timeLine1.progress(0);
    timeLine1.play();
  }

  return (
    // <div className='App'>

    //   <div className='box' ref={boxRef}></div>
    // </div>
    <div className='promo-area-left'>


      <div className='container' ref={promoContainerRef}>
        
        <div className='newPromo'>
          <div className='title'>
            Tailored software, perfect fit.
            {/* {promoMessage['promo-1-title']} */}
          </div>
          <div className='message'>
            We design software uniquely built to fit your business goals,
            ensuring seamless integration and maximum efficency.
            {/* {promoMessage['promo-1-content']} */}
          </div>
        </div>
        
        <div className='oldPromo'>
          <div className='title'>
            Gay software, perfect fit.
            {/* {promoMessage['promo-1-title']} */}
          </div>
          <div className='message'>
            It fits up your ass
            {/* {promoMessage['promo-1-content']} */}
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
