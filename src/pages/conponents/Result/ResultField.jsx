import ResultItem from "./ResultItem";
import "./Result.css"
import { v4 } from 'uuid';

const ResultField = ({ chosenRegionStationList }) => {
    return (
        <div id="ResultField">
            {chosenRegionStationList.map(function(data, index){
                return <ResultItem key={v4()} stationData={data} number={index} />
            })}
        </div>
    )
}

export default ResultField;