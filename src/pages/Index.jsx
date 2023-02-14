import { GetAllYoubikeStationData } from '../utils/axios';

import { useState, useEffect, useRef } from 'react';
import Header from './conponents/Header/Header';
import SearchField from './conponents/Search/SearchField';
import ResultField from './conponents/Result/ResultField';
import UIBlock from './conponents/UI_Block/UIBlock';
import './index.scss'

const Index = () => {
    // 當前Select-Box選項
    const RegionRef = useRef("大安區");

    // 台北各區域List，放入Select-Box作為option的依據
    const [regionList, setregionList] = useState([]);

    // 選中區域之站點資訊List，作為下方顯示資料的依據
    const [chosenRegionStationList, setChosenRegionStationList] = useState([]);

    // UI Block
    const [isDataLoading, SetIsDataLoading] = useState(true);

    // Get Station Name List After First Render
    useEffect(() => {
        SetIsDataLoading(true);
        let request = GetAllYoubikeStationData();

        request
            .then(function (response) {
                let regionList = [];
                let data = response.data;

                data.forEach(function (content) {
                    let stationName = content["sarea"];

                    if (!regionList.includes(stationName)) {
                        regionList.push(stationName);
                    }
                })

                setregionList(regionList);
                SetIsDataLoading(false);
            })
            .catch((error) => {
                // 需要加點東西
                console.log(error);
            })
    }, [])



    // Get Chosen Station Data
    function GetChosenRegionStationData() {
        ClearChosenRegionStationData();
        SetIsDataLoading(true);
        let request = GetAllYoubikeStationData();

        request.then(function (response) {
            let data = response.data;
            let result = data.filter(content => content["sarea"] === RegionRef.current.value);
            let stationInfoList = result.map(function (content) {
                return {
                    road: content["ar"],
                    total: content["tot"],
                    avaliable: content["bemp"],
                    dataUpdateTime: content["mday"].split(" ")[1],
                    systemUpdateTime: content["srcUpdateTime"].split(" ")[1]
                }
            })

            setChosenRegionStationList(stationInfoList);
            SetIsDataLoading(false);
        });
    }

    function ClearChosenRegionStationData() {
        setChosenRegionStationList([]);
    }

    return (
        <div id="Container">
            <Header />
            <SearchField RegionRef={RegionRef} regionList={regionList} GetChosenRegionStationData={GetChosenRegionStationData} ClearChosenRegionStationData={ClearChosenRegionStationData} />

            <ResultField chosenRegionStationList={chosenRegionStationList} />
            <UIBlock isDataLoading={isDataLoading} />
        </div>
    )
}

export default Index;