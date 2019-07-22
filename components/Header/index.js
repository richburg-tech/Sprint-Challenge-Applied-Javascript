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

function Header() {
const header = document.createElement('div');
const title = document.createElement('h1')
const date = document.createElement('span')
const temp = document.createElement('span')

header.classList.add('headerContainer')
date.classList.add('date')
date.textContent = 'SMARCH 28, 2019'
title.textContent = 'Lambda Times'
temp.classList.add = ('temp')
temp.textContent = '98°'

header.appendChild('date')
header.appendChild('title')
header.appendChild('temp')

return header;


// temp.addEventListener('load', function toggle(event){
//     headerContainer.classList.toggle('headerContainer-open')
//   })
//   return headerContainer;
}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())