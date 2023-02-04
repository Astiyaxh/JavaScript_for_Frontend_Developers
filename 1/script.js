console.log(document.body);
console.log(document.images);

var firstItem   = document.getElementById("item-1"),
    myList      = document.getElementsByClassName("mylist"),
    paragraphs  = document.getElementsByTagName("p")
    images      = document.querySelectorAll("img");


console.log(firstItem)
console.log(myList)
console.log(paragraphs)
console.log(images)


firstItem.style.color = "red";

myList[1].style.display = "none";

for (var i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "dodgerblue"
}