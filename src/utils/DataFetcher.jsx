import React, { useEffect, useState } from 'react';

export default function DataFetch() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        setApiData(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(apiData);

  if (apiData && apiData.jobs && apiData.jobs.length > 0) {
    return (
      <div>
        
        <p>title: {apiData.jobs[0].title}</p>
        <p>location:{apiData.jobs[0].location.name}</p>
        <p>job id: {apiData.jobs[0].id}</p>
        <p>link to job:{apiData.jobs[0].absolute_url}</p>

      </div>
    )
  } else {
    return (
      <div>
        <p>No data to display</p>
      </div>
    )
  }
}














