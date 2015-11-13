
<script>
  
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      document.getElementById("displayHere").innerHTML = "latitude: "+position.coords.latitude+"<br>longitude:"+position.coords.longitude;
  });
}
  
</script>
