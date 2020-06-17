// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function cardCreator(card) {
    //creating elements & classes
     let parent = document.createElement("div")
     parent.classList.add('card');
     let parent2 = document.createElement("div")  
     parent2.classList.add('headline');
     parent2.textContent = card.headline;
     let parent3 = document.createElement("div") 
     parent3.classList.add('author'); 
     let parent4 = document.createElement("div") 
     parent4.classList.add('img-container'); 
     let myImg = document.createElement("img");  
      myImg.src = card.authorPhoto
     let mySpan = document.createElement("span")     
      mySpan.textContent = "By" + card.authorName
     //append ELEMENTS
  
    parent.appendChild(parent2)
    parent.appendChild(parent3)
    parent3.appendChild(parent4)
    parent3.appendChild(mySpan)
    parent4.appendChild(myImg)
     
    return parent;
}

 let myCards = document.querySelector(".cards-container");

 axios.get('https://lambda-times-backend.herokuapp.com/articles').then((res) => {
       res.data.articles.javascript.forEach(item => {          
            myCards.append(cardCreator(item));
       })
    })
  .catch( error => {
      alert("Error: its n error from card", error);
    })
