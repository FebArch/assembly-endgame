export default function ({ wordObjArr }) {
    let randomWordH1Element = wordObjArr.map(w => <h1 className={`border-white border-b-2 font-bold  ${w.isLetterGuessed ? "text-gray-300" : "text-transparent"}`}>{w.letter}</h1>)
    return (
        <div className="mx-auto my-4 flex justify-evenly w-80 bg-gray-900 p-2 text-4xl">
            {randomWordH1Element}
        </div>
    )
}