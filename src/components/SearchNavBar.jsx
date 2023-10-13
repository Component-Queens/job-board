import React from 'react';
import { useState } from 'react';

export default function NavSearchBar(){

     const [records, setRecords] = useState([data])

     const Filter = (event) => {
          setRecords(data.filter(f => 
               f.title.toLowerCase().includes(event.target.value.toLowerCase())) 
     )}

     return (
          <nav>
               <input 
                    type="text" 
                    name="navSearchField"
                    placeholder="SEARCH"
                    onChange={Filter} 
               />
          </nav>
     )
}