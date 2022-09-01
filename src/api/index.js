import axios from "axios";
import jsSHA from "jssha";
const englishCityName = {
    "臺北市": "Taipei",
    "新北市": "NewTaipei",
    "桃園市": "Taoyuan",
    "臺中市": "Taichung",
    "臺南市": "Tainan",
    "高雄市": "Kaohsiung",
    "基隆市": "Keelung",
    "新竹市": "Hsinchu",
    "嘉義市": "Chiayi",
    "宜蘭縣": "YilanCounty",
    "新竹縣": "HsinchuCounty",
    "苗栗縣": "MiaoliCounty",
    "彰化縣": "ChanghuaCounty",
    "南投縣": "NantouCounty",
    "雲林縣": "YunlinCounty",
    "嘉義縣": "ChiayiCounty",
    "屏東縣": "PingtungCounty",
    "花蓮縣": "HualienCounty",
    "臺東縣": "TaitungCounty",
    "金門縣": "KinmenCounty",
    "澎湖縣": "PenghuCounty",
    "連江縣": "LienchiangCounty",
}


/* function switchCityName(){
    switch (key) {
        case value:

            break;

        default:
            break;
    }
} */

function getPtxAuthorizationHeader() {
    let AppID = '56d46e9897a148bca3e3fd6c1e400cb0';
    let AppKey = 'eFy9jIOXaHvKXhi40qbKS58EGJ8';
    let GMTString = new Date().toUTCString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return ({ 'Authorization': Authorization, 'X-Date': GMTString });
}

export function getActivityByCity(city = '臺中市') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/";
    const fullUrl = baseUrl + englishCityName[city] + "?$format=JSON&$top=100";
    return axios.get(fullUrl, { headers: getPtxAuthorizationHeader(), })
        .then(res => res)
        .catch((error) => console.log(error));
}

export function getScenicSpotByCity(city = '臺中市') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/";
    const fullUrl = baseUrl + englishCityName[city] + "?$format=JSON&$top=100";
    return axios.get(fullUrl, {
        headers: getPtxAuthorizationHeader(),
    })
        .then((res) => res)
        .catch((error) => console.log(error));
}

export function getRestaurantByCity(city = '臺中市') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/";
    const fullUrl = baseUrl + englishCityName[city] + "?$format=JSON&$top=100";
    return axios.get(fullUrl, {
        headers: getPtxAuthorizationHeader(),
    })
        .then((res) => res)
        .catch((error) => console.log(error));
}

export function getHotelByCity(city = '臺中市') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/";
    const fullUrl = baseUrl + englishCityName[city] + "?$format=JSON&$top=100";
    return axios.get(fullUrl, {
        headers: getPtxAuthorizationHeader(),
    })
        .then((res) => res)
        .catch((error) => console.log(error));
}