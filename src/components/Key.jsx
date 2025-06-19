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
            e.currentTarget.classList.add("bg-green-400")
        }else{
            e.currentTarget.classList.add("bg-red-400")
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
        <button className="w-[12%] border m-1 bg-amber-400 h-[20%] rounded" onClick={handleClick}>{props.letter}</button>
    )
}