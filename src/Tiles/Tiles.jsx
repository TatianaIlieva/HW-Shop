import React from "react";
import {renderItems} from "../data";

export default class Tiles extends React.Component {
        state = {
           items: 3,
         };
     
       displayItems = () => {
        const displayItems = renderItems.slice(0, this.state.items);
        return displayItems;
       }
     
       loadMoreItems = () => {this.setState({ items: this.state.items + 3 });}

       render() {
         return (
            <>
                <div className='tiles-wrapper'>
                    <div className='tiles'>
                        {this.displayItems()}
                    </div>
                </div>
                {this.state.items < renderItems.length ? <button className='tiles-btn' onClick={this.loadMoreItems}>View More</button> : null }
                
            </>
         );
       }
}