import Card from "./Card";
function Cards({data,setCat,setCdata}){
    
    return(
        
        
        <div className=" flex flex-wrap my-20 gap-5 justify-evenly ">
            

            {
               data.map((itm)=>{
                     return <Card itm={itm} setCat={setCat} setCdata={setCdata}></Card>
                })
            }




        </div>
    )

}

export default Cards;