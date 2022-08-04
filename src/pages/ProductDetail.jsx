import React from "react"
import {useParams} from "react-router-dom"
import {data} from "../data";

export default function ProductDetail() {
    const {id} = useParams();
    const thisProduct = data.filter(el => el.id === id);
    
    return (
        <div className='details-wrapper'>
            <div className='details-img'>
                <img src={thisProduct[0].Image} alt={thisProduct[0].Name} />
            </div>
            <div className='details-info'>
                <h1>{thisProduct[0].Name}</h1>
                <p className='price'>Price: ${thisProduct[0].Price}</p>
                <p>{thisProduct[0].Department}</p>
                <p>{thisProduct[0].Type}</p>
                <p>{thisProduct[0].Description}</p>
            </div>
        </div>
    )
}
