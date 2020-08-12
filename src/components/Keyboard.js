import React ,{useEffect,useRef}from 'react';
import gsap from "gsap" ;
function Keyboard(props) {
    const keyRef = useRef(null) ; 
    useEffect(() => { 
        const elements = keyRef.current.children;
        gsap.set(elements,{scaleY:0,autoAlpha: 0})
        const tl = gsap.timeline({defaults:{
            ease:"power3.InOut"
        }}) ; 
        tl.to(elements,{
            duration:0.1,
            transformOrigin:"50% 100%" ,
            autoAlpha:1,
            scaleY: 1,
            stagger:0.02
        })
    },[])
    const { keyboard, usedLetters, checkLetterInPassword, isWin } = props;
    return (
        <div className="keyboard" ref={keyRef}>
            {keyboard.map((letter) => {
                const isContains = usedLetters.includes(letter) ? true : false;
                if (isContains) {
                    return (
                        <button key={letter} className="keyboardLetter contains">
                            {letter}
                        </button>
                    );
                } else {
                    const gameEndedClasses = !isWin
                        ? 'keyboardLetter'
                        : 'keyboardLetter winGame';
                    return (
                        <button
                            key={letter}
                            disabled={!isWin ? false : true}
                            className={gameEndedClasses}
                            onClick={() => {
                                checkLetterInPassword(letter);
                            }}
                        >
                            {letter}
                        </button>
                    );
                }
            })}
        </div>
    );
}

export default Keyboard;
