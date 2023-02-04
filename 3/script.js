var btn     = document.getElementById("back-to-top"),
    body    = document.body,
    docElem = document.documentElement,
    offset  = 100,
    scrollPos, docHeight;


//calculate the document height

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined'){
    offset = docHeight / 4;
}

window.addEventListener("scroll", function(event){
    scrollPos = body.scrollTop || docElem.scrollTop;
    btn.className = ( scrollPos > offset ) ? "visible" : ""
});