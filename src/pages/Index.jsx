import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './conponents/Header/Header';
import SearchField from './conponents/Search/SearchField';
import ResultField from './conponents/Result/ResultField';
import './index.css'

const Index = () => {
    // 台北市政府開放資料平台 Youbike2.0資料api
    const apiUrl = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

    // 站名State
    const [station, setStation] = useState("大安區");

    // 站名清單State
    const [stationList, setStationList] = useState([]);

    const [chosenRegionStationList, setChosenRegionStationList] = useState([]);

    // Get Station Name List After First Render
    useEffect(() => {
        function GetStationNameList() {
            var request = GetAllYoubikeStationData();

            request.then(function (response) {
                var tempList = [];
                var data = response.data;

                data.forEach(function (content) {
                    var stationName = content["sarea"];

                    if (!tempList.includes(stationName)) {
                        tempList.push(stationName);
                    }
                })

                setStationList(tempList);
            })
        }

        GetStationNameList();
    }, [])

    // Axios Get Data
    function GetAllYoubikeStationData() {
        return axios.get(apiUrl);
    }

    // Get Chosen Station Data
    function GetChosenRegionStationData() {
        var request = GetAllYoubikeStationData();

        request.then(function (response) {
            var data = response.data;
            var result = data.filter(content => content["sarea"] === station);
            var tempList = result.map(function (content) {
                return {
                    road: content["ar"],
                    total: content["tot"],
                    avaliable: content["bemp"],
                    dataUpdateTime: content["mday"].split(" ")[1],
                    systemUpdateTime: content["srcUpdateTime"].split(" ")[1]
                }
            })

            setChosenRegionStationList(tempList);
        });
    }

    function ClearChosenRegionStationData() {
        setChosenRegionStationList([]);
    }

    return (
        <div id="Container">
            <Header />
            <SearchField station={station} setStation={setStation} stationList={stationList} GetChosenRegionStationData={GetChosenRegionStationData} ClearChosenRegionStationData={ClearChosenRegionStationData} />

            <ResultField chosenRegionStationList={chosenRegionStationList} />
        </div>
    )
}

export default Index;