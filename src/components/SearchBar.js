import React, { useState } from 'react';

function SearchBar({onFilter,onReset}) {
    const[{description,setDescription}] = useState("")
    const[{category,setCategory}]= useState("")


     function handleFilter(e){
        e.preventDefault()
        //pass the filter criteria to the parent component
        //console.log({description,category});
      onFilter({description,category})  
     }
     function handleReset (){
        // this clears the filter and notify the parent component
        setDescription("")
        setCategory("")
        onReset()
     }

    return ( 
        <form>
        <div className="filterContainer">
            <div className="expenseName__">
            
                <label htmlFor="expensename">Description</label>
                <input type="text" id="transaction" name="expensename"></input>
            </div>

            <div className="category__">
                
                <label htmlFor="category">Category</label>
                <select>
                    <option value="Income">Income</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Gift">Gift</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                </select>
                
                <button className="filterBtn" onFilter={handleFilter}>Filter</button>
            </div>
            
            <div className="resetContainer" >
                <button className="resetBtn" onReset={handleReset}>Reset</button>
                
            </div>

               
        </div>

    </form>
     );
}

export default SearchBar;