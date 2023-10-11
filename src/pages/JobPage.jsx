import { Parser } from 'html-to-react';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function JobPage() {
  const { id } = useParams();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const htmlParser = new Parser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setApiData(json);
      } catch (error) {
        // Handle the error here
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <main><div>Loading...</div></main>;
  } else if (apiData) {
    const jobCard = apiData;
    console.log(jobCard);

    return (
      <main>
        <div className="job-page">
            <p className="job-links"><Link to="/">All Positions</Link> {`>`} {jobCard.title}</p>
          <h1 className="job-title">{jobCard.title}</h1>
          <p className="job-attributes">{jobCard.location.name} | {jobCard.departments[0].name} team | {jobCard.metadata[0].value}</p>
          {/* this is still rendering raw HTML into the display, but better than the JSON itself: */}
          <div className="job-description">{htmlParser.parse(jobCard.content)}</div>
          {/* need to link this to the absolute url + #apply */}
          <a href={ jobCard.absolute_url + `#app` }><button>Apply now</button></a>
        </div>
      </main>
    );
  } else {
    return <main><div>No data to display</div></main>;
  }
}
