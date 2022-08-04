import React  from "react";
import {renderItems} from "../data";

export default class Catalog extends React.Component {
    render() {
        return (
            <>
            <div className='items-wrapper'>
                {renderItems}
            </div>
            </>
        )
    }
}