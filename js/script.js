var linkMap = document.querySelector(".map-img");
var linkMessage = document.querySelector(".message-button");
var popupMap = document.querySelector(".popup-map");
var popupMessage = document.querySelector(".popup-message");
var closeMap = document.querySelector(".popup-map-close");
var closeMessage = document.querySelector(".popup-message-close");
var form = popupMessage.querySelector("form");
var userName = popupMessage.querySelector("[name=user-name]");
var email = popupMessage.querySelector("[name=user-email]");



linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-map-active");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-map-active");
});

linkMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMessage.classList.add("popup-message-active");
    userName.focus();
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value) {
    evt.preventDefault();
    
    popupMessage.classList.remove("popup-message-error");
    popupMessage.offsetWidth = popupMessage.offsetWidth;
    popupMessage.classList.add("popup-message-error");
    } 
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    	evt.preventDefault();
    	if (popupMessage.classList.contains("popup-message-active")) {
    	popupMessage.classList.remove("popup-message-active");
    	popupMessage.classList.remove("popup-message-error");
    	}
    }
})

closeMessage.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupMessage.classList.remove("popup-message-active");
    popupMessage.classList.remove("popup-message-error");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    	evt.preventDefault();
    	if (popupMap.classList.contains("popup-map-active")) {
    		popupMap.classList.remove("popup-map-active");
    	}
    }
})