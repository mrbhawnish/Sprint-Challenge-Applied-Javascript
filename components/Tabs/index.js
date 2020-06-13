// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function buttonCreator(buttonTitle){
    let tabButton = document.createElement('button');
    tabButton.textContent = buttonTitle;
    tabButton.classList.add('button');
    
    return tabButton;
}

let button = buttonCreator(item);
let myTopics = document.querySelector(".topics");
myTopics



axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.data.message.forEach( item => {
           myTopics.appendChild(item);
        })
    })
    .catch( error => {
        alert("Error:", error);
    })