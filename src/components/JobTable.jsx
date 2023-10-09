import { useContext } from "react";
import React from 'react';

import {useFetcher} from "../utils/DataFetcher";
import { AllJobsApiContext } from "../contexts/AllJobsApiContext";
import Loading from "../utils/Loading";

export default function JobTable(){

    // destructure api from AllJobsApiContext
    const { api } = useContext(AllJobsApiContext)

    const { apiData, loading, error } = useFetcher(api);


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.jobs && apiData.jobs.length > 0) {
        console.log(apiData.jobs)
        const jobCard = apiData.jobs;
        return (
          <div className="job-box">
            {jobCard.map((jobCard, index) =>(
                <div key={index} className="job-item">
                    <p>title: {jobCard.title}</p>
                    <p>location:{jobCard.location.name}</p>
                    <p>job id: {jobCard.id}</p>
                    <p>link to job:{jobCard.absolute_url}</p>
                </div>
            ))}
          </div>
        );
    } else {
        return <div>No data to display</div>;
    }
}