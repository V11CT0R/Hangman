import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
function View({id}) {
  const imageRef = useRef (null);
  useEffect (() => {
    const [image] = imageRef.current.children;
    gsap.fromTo (
      image,
      {
        scale: 0,
      },
      {duration: 0.2, scale: 1}
    );
  }, []);
  return (
    <div className="view" ref={imageRef}>
      <img src={require (`../img/s${id}.jpg`)} alt="Hangman" />
    </div>
  );
}

export default View;
