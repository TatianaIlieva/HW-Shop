import React from "react"
import {useParams} from "react-router-dom"
import {data} from "../data";

export default function ProductDetail() {
    const {id} = useParams();
    const itemDetails = data.find(el => el.id === id);
    
    return (
        <div className='details-wrapper'>
            <div className='details-img'>
                <img src={itemDetails.Image} alt={itemDetails.Name} />
            </div>
            <div className='details-info'>
                <h1>{itemDetails.Name}</h1>
                <p className='price'>Price: ${itemDetails.Price}</p>
                <p>{itemDetails.Department}</p>
                <p>{itemDetails.Type}</p>
                <p>{itemDetails.Description}</p>
            </div>
        </div>
    )
}
