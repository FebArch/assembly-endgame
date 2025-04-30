export default function ({ wordObjArr }) {
    let randomWordH1Element = wordObjArr.map(w => <h1 className={w.isLetterGuessed ? "" : "opacity-0"}>{w.letter}</h1>)
    return (
        <div className="display">
            {randomWordH1Element}
        </div>
    )
}