import React  from "react";
import Heading from '../Heading/Heading';
import Tiles from '../Tiles/Tiles';

export default class Home extends React.Component {   
    render() {
        return (
            <>
                <Heading/>
                <Tiles/>
            </>
        )   
    }
}