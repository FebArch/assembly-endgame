export default function PL(props) {
  let plElem = props.plData.map((pl) => {
    return (
      <div style={{ backgroundColor: pl.bgColor, color: pl.color }}
            className="relative w-auto px-2 py-1 m-1 rounded"
      >
        {pl.plName}{" "}
        {pl.isVanished && (
          <p className={pl.isVanished && "absolute w-[100%] text-center h-[100%] top-0 left-0 opacity-[0.7] bg-black"}>💀</p>
        )}{" "}
      </div>
    );
  });

  return (
    <div className="w-90 flex flex-wrap justify-evenly items-center">
      {plElem}
    </div>
  );
}
