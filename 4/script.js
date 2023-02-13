var targetInput = document.getElementById("country"),
  results = document.getElementById("autocomplete-results"),
  countryList = [
    "Albania",
    "Algeria",
    "American Samoa",
    "Cuba",
    "Denmark",
    "Iran",
    "Georgia",
    "United State America",
    "Switzerland",
    "Romania",
  ],
  matches = [],
  resultsCursor = 0;

// Focus the input
targetInput.focus();


// Add event listener for the input keydown
targetInput.addEventListener("keydown",function(event){
  if ( event.keyCode == "13" ){
    event.preventDefault();
  }
});


// Add event listener for the input keyup
targetInput.addEventListener("keyup", function (event) {
  /*
   * key codes
   *
   * Enter : 13
   * Arrow Up: 38
   * Arrow Down: 40
   */

    results.innerHTML = "";
    toggleResults("hide");

    if(this.value.length > 0) {
        matches = getMatches(this.value);
        
        if (matches.length > 0) {
            displayMatches(matches);
        }
    }

    if (results.classList.contains("visible")) {
      switch (event.keyCode) {
        case 13:
          targetInput.value = results.children[resultsCursor].innerHTML;
          toggleResults("hide");
          resultsCursor = 0;
          break;
        case 38:
          if (resultsCursor > 0) {
            resultsCursor--;

            moveCursor (resultsCursor);
          }
          break;
        case 40:
          if (resultsCursor < (matches.length - 1)) {
            resultsCursor++;

            moveCursor (resultsCursor);
          }
          break;
        default:
          break;
      }
    }
});

// Define a function for toggleing the results list
function toggleResults(action) {
  if (action == "show") {
    results.classList.add("visible");
  } else if (action == "hide") {
    results.classList.remove("visible");
  }
}


// Define a function for checking if the input value matches any of the country names
 function getMatches(inputText){
    var matchList = [];

    for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

// Define a function for displaying autocomplete results
function displayMatches( matchList ){
    var j = 0;

    while(j < matchList.length){
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    // The first child get a class of "highlighted"
    moveCursor( resultsCursor );

    //show the results
    toggleResults("show");
}

// Define a function for moving the cursor in the results list
function moveCursor(pos) {
    for(var x = 0; x < results.children.length; x++) {
      results.children[x].classList.remove("highlighted");
      // console.log(results.children[x].innerHTML);
      console.log(results.children[x]);
    }

    results.children[pos].classList.add("highlighted"); 
}