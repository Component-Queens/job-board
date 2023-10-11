import About from "../components/About";
import FilterByDepartment from "../components/FilterByDepartments";
import Location from "../components/Location";
import LocationDropList from "../components/LocationDropList";
import { LocationProvider } from "../contexts/LocationContext";



export default function HomePage() {



  return (
    <LocationProvider>
      <main>
        <About/>
          <div className="all-jobs">
              <div className="jobfilters">
                  <div className="search-box filter-item">
                      <input type='text' placeholder='Search...' />
                  </div>
                  <div className="departments filter-item">
                    <p>Deparmemts</p>
                      
                  </div>
                    <LocationDropList/>

              </div>
          </div>
          <Location />



          {/* <FilterByDepartment></FilterByDepartment> */}
      </main>
    </LocationProvider>
  );
}
