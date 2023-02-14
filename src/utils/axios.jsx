import axios from "axios";

// 台北市政府開放資料平台 Youbike2.0資料api
const apiUrl = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// Axios Get Data
export async function GetAllYoubikeStationData() {
    return await axios.get(apiUrl);
}