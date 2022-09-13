import { v4 } from 'uuid';
import { memo } from 'react';

const StationList = ({ stationRef, stationList }) => {
    return (
        <>
            <label id="ListLabel" htmlFor="StationList">請選擇區域：</label>
            <select id="StationList" ref={stationRef}>
                {stationList.map(stationName => <option key={v4()} value={stationName}>{stationName}</option>)}
            </select>
        </>
    )
}

export default memo(StationList);