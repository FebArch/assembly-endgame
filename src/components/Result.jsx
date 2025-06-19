export default function Result({gameFinishedConditions}){

    //word pl 
    // t   f    -->win
    // t   t    -->NA
    // f   f    -->game continues
    // f   t    -->Lost
    return <div className={`rounded w-70 text-center font-bold ${(gameFinishedConditions[0] && !gameFinishedConditions[1]) ? "bg-green-500 text-green-900 px-1" : "bg-red-600 text-white px-1" }`}>
        <h2>{(gameFinishedConditions[0] && !gameFinishedConditions[1]) ? "You Win!" : "Game Over" }</h2>
        <p> {(gameFinishedConditions[0] && !gameFinishedConditions[1]) ?  "Well Done" : "You Lose! Better Start Learning Assembly"}</p>
    </div>
}