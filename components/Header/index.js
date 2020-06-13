// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //get elements from HTML
   let myHeader = document.querySelector(".header-container")


    //Create elements & relative classes
   let divEl = document.createElement("div");
    divEl.classList.add("header");
   let spanEl1 = document.createElement("span");
   spanEl1.classList.add("date");
   let h1El = document.createElement("h1");
   let spanEl2 = document.createElement("span");
   spanEl2.classList.add("temp");

   //Adding texts
  spanEl1.textContent = "SMARCH 28, 2019";
  h1El.textContent = "Lambda Times";
  spanEl2.textContent = "98°";
  
    //Append elementts
    divEl.appendChild(spanEl1,  h1El, spanEl2);
    myHeader.appendChild(divEl)
  return myHeader;
}
   Header();