// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(date,lambdatimes,temp) {
const headerContainer = document.createElement('div');
const title = document.createElement('h1')
// const temp = document.createElement('98')

lambdatimes.textContent = ('lambdatimes')
date.textContent = ('SMARCH 28, 2019')
temp.textContent = '98°'


headerContainer.appendChild(title)
headerContainer.appendChild(date)
headerContainer.appendChild(temp)

headerContainer.classList.add('headerContainer')
headerContainer.classList.add('title')
headerContainer.classList.add('date')
temp.classList.add('temp')


temp.addEventListener('load', function toggle(event){
    headerContainer.classList.toggle('headerContainer-open')
  })
  return headerContainer;
}
