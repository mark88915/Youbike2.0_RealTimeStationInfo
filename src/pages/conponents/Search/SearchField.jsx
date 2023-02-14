import StationList from './StationList';
import './Search.scss'

const SearchField = ({ RegionRef, regionList, GetChosenRegionStationData, ClearChosenRegionStationData }) => {
    return(
        <div id="SearchField">
            <StationList RegionRef={RegionRef} regionList={regionList} />

            <button id="SearchButton" className="FunctionButton" onClick={GetChosenRegionStationData} />
            <button id="ClearButton" className="FunctionButton" onClick={ClearChosenRegionStationData} />
        </div>
    )
}

export default SearchField;