import React from 'react';
// import { useContext, useState } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";

import { useLocation } from '../contexts/LocationContext';
import CustomDropdown from './CustomDropdown';
import LocationDropList from './LocationDropList';


export default function Location(){


    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");
    
    // Use the useLocation hook to access the selectedLocation from the context
    const { selectedLocation,  setSelectedLocation  } = useLocation();

    // Loading and error handling logic
    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.offices && apiData.offices.length > 0) {
          // Call the extractData function to generate the JSX
           
        // Function to handle the select event of the location
        // const handleSelect = (selectedItem) => {
        //     // Set the Location of the departments to be displayed
        //     setSelectedLocation(selectedItem.label);
        // };

        // Set the default value of the drop list
        // const initialSelectedItem = { id: 0, label: 'All locations' };

        // Handler for changing the selected location state
        const handleLocationChange = (newLocation) => {
            setSelectedLocation(newLocation);
            
        };
        console.log(selectedLocation)

    return (
        <div>
            {/* <LocationDropList onChange={handleLocationChange} /> */}
            {/* Render the custom dropdown component */}
            {/* <CustomDropdown
            items={apiData.offices.map((office) => ({
                id: office.id,
                label: office.name,
            }))}
            onSelect={handleSelect}
            initialSelectedItem={initialSelectedItem}
            /> */}
            {/* Map over the offices and their departments to display the information */}
            {apiData.offices.map((office) => (
            
            // Check if the selectedLocation matches the current office's location
            (!selectedLocation || office.name === selectedLocation) && (
                <div key={office.name}>
                {office.departments.map((department) => (
                    <div key={department.name}>
                    {department.jobs && department.jobs.length > 0 ? (
                        // Map over the jobs in the department and display job information
                        department.jobs.map((job) => (
                        <div key={job.title}>
                            <div className="all-jobs">
                            <div className="job-box job-item">
                                <div className="job-item-title">
                                <a href={job.absolute_url}>{job.title}</a> {/* Display job name and link*/}
                                </div>
                                <div className="job-item-department">{department.name}</div> {/* Display department name */}
                                <div className="job-item-location">{office.name}</div>  {/* Display office location */}
                            </div>
                            </div>
                        </div>
                        ))
                    ) : (
                        // If no jobs are available, display a message and other information
                        <div className="all-jobs">
                        <div className="job-box job-item" >
                            <div className="job-item-title">No jobs available</div>
                            <div className="job-item-department">{department.name}</div>
                            <div className="job-item-location">{office.name}</div>
                        </div>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            )
            ))}
        </div>
        );

    } else {
        return <div>No data to display</div>;
    }
}

