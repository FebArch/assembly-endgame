import plData from '../plData'

export default function PL(){
    let plElem = plData.map((pl)=>{
        return <div style={{backgroundColor: pl.bgColor, color: pl.color}}>{pl.plName}</div>
    })

    return (
        <div className="plContainer">
            {plElem}
        </div>
    )
}