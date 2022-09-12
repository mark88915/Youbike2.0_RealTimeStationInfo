import StationList from './StationList';
import './Search.css'

const SearchField = ({ station, setStation, stationList, GetChosenRegionStationData, ClearChosenRegionStationData }) => {
    return(
        <div id="SearchField">
            <StationList station={station} setStation={setStation} stationList={stationList} />

            <button id="SearchButton" className="FunctionButton" onClick={GetChosenRegionStationData}></button>
            <button id="ClearButton" className="FunctionButton" onClick={ClearChosenRegionStationData}></button>
        </div>
    )
}

export default SearchField;