import StationList from './StationList';
import './Search.css'

const SearchField = ({ stationRef, stationList, GetChosenRegionStationData, ClearChosenRegionStationData }) => {
    return(
        <div id="SearchField">
            <StationList stationRef={stationRef} stationList={stationList} />

            <button id="SearchButton" className="FunctionButton" onClick={GetChosenRegionStationData}></button>
            <button id="ClearButton" className="FunctionButton" onClick={ClearChosenRegionStationData}></button>
        </div>
    )
}

export default SearchField;