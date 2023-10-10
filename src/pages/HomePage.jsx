import FilterByDepartment from "../components/FilterByDepartments";
import JobTable from "../components/JobTable";
import DataFetch from "../utils/DataFetcher";

export default function HomePage(){

    return(
        <div>
            <JobTable></JobTable>
            <FilterByDepartment></FilterByDepartment>

            {/* Search box component */}
            {/* Search All Departments Drop List */}
            {/* Search all location Drop List */}
            {/* Job Listing Display */}
                {/* nav: to JobPage  */}
                {/* box: Job title  */}
                {/* box: Deparment | Location  */}
        </div>
    )
}