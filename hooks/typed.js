import { useState, useEffect } from 'react';

export default function useTyped({strings, startDelay, backDelay}) {
  // State for keeping track of whether key is pressed
  const [currentString, setCurrentString] = useState('')
  let arrayPos = 0
  let timer = 0

  const typewrite = (curString, curStrPos) => {
    let humanize = Math.round(Math.random() * (100 - 30));

    timer = setTimeout(() => {
        if (curStrPos === curString.length) {
            timer = setTimeout(function() {
                backspace(curString, curStrPos);
            }, backDelay);
        } else {
            setCurrentString( curString.substr(0, curStrPos + 1) )

            curStrPos++;
			typewrite(curString, curStrPos);
        }
    }, humanize)
  }
  
  const backspace = (curString, curStrPos) => {
    let humanize = Math.round(Math.random() * (100 - 30));

    timer = setTimeout(() => {
        setCurrentString( curString.substr(0, curStrPos) )

        if (curStrPos > 0) {
            curStrPos--;
            backspace(curString, curStrPos)
        } else {
            arrayPos++
            if( arrayPos === strings.length )
                arrayPos = 0

            typewrite(strings[arrayPos], curStrPos);
        }
    }, humanize)
  }

  useEffect(() => {
    timer = setTimeout(() => {
        typewrite(strings[0], 0)
    }, startDelay)
    // Remove event listeners on cleanup
    return () => {
      clearTimeout( timer )
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return currentString;
}