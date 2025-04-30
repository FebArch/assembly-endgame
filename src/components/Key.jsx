export default function Key(props){
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

    return (
        <button className="btn" onClick={handleClick}>{props.letter}</button>
    )
}