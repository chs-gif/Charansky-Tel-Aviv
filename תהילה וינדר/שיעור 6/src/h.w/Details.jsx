import { useNavigate, useParams ,Outlet} from "react-router-dom"
import { products } from "./Data"
import { Link } from "react-router-dom";


export default function Details() {
    const params = useParams()
    const navigate = useNavigate()
    const product = products.find(p => p.id === +params.id)
    function back() {
        navigate(-1)
    }
    return <>
        <h1>{product.productName}</h1>
        <h2>{product.price}</h2>
        <button onClick={back}>back</button>
        <Link to={"fulldata"}>all about me</Link>
        <Outlet></Outlet>


    </>
}