import Key from "./components/Key"
import Display from './components/Display'
import PL from "./components/PL"
import plData from './plData'
import Result from "./components/Result"

import generateRandomWord from "./generateRandomWord"

import "./App.css"
import { useState } from "react"

export default function App() {

  const [randomWordArrOfObj, setRandomWordArrOfObj] = useState(generateRandomWord())

  const [plAvengers, setPLAvengers] = useState(plData)

  const [alphabetArr, setAplhabetArr] = useState(Array.from({ length: 26 }, (_, i) => ({
    letter: String.fromCharCode(65 + i), // 65 is the char code for 'A'
    alphabetGuessed: false
  })))
  
  function catchLetterAndCheckIt(letter) {
    setRandomWordArrOfObj((prev) => {
      let newArr = prev[0].map(o => {
        if (o.letter === letter) {
          return { ...o, isLetterGuessed: !o.isLetterGuessed }
        }
        return o
      })
      return [newArr, prev[1]] 
    })

    setPLAvengers((prev) => {
      let count = 0
      return prev.map((pl) => {
        if (count < 1 && !pl.isVanished && !randomWordArrOfObj[1].includes(letter)) {
          count++;
          return { ...pl, isVanished: !pl.isVanished }
        }
        return pl
      })
    })
  }

  function resetGame(){
    setRandomWordArrOfObj(generateRandomWord())
    setPLAvengers(plData)
    setAplhabetArr(Array.from({ length: 26 }, (_, i) => ({
      letter: String.fromCharCode(65 + i), // 65 is the char code for 'A'
      alphabetGuessed: false
    })))
  }

  const isWordGuessed = randomWordArrOfObj[0].every((o)=>{
    return o.isLetterGuessed===true
  })

  
  const areAllPLVanished = plAvengers.slice(0, 10).every(e=>{
    return e.isVanished === true
  })
  
  let gameFinishedConditions = [isWordGuessed, areAllPLVanished]
  
  const keyElements = alphabetArr.map((e, index) => {
    return <Key key={index} letter={e.letter} word={randomWordArrOfObj[1]} gameFinishedConditions={gameFinishedConditions} alphabetGuessed={e.alphabetGuessed} handleClick={catchLetterAndCheckIt} />
  })
  return (
    <div className="container">
      <h1>Assembly Endgame</h1>
      <p>Guess the Avenger name in 10 Guesses to keep the programming world safe from Assembly!</p>

      {(gameFinishedConditions[0] || gameFinishedConditions[1]) && <Result gameFinishedConditions={gameFinishedConditions} />}
      
      <PL plData={plAvengers} />

      <Display wordObjArr={randomWordArrOfObj[0]} />

      <div className="keyboard">
        {keyElements}
      </div>

      {(gameFinishedConditions[0] || gameFinishedConditions[1]) && <button className="new-game-btn" onClick={resetGame}>New Game</button>}

    </div>
  )
}