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

  // let [count, setCount] = useState(0)
  
  // const [oldPromoState, setOldPromoState] = useState(promoTitle.length - 1);
  // const [newPromoState, setNewPromoState] = useState(0);

  let promoContainerRef = useRef();

  // var timeLine1 = new Timeline({onComplete: selectNextPromo});
  // var timeLine1 = new Timeline({onStart: selectNextPromo, onComplete: restartAnimation});
  var timeLine1 = new Timeline();
  useGSAP(() => {
    timeLine1.to(promoContainerRef.current,{
        x: 450, 
        duration: 3,
        delay: 3,
        repeat: -1,
        // repeat: promoTitle.length,
        repeatDelay: 3,
      }
    );
    // timeLine1.to(promoContainerRef.current,{
    //   x: -(450 * promoTitle.length),
    //   duration: 0,
    // });
  });

  // var oldPromoIndex = promoTitle.length - 1;
  // var newPromoIndex = 0;

  // function restartAnimation() {
    // setNewPromoState(newPromoIndex);
    // setOldPromoState(oldPromoIndex);
    // timeLine1.progress(0);
    // timeLine1.play();
    // console.log(promoMessage[oldPromoState], promoMessage[newPromoState]);
    
  // }
  
  // function selectNextPromo(){
    // setPromoState(promoState + 1);
    // console.log("next promo" ,oldPromoIndex ,newPromoIndex);
    // console.log(promoTitle[oldPromoIndex], promoTitle[newPromoIndex]);
    // if (newPromoIndex >= (promoTitle.length - 1)) {
      // newPromoIndex = 0;
      // oldPromoIndex = promoTitle.length - 1;
    // }else {
      // newPromoIndex ++;
      // setNewPromoState(newPromoIndex);
      // oldPromoIndex = newPromoIndex - 1;
    // }
    // setNewPromoState(newPromoIndex);
    // setOldPromoState(oldPromoIndex);
  // }

  return (
    // <div className='App'>

    //   <div className='box' ref={boxRef}></div>
    // </div>
    <div className='promo-area-left'>


      <div className='container' ref={promoContainerRef}>
        
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
