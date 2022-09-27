import "./UIBlock.scss"

const UIBlock = ({ isDataLoading }) => {
    if (isDataLoading){
        return (
            <div id="BlockContainer">
                <div id="Loader"></div>
                <div id="Message">資料載入中，請稍等</div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default UIBlock;