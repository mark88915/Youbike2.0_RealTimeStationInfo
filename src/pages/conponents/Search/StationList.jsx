import { v4 } from 'uuid';
import { memo } from 'react';

const StationList = ({ RegionRef, regionList }) => {
    return (
        <>
            <label id="ListLabel" htmlFor="RegionList">請選擇區域：</label>
            <select id="RegionList" ref={RegionRef}>
                {regionList.map(stationName => <option key={v4()} value={stationName}>{stationName}</option>)}
            </select>
        </>
    )
}

export default memo(StationList);