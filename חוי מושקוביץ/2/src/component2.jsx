import { useEffect, useState } from "react";
import Sqer from "./sqer";

export default function Component2(){

    const [state, setstate] = useState([["","",""],["","",""],["","",""]])

   const [isXTurn, setIsXTurn] = useState(true);
function Add(event, i, j)
{
    console.log(event);
    

    if (state[i][j] !== "") 
       
                return; 
        
      const currentMark = isXTurn ? 'ex' : 'circle'; 
      state[i][j]=currentMark;
      setstate([...state])
      isXTurn = !isXTurn; 
       setIsXTurn(!isXTurn);
}

    return <>
        {state.map((value,index) =>
            <div key={index}>
                { value.map((va, ind)=>
                    <Sqer onClick={e => Add(e, index, ind)} key={ind} shape={va} ></Sqer>)
                    
                }
           </div>)
        }
    </>
}