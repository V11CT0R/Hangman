import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

function Header () {
  const titleRef = useRef (null);
  useEffect (() => {
    const title = titleRef.current.children[0];
    gsap.timeline({defaults:{
        delay:1
    }})
    gsap.from(title,0.4,{
        opacity: 0 ,
        y:-100,
        transform:"rotateZ(45deg)"
    })
  }, []);
  return (
    <div ref={titleRef} className="wrapper-title">
      <h1 className="title-header" id="title-header" style={{fontSize: '34px'}}>
        Hangman App{' '}
      </h1>
    </div>
  );
}

export default Header;
