// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





//      const articlesArray = [
//         'javascript',
//         'bootstrap',
//         'technology',
//         'jquery',
//         'node',
// ];

// function createNewCard(card-container, headline, author, img-container) {
//     const card-container= document.createElement('card');
//     const headline = document.createElement ('articles')
//     const img-container = document.createElement('img-container')
//     const author= document.createElement('By')

//     card-container.textContent = ('javascript')
//     card-container.textContent = ('bootstrap')
//     card-container.textContent = ('technology')
//     card-container.textContent = ('jquery')
//     card-container.textContent = ('node')

//     card.appendChild(javascript)
//     card.appendChild(bootstrap)
//     card.appendChild(technology)
//     card.appendChild(jquery)
//     card.appendChild(node

        
        
//   cardData.classList.add('card')
//     headline.classList.add('headline')
//     author.classList.add('author')
//     img.classList.add('img-container')
//     by.classList.add('By')

    

//     axios.get(`https://lambda-times-backend.herokuapp.com/articles`);
//     articlesArray.forEach(articlesArray => {
//         articlesArray.then(data => {
//             console.log('data',data)
//             const info = data.data
//             const displayInfo = createNewCard(info)
//             console.log(info)
//             createNewCard(info)
//             cardsData.appendChild(displayInfo)
//         })
    
//         .catch(error => {
//             console.log('fix me!', error)
//         })
//     })
    
//     // creating elements
    
//     // element structure 
//     )
//     // setting the styles

    

   

//     return card 

// }
