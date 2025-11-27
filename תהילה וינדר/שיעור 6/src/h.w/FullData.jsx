import { useParams } from "react-router-dom"
import { products } from "./Data"


export default function FullData() {
    const params = useParams()
    const product = products.find(p => p.id === +params.id)
    return <>
    {product.productName}</>
}