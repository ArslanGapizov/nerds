function initMap() {
        var mapDiv = document.getElementById('map');
		var myLatLng = {lat: 45.043396, lng: 38.944506};
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 45.0438812, lng: 38.9427894},
            zoom: 18
        });
		var markerImage = "images/marker.png"
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: markerImage
		});
}
/*popup*/
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var closePopup = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var storage  = localStorage.getItem("email");

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if(storage){
		email.value = storage;
		name.focus();
	}
});

closePopup.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
	if(event.keyCode == 27 &&    popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
	}
});



/*filter slider*/
var minToggle = document.querySelector('.range-filter .min-toggle');
var maxToggle = document.querySelector('.range-filter .max-toggle');
var backField = document.querySelector('.range-controls');
var bar = document.querySelector('.bar')
var minPrice = document.querySelector('.range-filter .min-price');
var maxPrice = document.querySelector('.range-filter .max-price');

var leftFlag = false;
var rightFlag = false;

minToggle.addEventListener('mousedown', function(event) {
  event.preventDefault();
  leftFlag = true;
}, false);
minToggle.addEventListener('mouseup', function(event) {
  leftFlag = false;
}, false);
maxToggle.addEventListener('mousedown', function(event) {
  event.preventDefault();
  rightFlag = true;
}, false);
maxToggle.addEventListener('mouseup', function(event) {
  rightFlag = false;
}, false);
backField.addEventListener('onmouseleave', function(event) {
  leftFlag = false;
  rightFlag = false;
});
minToggle.style.left = '0px';
maxToggle.style.left = '150px';
minPrice.value = 0;
maxPrice.value = 15000;

backField.addEventListener('mousemove', function(event) {
  var res = event.pageX - this.offsetLeft - 250;
  if(leftFlag) {
    console.log(parseInt(maxToggle.style.left) - parseInt(minToggle.style.left));
    if(res >= 0 && res < (parseInt(maxToggle.style.left)-24)) {
      minToggle.style.left = res + 'px';
      minPrice.value = res * 100;
      bar.style.width = parseInt(maxToggle.style.left) - parseInt(minToggle.style.left) + 'px';
      bar.style.left = minToggle.style.left;
    }
  }
  if(rightFlag) {
    if(res <= 200 && res > (parseInt(minToggle.style.left)+24)) {
      maxToggle.style.left = res + 'px';
      maxPrice.value = res * 100;
      bar.style.width = parseInt(maxToggle.style.left) - parseInt(minToggle.style.left) + 'px';
      bar.style.left = minToggle.style.left;
    }
  }
}, false);
