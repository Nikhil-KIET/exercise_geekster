
function Card({itm,setCat,setCdata}){
    return(
        <div className=" rounded-md  bg-slate-300 overflow-hidden flex flex-col  " onClick={()=>{
            setCat(itm.bodyPart);
            setCdata(itm);
            
        }} >
            <img src={itm.gifUrl}alt="" />
            <div>
                <div>
                    <p>{itm.secondaryMuscles[0]}</p>

                </div>

                <div>
                <p>{itm.secondaryMuscles[1]}</p>

                </div>
            </div>
            <h1><p>{itm.bodyPart}</p></h1>

        </div>
    )
}
export default Card;