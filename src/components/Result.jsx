export default function Result({gameFinishedConditions}){

    //word pl 
    // t   f    -->win
    // t   t    -->NA
    // f   f    -->game continues
    // f   t    -->Lost
    return <div className={(gameFinishedConditions[0] && !gameFinishedConditions[1]) ? "msg" : "msg-danger" }>
        <h2>{(gameFinishedConditions[0] && !gameFinishedConditions[1]) ? "You Win!" : "Game Over" }</h2>
        <p> {(gameFinishedConditions[0] && !gameFinishedConditions[1]) ?  "Well Done" : "You Lose! Better Start Learning Assembly"}</p>
    </div>
}