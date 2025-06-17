

export default function PL(props) {
    let plElem = props.plData.map((pl) => {
        return <div style={{ backgroundColor: pl.bgColor, color: pl.color }}>{pl.plName} {pl.isVanished && <p className={pl.isVanished ? "skull" : ""}>💀</p>} </div>
    })

    return (
        <div className="plContainer">
            {plElem}
        </div>
    )
}