import StationList from './StationList';
import './Search.css'

const SearchField = ({ station, setStation, stationList, GetChosenRegionStationData, ClearChosenRegionStationData }) => {
    return(
        <div id="SearchField">
            <StationList station={station} setStation={setStation} stationList={stationList} />

            <button id="SearchButton" onClick={GetChosenRegionStationData}></button>
            <button id="ClearButton" onClick={ClearChosenRegionStationData}></button>
        </div>
    )
}

export default SearchField;