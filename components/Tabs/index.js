// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const createTabs = document.querySelector('.tabs')
console.log('Yooo', createTabs)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
   .then((data) =>{
    // gives results from the server
    console.log('response', data)
    let tabs = data.data
    console.log('Yooo', tabs)
    const element =createTabs(tabs)
    console.log('Rip Nip the Great', tabs)
    tabs.appendChild(element)
   })

   .catch((error) => {
       console.log('Error', error);
   })
