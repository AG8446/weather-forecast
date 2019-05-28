function getForcast(lat, lon){
    //const temp_url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/14/lat/56/data.json'
    const latitude = Math.floor(lat * 1000000) / 1000000;
    const longitude = Math.floor(lon * 1000000) / 1000000;
    var url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' + longitude +'/lat/' + latitude +'/data.json';
    return fetch(url).then(response => response.json());
}

export default{getForcast};