import axios from "axios";
import jsSHA from "jssha";
/* const allCity = [
    "Taipei",
    "NewTaipei",
    "Taoyuan",
    "Taichung",
    "Tainan",
    "Kaohsiung",
    "Keelung",
    "Hsinchu",
    "HsinchuCounty",
    "MiaoliCounty",
    "ChanghuaCounty",
    "NantouCounty",
    "YunlinCounty",
    "ChiayiCounty",
    "Chiayi",
    "PingtungCounty",
    "YilanCounty",
    "HualienCounty",
    "TaitungCounty",
    "KinmenCounty",
    "PenghuCounty",
    "LienchiangCounty",
]; */



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

export function getActivityByCity(city = 'Taichung') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/";
    const fullUrl = baseUrl + city + "?$format=JSON&$top=100";
    return axios.get(fullUrl, { headers: getPtxAuthorizationHeader(), })
        .then(res => res)
        .catch((error) => console.log(error));
}

export function getScenicSpotByCity(city = 'Taichung') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/";
    const fullUrl = baseUrl + city + "?$format=JSON&$top=100";
    return axios.get(fullUrl, {
        headers: getPtxAuthorizationHeader(),
    })
        .then((res) => res)
        .catch((error) => console.log(error));
}

export function getRestaurantByCity(city = 'Taichung') {
    const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/";
    const fullUrl = baseUrl + city + "?$format=JSON&$top=100";
    return axios.get(fullUrl, {
        headers: getPtxAuthorizationHeader(),
    })
        .then((res) => res)
        .catch((error) => console.log(error));
}