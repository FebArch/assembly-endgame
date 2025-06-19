import Key from "./components/Key"
import Display from './components/Display'
import PL from "./components/PL"
import plData from './plData'
import Result from "./components/Result"

import generateRandomWord from "./generateRandomWord"

// import "./App.css"
import "./tailwind.css"
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
    <div className="h-[90vh] w-[100vw] flex justify-around items-center flex-col bg-black text-white">
      <h1 className="text-4xl text-gray-200">Assembly Endgame</h1>
      <p className="text-gray-400 text-center w-80">Guess the Avenger name in 10 Guesses to keep the programming world safe from Assembly!</p>

      {(gameFinishedConditions[0] || gameFinishedConditions[1]) && <Result gameFinishedConditions={gameFinishedConditions} />}
      
      <PL plData={plAvengers} />

      <Display wordObjArr={randomWordArrOfObj[0]} />

      <div className="mx-auto w-90 h-50 text-black bg-gray-900 rounded flex justify-evenly flex-wrap p-2 box-content">
        {keyElements}
      </div>

      {(gameFinishedConditions[0] || gameFinishedConditions[1]) && <button className="w-auto h-auto p-2 text-lg m-1 rounded bg-green-400 text-green-950 font-bold" onClick={()=>window.location.reload()}>New Game</button>}

    </div>
  )
}