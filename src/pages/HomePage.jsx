
export default function HomePage(){

    return(
        <div className="jobTableDiv">
            {/* Search box component */}
            {/* Search All Departments Drop List */}
            {/* Search all location Drop List */}
            {/* Job Listing Display */}
                {/* nav: to JobPage  */}
                {/* box: Job title  */}
                {/* box: Department | Location  */}
                
                {/* table below contains placeholder values - replace with API logic */}
                <table className="tableJobList">
                    <thead className="tableHeader"></thead>
                    <tbody className="tableBody">
                        <trow className="tableRow">
                            <td className="jobTableTitle">Title here</td>
                            <td className="jobTableLocation">Location here</td>
                        </trow>
                        <trow className="tableRow">
                            <td className="jobTableTitle">Title here</td>
                            <td className="jobTableLocation">Location here</td>
                        </trow>
                        <trow className="tableRow">
                            <td className="jobTableTitle">Title here</td>
                            <td className="jobTableLocation">Location here</td>
                        </trow>
                    </tbody>
                </table>
        </div>
    )
}