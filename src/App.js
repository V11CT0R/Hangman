import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import PasswordContent from './components/PasswordContent';
import View from './components/View';
import Defeat from './components/Defeat';

function App () {
  const maximumId = 9;
  const [playable, setPlayable] = useState (true);
  const [win, setWin] = useState (false);
  let [id, setId] = useState (0);
  const [usedLetters, setUsedLetters] = useState ([]);
  const password = {
    content: 'KAWA',
    tip: 'Pijesz to zawsze rano !',
  };

  const mapPasswordOnUnderscores = () => {
    let emptyString = '';
    for (let sign of password.content) {
      if (sign === ' ') {
        emptyString += ' ';
      } else {
        emptyString += '_';
      }
    }
    return emptyString;
  };

  const getIndexesFromPassword = sign => {
    const arrOfIndexes = [];
    for (let i = 0; i < password.content.length; i++) {
      if (password.content[i] === sign) {
        arrOfIndexes.push (i);
      }
    }
    return arrOfIndexes;
  };

  const [underscorePassword, setUnderscorePassword] = useState (
    mapPasswordOnUnderscores ()
  );

  const changeUnderscoresOnLetters = (array, sign) => {
    let copyOfHiddenPassword = underscorePassword.split ('');
    array.forEach (index => {
      copyOfHiddenPassword[index] = sign;
    });
    setUnderscorePassword (copyOfHiddenPassword.join (''));
  };

  const increasedId = () => {
    const increasedId = id + 1;
    setId (increasedId);
    if(increasedId === maximumId) { 
      setPlayable(false)
    }
  };
  const checkLetterInPassword = sign => {
    setUsedLetters ([...usedLetters, sign]);
    const arrOfIndexes = getIndexesFromPassword (sign);
    if (arrOfIndexes.length) {
      changeUnderscoresOnLetters (arrOfIndexes, sign);
    } else {
      increasedId ();
    }
  };
  useEffect (
    () => {
      const isWin = underscorePassword === password.content;
      if (isWin) {
        setWin (true);
      }
    },
    [underscorePassword]
  );
  const keyboard = [
    'A',
    'Ą',
    'B',
    'C',
    'Ć',
    'D',
    'E',
    'Ę',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'Ł',
    'M',
    'N',
    'O',
    'Ó',
    'P',
    'Q',
    'R',
    'S',
    'Ś',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Ź',
    'Ż',
  ];

  return (
    <div className="App">
      {playable
        ? <Fragment>
            <PasswordContent
              password={password}
              underscorePassword={underscorePassword}
            />
            <View id={id} />
            <Keyboard
              isWin={win}
              keyboard={keyboard}
              usedLetters={usedLetters}
              checkLetterInPassword={checkLetterInPassword}
            />
          </Fragment>
        : <Defeat password={password.content} />}
    </div>
  );
}

export default App;
