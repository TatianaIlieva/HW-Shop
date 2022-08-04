import React  from "react";
import logo from '../logo.png';

export default class Header extends React.Component {
   render() { 
        return (
            <div className='logo-box'>
                <a href='/' title="Homepage">
                    <img src={logo} alt='Logo'/>
                </a>
            </div>
        )
   }
}