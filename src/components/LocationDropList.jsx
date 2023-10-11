import React from 'react';
import { useState } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";
import CustomDropdown from './CustomDropdown';
import { useLocation } from '../contexts/LocationContext';

export default function LocationDropList({ onChange }){

    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");

    // Use the custom location context to access selectedLocation state and setter
    const { selectedLocation, setSelectedLocation } = useLocation();


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.offices && apiData.offices.length > 0) {

        // Prepare location items for the dropdown
        const locationItems = apiData.offices.map((office) => ({
            id: office.id,
            label: office.name,
        }));
        

       // Define the event handler for selecting a location
        const handleSelect = (selectedItem) => {
            // // Set the Location of the departments to be displayed
            setSelectedLocation(selectedItem.label);
            // // Call the onChange callback, if provided
            if (onChange) {
                onChange(selectedItem.label);
            }
        };

        // Set the default value for the dropdown
        const initialSelectedItem = { id: 0, label: 'All locations' };

        // Return both the HTML and selectedLocation state
        return (
            <div className="location filter-item">
                <CustomDropdown
                 items={locationItems}
                 onSelect={handleSelect}
                 initialSelectedItem={initialSelectedItem}
                 >
                    {(selectedLocation) => (
                    <div>
                        <p>Selected Location: {selectedLocation.label}</p>
                    </div>
                    )}
                </CustomDropdown>
                </div>
            );
    } else {
        return <div>No data to display</div>;
    }
}
