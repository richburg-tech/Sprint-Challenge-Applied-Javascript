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

const cardsContainer = document.querySelector('.cards-container')
// const articlesArray = [
//     'javascript',
//     'bootstrap',
//     'technology',
//     'jquery',
//     'node',
// ];

const articlesArray = [
    axios.get(`https://lambda-times-backend.herokuapp.com`)


function createNewCard(cardData) {

    articlesArray.forEach(articles => {
        // axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
        articlesArray.then(data => {
            console.log('data',data)
            const info = data.data
            const displayInfo = createNewCard(info)
            console.log(info)
            createNewCard(info)
            cardsData.appendChild(displayInfo)
        })
    
        .catch(error => {
            console.log('fix me!', error)
        })
    })
    
    // creating elements
    const card = document.createElement('div')
    const headline = document.createElement ('')
    const authorPhoto = document.createElement('')
    const authorName = document.createElement('')
    // element structure 
    articlesArray.appendChild()
    articlesArray.appendChild()
    articlesArray.appendChild()
    articlesArray.appendChild()
    

    // setting the styles

    cardData.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    img.classList.add('img-container')
    by.classList.add('By')

    return card 

}
