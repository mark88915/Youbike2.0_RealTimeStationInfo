import ResultItem from "./ResultItem";
import "./Result.css"
import { v4 } from 'uuid';

const ResultField = ({ chosenRegionStationList }) => {
    return (
        <div id="ResultField">
            {chosenRegionStationList.map(data => <ResultItem key={v4()} stationData={data} />)}
        </div>
    )
}

export default ResultField;