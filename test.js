/*
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Aiea/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Airport/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ala%20Moana/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Beretania%20St/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Dillingham%20Blvd/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Downtown/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ewa/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Farrington%20Hwy%20(Waipahu)/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Ft.%20Weaver%20Rd/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20And%20H-201%20All/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20East/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1%20Ewa/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-1__Aiea%20to%20Airport/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-201/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/H-3/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kahekili/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kaimuki/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kakaako/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kalanianaole/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kalihi/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kamehameha%20Hwy%20(Aiea__Pearl%20City)/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kamehameha%20Hwy%20(Kaneohe)/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kaneohe/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapahulu%20Ave/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapiolani%20Blvd/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Kapolei/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/King%20St/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Likelike%20Hwy/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Liliha/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Makiki/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Mililani%20Mauka/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Moanalua%20Fwy/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Moanalua%20Rd/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Nimitz%20(Airport)/xml".
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Nimitz%20(Kalihi)/xml".
"http://goakamai.org/services/AlertService.svc/alerts/bundle?_=1544996347173",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Pali%20Hwy/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Pearl%20City/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Salt%20Lake/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/University/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Vineyard%20Blvd/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waialae/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waikele/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waikiki/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waipahu/xml",
"http://goakamai.org/services/CameraProxy.svc/cameras/tours/Waipio/xml",
*/


var axios = require('axios'),
cheerio = require('cheerio');






function oof () {
    axios.get('http://goakamai.org/services/CameraProxy.svc/cameras/tours/Aiea/xml')
        .then(function (response) {
            if (response.status == 200) {
                const html = response.data;
                const $ = cheerio.load(html, {
                    xmlMode: true
                })
                console.log($('FullImageURL').contents()[0].data.toString())
            }
    })
}

oof()