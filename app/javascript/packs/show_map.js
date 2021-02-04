import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
    apiKey: process.env.GOOGLE_MAP_API_KEY,
    version: "weekly",
    });
    let map

    loader.load().then(async() => {
        let geocoder
    geocoder = new google.maps.Geocoder()
  
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7828, lng:-73.9653},
      zoom: 15,
    });
  
   var marker = new google.maps.Marker({
      position:  {lat: 40.7828, lng:-73.9653},
      map: map
    });
    var inputAddress = document.getElementById('address').textContent
    await geocoder.geocode( { 'address': inputAddress}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('該当する結果がありませんでした：' + status);
      }
    }); 
        });
    
    

      
     

      

window.addEventListener('DOMContentLoaded', () => {
    // setTimeout(codeAddress(),10)
    
});