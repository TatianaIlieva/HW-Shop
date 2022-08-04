import React  from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    render() {
        return (        
            <div className='nav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
        )
    }
}