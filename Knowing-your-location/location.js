 if(navigator.geolocation){
   
    navigator.geolocation.getCurrentPosition(function(position){
      document.getElementById("displayHere").innerHTML = "latitude: "+position.coords.latitude+"<br>longitude:"+position.coords.longitude;
      var myPos = position.coords.latitude+","+position.coords.longitude;
  console.log(myPos);
      var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+myPos+"&zoom=18&size=400x400&sensor=false";
document.getElementById("imageMap").src= img_url;
  });



   }
