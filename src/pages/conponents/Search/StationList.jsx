import { v4 } from 'uuid';

const StationList = ({station, setStation, stationList}) => {
    return (
        <>
            <label id="ListLabel" htmlFor="StationList">請選擇區域：</label>
            <select id="StationList" value={station} onChange={(e) => setStation(e.target.value)}>
                {stationList.map(stationName => <option key={v4()} value={stationName}>{stationName}</option>)}
            </select>
        </>
    )
}

export default StationList;