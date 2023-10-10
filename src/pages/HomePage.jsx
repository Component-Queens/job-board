
import JobTable from "../components/JobTable";
import LocationDropList from "../components/Location";

export default function HomePage(){

    return(
        <div className="all-jobs">
            <div className="jobfilters">
                <div className="search-box filter-item">
                    <input type='text' placeholder='Search...' />
                </div>
                <div className="departments filter-item">
                    <p>Departments</p>
                </div>
                <LocationDropList />
            </div>

            {/* Search box component */}
            {/* Search All Departments Drop List */}
            {/* Search all location Drop List */}
            <JobTable></JobTable>
            
            
        </div>
    )
}