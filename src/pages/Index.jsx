import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Header from './conponents/Header/Header';
import SearchField from './conponents/Search/SearchField';
import ResultField from './conponents/Result/ResultField';
import UIBlock from './conponents/UI_Block/UIBlock';
import './index.scss'

const Index = () => {
    // 台北市政府開放資料平台 Youbike2.0資料api
    const apiUrl = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

    // 當前Select-Box選項
    const stationRef = useRef("大安區");

    // 台北各區域List，放入Select-Box作為option的依據
    const [stationList, setStationList] = useState([]);

    // 選中區域之站點資訊List，作為下方顯示資料的依據
    const [chosenRegionStationList, setChosenRegionStationList] = useState([]);

    // UI Block
    const [isDataLoading, SetIsDataLoading] = useState(true);

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
                SetIsDataLoading(false);
            })
        }

        GetStationNameList();
    }, [])

    // Axios Get Data
    function GetAllYoubikeStationData() {
        SetIsDataLoading(true);
        return axios.get(apiUrl);
    }

    // Get Chosen Station Data
    function GetChosenRegionStationData() {
        ClearChosenRegionStationData();
        var request = GetAllYoubikeStationData();

        request.then(function (response) {
            var data = response.data;
            var result = data.filter(content => content["sarea"] === stationRef.current.value);
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
            SetIsDataLoading(false);
        });
    }

    function ClearChosenRegionStationData() {
        setChosenRegionStationList([]);
    }

    return (
        <div id="Container">
            <Header />
            <SearchField stationRef={stationRef} stationList={stationList} GetChosenRegionStationData={GetChosenRegionStationData} ClearChosenRegionStationData={ClearChosenRegionStationData} />

            <ResultField chosenRegionStationList={chosenRegionStationList} />
            <UIBlock isDataLoading={isDataLoading} />
        </div>
    )
}

export default Index;