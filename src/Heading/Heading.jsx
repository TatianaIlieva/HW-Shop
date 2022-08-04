import React  from "react";
import headingImage from './heading-image.jpg';

export default class Heading extends React.Component {
    render() {
        return (
            <div className='heading'>
                <img src={headingImage} alt="Heading"/>
                <div className='content'>
                    <h1>Heading</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
            </div>
        )
    }
}