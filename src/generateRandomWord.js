const randomWords = [
    "IRONMAN", "LOKI", "VISION", "ULTRON",
    "VENOM", "SPIDERMAN", "THOR", "HULK",
    "THANOS", "FALCON", "ROCKET", "GROOT",
    "GAMORA", "HAWKEYE", "KNULL"
]

export default function generateRandomWord() {
    let randomIndex = Math.floor(Math.random() * randomWords.length)
    const randomWord = randomWords[randomIndex]
    return [randomWord.split("").map((w) => { return { letter: w, isLetterGuessed: false } }), randomWord]
}