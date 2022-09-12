const ResultItem = ({ stationData, number }) => {
    return (
        <div className="ResultItem">
            <div className={"NumberField Field"}>
                <label className={"Title FieldComponent"}>{number + 1}</label>
            </div>

            <div className={"RoadField Field"}>
                <label className={"Title FieldComponent"}>地址</label>
                <div className={"Road FieldComponent"}>{stationData["road"]}</div>
            </div>

            <div className={"SpaceField Field"}>
                <label className={"Title FieldComponent"}>空車格 / 總車格</label>
                <div className={"Space FieldComponent"}>{stationData["avaliable"] + " / " + stationData["total"]}</div>
            </div>

            <div className={"UpdateTimeField Field"}>
                <label className={"Title FieldComponent"}>場站更新時間 / 系統更新時間</label>
                <div className={"UpdateTime FieldComponent"}>{stationData["dataUpdateTime"] + " / " + stationData["systemUpdateTime"]}</div>
            </div>
        </div>
    )
}

export default ResultItem;