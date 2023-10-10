import React from 'react';
import { useContext, useState } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import { LocationApiContext } from "../contexts/LocationApiContext";
import Loading from "../utils/Loading";




export default function LocationDropList(){
    // useState for the current location select for the drop list 
    const [selectedLocation, setSelectedLocation] = useState(''); 
    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.offices && apiData.offices.length > 0) {
        // To acces the specific location of the apiData
        const locationCard = apiData.offices;

        // To track the selected location
        const handleLocationChange = (event) => {
            setSelectedLocation(event.target.value);
          };

        return (
            // Return a drop list
            <div className="location filter-item">
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="location-select"
                    >
                        <option value="">All Location</option>
                        {locationCard.map((locationCard, index) =>(
                            <option key={index} className="location-item">
                                {locationCard.name}
                            </option>
                        ))}
                    </select>
                </div>
            );
    } else {
        return <div>No data to display</div>;
    }
}

