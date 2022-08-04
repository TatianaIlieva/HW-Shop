import React from "react"
import {useParams} from "react-router-dom"
import {data} from "../data";

export default function ProductDetail() {
    const {id} = useParams();
    const thisProduct = data.filter(el => el.id === id);
    
    return (
        <>
            <img src={thisProduct[0].Image} alt={thisProduct[0].Name} />
            <h1>{thisProduct[0].Name}</h1>
            <p>Price: ${thisProduct[0].Price}</p>
            <p>{thisProduct[0].Department}</p>
            <p>{thisProduct[0].Type}</p>
            <p>{thisProduct[0].Description}</p>
        </>
    )
}