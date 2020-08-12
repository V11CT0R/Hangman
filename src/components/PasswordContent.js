import React, {useRef, useEffect} from 'react';
import Header from './Header';
import gsap from 'gsap';

function PasswordContent(props) {
  const passwordRef = useRef(null);
  useEffect(() => {
    const [rest, tip, underscore] = passwordRef.current.children;
    gsap.set([tip, underscore], {autoAlpha: 0});
    const tl = gsap.timeline();

    tl.fromTo(
      tip,
      {
        x: '-=200',
      },
      {
        x: '+=200',
        duration: 0.2,
        autoAlpha: 1,
      }
    ).fromTo(
      underscore,
      {
        x: '-=200',
      },
      {
        x: '+=200',
        duration: 0.2,
        autoAlpha: 1,
      }
    );
  }, []);

  const {password, underscorePassword} = props;
  return (
    <div className="password-content" ref={passwordRef}>
      <Header />
      <h5 id="tip">Wskazówka: {password.tip}</h5>
      <h2 id="underscore" className="hidden-password">
        {underscorePassword}
      </h2>
    </div>
  );
}

export default PasswordContent;
