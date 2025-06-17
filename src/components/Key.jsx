export default function Key(props){

    if (props.resetGame) {
        let allbtns = document.getElementsByClassName('btn')
        allbtns = Array.from(allbtns)
        allbtns.map((b)=>{
            b.disabled = false
            b.currentTarget.classList.remove("correctLetterGuessed")
            b.currentTarget.classList.remove("wrongLetterGuessed")
        })
        console.log("resetFunctionCalled")

    }

    function handleClick(e){
        e.currentTarget.disabled = true
        e.currentTarget.classList.remove("btn")
        if (props.word.includes(props.letter)) {
            e.currentTarget.classList.add("correctLetterGuessed")
        }else{
            e.currentTarget.classList.add("wrongLetterGuessed")
        }
        props.handleClick(e.currentTarget.textContent)
    }

    if (props.gameFinishedConditions[0] || props.gameFinishedConditions[1]) {
        let allbtns = document.getElementsByClassName('btn')
        allbtns = Array.from(allbtns)
        allbtns.map((b)=>{
            b.disabled = true
        })
    }

    return (
        <button className="btn" onClick={handleClick}>{props.letter}</button>
    )
}