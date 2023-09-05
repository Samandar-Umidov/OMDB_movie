const elForm = document.querySelector('.js-form');
const elList = document.querySelector('.js-list');
const elInput = document.querySelector('.js-input');
const elSelect = document.querySelector('.js-select')

const API_KEY = '9ea37ef';


const fragment = document.createDocumentFragment();






 
function renderMovies(arr, node) {
  node.innerHTML = '';
  arr.forEach(item => {

    // Creat DOM elements
    const newItem = document.createElement('li');
    const newItemImg = document.createElement('img');
    const newItemTitle = document.createElement('h3');
    const newItemType = document.createElement('span');
    const newItemImDBLink = document.createElement('a');


    //  Assign textContent and href path also img source path
    newItemImg.src = item.Poster;
    newItemImg.alt = item.Title;
    
    newItemTitle.textContent = item.Title;
    newItemType.textContent = item.Type;

    newItemImDBLink.textContent = 'IMDB link';
    newItemImDBLink.href = `https://www.imdb.com/title/${item.imdbID}`;
    newItemImDBLink.setAttribute('target', 'blank');


    // Append all html elements in list item
    newItem.append(newItemImg, newItemTitle, newItemType, newItemImDBLink);

    fragment.appendChild(newItem);
  });
   
  node.appendChild(fragment);

}




function getMoviesData(url) {
  fetch(url)
  .then((javob) => javob.json())
  .then((data) => 
  renderMovies(data.Search, elList))
  .catch((error) => console.log(error)

  )
  
}

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  const inputValue = elInput.value.trim();
  const selectValue = elSelect.value.trim();
  if (selectValue == "") {
    alert ("media turini tanlang");
    return;
  }

  if(selectValue) {
    getMoviesData(`https://www.omdbapi.com/?apikey=3ae1c572&s=${inputValue}&type=${selectValue}`);
  } else {
    getMoviesData(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`);
  }
})