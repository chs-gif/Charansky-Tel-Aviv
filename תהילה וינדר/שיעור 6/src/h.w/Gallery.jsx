import { useNavigate } from 'react-router-dom'
import {products} from './Data'
export default function Gallery(){
    const navigate= useNavigate()
    function navigateToNext(id)
    {
        navigate(`/details/${id}`)
    }
    return <>
   {products.map(p=><button onClick={()=>{navigateToNext(p.id)}}>{`product: ${p.productName}  price: ${p.price}`}</button>)} 
    </>
}