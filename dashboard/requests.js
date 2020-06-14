//-------------------------------SCRIPT-----------------------------------------
    
// THIS IS TO GET ALL THE VALUES FOR EACH OF THE VARIABLES OK 

// GETTING VALUE FOR NAME
<script>

setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("name").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/name", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR TITLE
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("title").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/title", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR TEAM
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("team").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/team", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR STATUS
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("status").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/status", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR TIME
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("time").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/time", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR HRV
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("hrv").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/hrv", true);
  xhttp.send();
}, 10000 ) ;
//--------------------------------------------------------------------------
// GETTING VALUE FOR TEMPERATURE
setInterval(function ( ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("temperature").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/temperature", true);
  xhttp.send();
}, 10000 ) ;

//--------------------------------------------------------------------------

// THIS FUNCTION WILL NOW REPLACE OUR VALUES WE GOT FROM THE REQUEST TO THE DASHBOARD
// WE ARE REPLACING THE PLACEHOLDER VALUES HERE WITH THE ACTUAL VALUES BY CHECKING FOR THE STRING
    
String processor(const String& var){
  //Serial.println(var);
  if(var == "TEMPERATURE"){
    return read(IBMSERVER)Temperature();
  }
  else if(var == "HRV"){
    return read(IBMSERVER)HRV();
  }
  else if(var == "TIME"){
    return read(IBMSERVER)Time();
  }
  else if(var == "NAME"){
    return read(IBMSERVER)Name();
  }
  else if(var == "TITLE"){
    return read(IBMSERVER)Title();
  }
  else if(var == "STATUS"){
    return read(IBMSERVER)Status();
  }
  else if(var == "TEAM"){
    return read(IBMSERVER)Team();
  }
  return String();
}

//--------------------------------------------------------------------------

// THIS ONE INITIALIZES THE PLATFORM?
//(IBM PLATFORM).begin();

WiFi.begin(ssid, password);

server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/html", index_html, processor);
});
server.on("/temperature", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Temperature().c_str());
});
server.on("/name", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Name().c_str());
});
server.on("/title", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Title().c_str());
});
server.on("/status", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Status().c_str());
});
server.on("/hrv", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)HRV().c_str());
});
server.on("/time", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Time().c_str());
});
server.on("/team", HTTP_GET, [](AsyncWebServerRequest *request){
  request->send_P(200, "text/plain", read(IBMSERVER)Team().c_str());
});

server.begin();

void loop(){

}
    
</script>
