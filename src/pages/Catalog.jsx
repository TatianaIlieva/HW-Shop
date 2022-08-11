import React  from "react";
import {data} from "../data";
import { Link } from "react-router-dom";

export default class Catalog extends React.Component {
    state = {
        search: "",
        filter: ""
    }

    filterItem = (event) => {        
        this.setState({filter: event.target.value});
    }

    searchItems = (event) => {
        this.setState({search: event.target.value});
    }
    
    render() {
        return (
            <>
            <div className='input-wrapper'>
                <select className='filter-select' value="Filter" onChange={this.filterItem}>
                    <option disabled>Filter</option>
                    <option value="">All</option>
                    <optgroup label="Type">
                        <option value='t-shirts'>T-shirts</option>
                        <option value='vests'>Vests</option>
                        <option value='dress'>Dress</option>
                        <option value='shirts'>Shirts</option>
                        <option value='shorts'>Shorts</option>
                        <option value='jeans'>Jeans</option>
                    </optgroup>
                    <optgroup label="Gender">
                        <option value="Women's">Female</option>
                        <option value="Men's">Male</option>
                    </optgroup>
                </select>
                <input className="searchbar" placeholder="Search in title" onChange={this.searchItems}/>
            </div>
            <div className='items-wrapper'>
               {data.filter(result => {
                if (this.state.search === "" && this.state.filter === "") {
                  return result;
                }
                else if (result.Name.toLowerCase().includes(this.state.search.toLowerCase())) {             
                    if (this.state.filter === "") {
                        return result;
                    }
                    else if (result.Type.toLowerCase()===(this.state.filter.toLowerCase()) || result.Department.toLowerCase()===(this.state.filter.toLowerCase()) ) {
                        return result;
                    }
                }
                if (result.Type.toLowerCase()===(this.state.filter.toLowerCase()) || result.Department.toLowerCase()===(this.state.filter.toLowerCase()) ) {
                    if (this.state.search === "") {
                        return result;
                    }
                    else if (result.Name.toLowerCase().includes(this.state.search.toLowerCase())) {    
                    return result;
                    }
                }
                  return null;
                }).map((element)=>{return(
                <div className='item' key={element.id}>
                    <img src={element.Image} alt="Item"/>
                    <p className='name'>{element.Name}</p>
                    <p className='price'>${element.Price}</p>
                    <p><strong>Department:</strong> {element.Department}</p>
                    <p><strong>Description:</strong> {element.Description}</p>
                    <Link to={`/catalog/${element.id}`} className='item-button'>View Details</Link>
                </div>)
                })}
            </div>
            </>
        )
    }
}
