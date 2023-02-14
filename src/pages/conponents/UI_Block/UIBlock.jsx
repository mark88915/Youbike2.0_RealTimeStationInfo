import "./UIBlock.scss"

const UIBlock = ({ isDataLoading }) => {
    return isDataLoading && (
        <div id="BlockContainer">
            <div id="Loader"></div>
            <div id="Message">資料載入中，請稍等</div>
        </div>

    )
}

export default UIBlock;