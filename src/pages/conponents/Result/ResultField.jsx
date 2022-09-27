import ResultItem from "./ResultItem";
import "./Result.scss"
import { v4 } from 'uuid';
import { useEffect, useState } from "react";

const ResultField = ({ chosenRegionStationList }) => {

    // 分頁資訊，包含總頁數、當前頁數、每頁資料筆數、是否可以上一頁或下一頁
    const [paginationInfo, SetPaginationInfo] = useState({
        pageAmount: 0,
        currentPage: 1,
        pageDataAmount: 10,
        canGoPrevious: function () {
            return this.currentPage - 1 >= 1 ? true : false;
        },
        canGoNext: function () {
            return this.currentPage + 1 <= this.pageAmount ? true : false;
        }
    });

    // 每當選擇的區域改變，就重新設定一次總頁數以及當前頁數
    useEffect(() => {

        SetPaginationInfo(previousInfo => {
            return {
                ...previousInfo,
                pageAmount: Math.ceil(chosenRegionStationList.length / 10),
                currentPage: 1
            }
        });

    }, [chosenRegionStationList]);

    // 換頁method：點下按鈕時，先判斷是否可以上一頁或下一頁，可以修改當前頁數
    function ChangePage(e) {

        if (e.target.id.toLowerCase() === "previous" && paginationInfo.canGoPrevious()) {

            SetPaginationInfo(previousInfo => {
                var newCurrentPage = previousInfo.currentPage - 1;

                // return { ...previousInfo, currentPage: previousInfo.currentPag-- } 不知道為什麼localhost跑的過但Github Pages跑不過，下一頁也一樣
                return { ...previousInfo, currentPage: newCurrentPage }
            });

        } else if (e.target.id.toLowerCase() === "next" && paginationInfo.canGoNext()) {

            SetPaginationInfo(previousInfo => {
                var newCurrentPage = previousInfo.currentPage + 1;
                return { ...previousInfo, currentPage: newCurrentPage }
            });

        }

    }

    return (
        <>
            <div id="ResultField">
                {
                    chosenRegionStationList.map(function (data, index) {
                        return index + 1 > (paginationInfo.currentPage - 1) * paginationInfo.pageDataAmount && index + 1 <= paginationInfo.currentPage * paginationInfo.pageDataAmount ?
                            <ResultItem key={v4()} stationData={data} number={index} /> :
                            false;
                    })
                }
            </div>
            {
                chosenRegionStationList.length > paginationInfo.pageDataAmount ?
                    <div id="PaginationButtonGroup">
                        <button className="PaginationButton" id="Previous" onClick={(e) => ChangePage(e)}>上一頁</button>

                        <button className="PaginationButton" id="Next" onClick={(e) => ChangePage(e)}>下一頁</button>
                    </div> :
                    <></>
            }
        </>
    )
}

export default ResultField;