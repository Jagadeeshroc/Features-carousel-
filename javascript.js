function switchOff(){
 document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
 document.getElementById("catimage").src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
 document.getElementById("switchstatus").textContent="switch Off";
 document.getElementById("onswitch").style.backgroundColor="#22c55e";
 document.getElementById("offswitch").style.backgroundColor="#cbd2d9";
}
 function switchOn(){
  document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catimage").src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchstatus").textContent=("switch On");
  document.getElementById("offswitch").style.backgroundColor="#e12d39";
  document.getElementById("onswitch").style.backgroundColor="#cbd2d9";
   
 }