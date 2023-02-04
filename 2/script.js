var submitBtn = document.getElementById("submit"),
    container = document.querySelector(".container");


submitBtn.addEventListener("click", function(event){
    console.log("Hey, I've been clicked!");
});

container.addEventListener("mouseenter", mouseEnterContainer);

function mouseEnterContainer(){
    console.log("Hey, there was a mouseenter event triggerd!");

    container.removeEventListener("mouseenter", mouseEnterContainer);
}

document.addEventListener("keyup", function(event) {
    console.log(event.key,'= ',event.keyCode);

})