import Key from "./components/Key"
import Display from './components/Display'
import PL from "./components/PL"

import "./App.css"
import { useState } from "react"

export default function App() {
  const randomWord = "VENOM"

  const wordArr = randomWord.split("").map((w) => { return { letter: w, isLetterGuessed: false } })
  const [randomWordArrOfObj, setRandomWordArrOfObj] = useState(wordArr)

  const alphabetArr = Array.from({ length: 26 }, (_, i) => ({
    letter: String.fromCharCode(65 + i), // 65 is the char code for 'A'
    alphabetGuessed: false
  }));

  function catchLetterAndCheckIt(letter) {
    setRandomWordArrOfObj((prev) => {
      return prev.map(o => {
        if (o.letter === letter) {
          return { ...o, isLetterGuessed: !o.isLetterGuessed }
        }
        return o
      })
    })
  }

  const keyElements = alphabetArr.map((e, index) => {
    return <Key key={index} letter={e.letter} word={randomWord} handleClick={catchLetterAndCheckIt} />
  })

  return (
    <div className="container">
      <h1>Assembly Endgame</h1>

      <PL />

      <Display wordObjArr={randomWordArrOfObj} />

      <div className="keyboard">
        {keyElements}
      </div>
    </div>
  )
}