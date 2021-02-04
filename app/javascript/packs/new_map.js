import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
    apiKey: process.env.GOOGLE_MAP_API_KEY,
    version: "weekly",
    });
    let new_map
    loader.load().then(() => {
    new_map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.6803997, lng: 139.7690174 },
        zoom: 15,
    });
    });

      
      var latlngDis = document.getElementById('latlngDisplay')
      var addressDis = document.getElementById('addressDisplay')
      
      
      
      
      var display = document.getElementById('display')
      
      
      function codeAddress(){
        var inputAddress = document.getElementById('address').value;
        let geocoder = new google.maps.Geocoder()
        geocoder.geocode( { 'address': inputAddress}, function(results, status) {
          if (status == 'OK') {
            new_map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: new_map,
                position: results[0].geometry.location
            });
            latlngDis.innerHTML = results[0].geometry.location;
      
            geocoder.geocode({ 'location': marker.getPosition()}, function(results, status) {
              if (status == "OK"){
                addressDis.innerHTML = results[0].formatted_address;
              } else {
                alert("Geocode 取得に失敗しました：" + status);
              }
            });
      
          } else {
            alert('該当する結果がありませんでした：' + status);
          }
        });   
      }
      document.getElementById("search").addEventListener("click", function() {
        codeAddress()
        });