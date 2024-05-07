document.documentElement.style.setProperty('--gradient-degree', '90deg');





/*
function showAlertOnScroll() {
  // Calculate the total scroll height of the page
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the current scroll position
  const currentScrollPosition = window.scrollY;

  // Check if the current scroll position is at the bottom
  if (currentScrollPosition >= totalScrollHeight) {
      foot.style.opacity = 1; // Show the footer
  } else {
      foot.style.opacity = 0; // Hide the footer
  }
}

// Add a scroll event listener to trigger the alert
window.addEventListener('scroll', showAlertOnScroll);
*/



const maxPetsPerSet = 99999999;

function calculateTotalValue(setId) {
  const petsContainer = document.getElementById(setId + "-container");
  const petElements = petsContainer.getElementsByClassName('pet-item');
  let totalValue = 0;
  const outsideBob = checkCheckbox();

  for (const petElement of petElements) {
    totalValue += parseFloat(petElement.dataset.value);
  }

  if (petElements.length >= 9) {
    // Add padding to the right of the container
    petsContainer.style.paddingRight = '0.5vw'; // You can adjust the value as needed
  } else {
    // Reset the padding if there are fewer than 9 pets
    petsContainer.style.paddingRight = '0';
  }


  return totalValue;

}

function updateTotalValue(setId) {

  const numericValue = parseFloat(selectedValue);
  const valueadjustment = 1 / numericValue;

  const totalValue = Math.round( calculateTotalValue(setId) * valueadjustment * 100) / 100;
  document.getElementById(`total-value-${setId}`).textContent = totalValue;
}

function comparePets() {



  const numericValue = parseFloat(selectedValue);
  const valueadjustment = 1 / numericValue;

  const totalValueSet1 = Math.round( calculateTotalValue('set1') * valueadjustment* 100) / 100;
  const totalValueSet2 = Math.round( calculateTotalValue('set2') * valueadjustment* 100) / 100;



  let comparisonResult = "";
  let prosentvin; 

  if (totalValueSet1 == totalValueSet2) {
    prosentvin = 50;
  } else {
    prosentvin = Math.round(100 * totalValueSet1 / (totalValueSet1 + totalValueSet2));
  }
  
  
  
  const progressBar = document.getElementById("color-progress");
  progressBar.style.width = prosentvin + "%";


  

  if (totalValueSet1 > totalValueSet2) {
  comparisonResult = (totalValueSet1 - totalValueSet2);

  document.querySelector('.mid').classList.remove('upgood');
  document.querySelector('.mid').classList.remove('NoSe');
  var midDiv = document.querySelector('.mid');
  midDiv.classList.add('downbad');
  

  var hensElement = document.getElementById('hens');
  hensElement.style.color = 'var(--theme-textoptionFour)';
  var hensElement = document.getElementById('hens');

  var hensElement = document.getElementById('din');
  hensElement.style.color = 'var(--theme-Highlight)';
  var hensElement = document.getElementById('din');



  var hensElement = document.getElementById('Jobiden');
  hensElement.style.opacity = '0.25';
  var hensElement = document.getElementById('Jobiden');
  var hensElement = document.getElementById('Xi');
  hensElement.style.opacity = '0.25';
  var hensElement = document.getElementById('Xi');
  var hensElement = document.getElementById('Trump');
  hensElement.style.opacity = '1';
  var hensElement = document.getElementById('Trump');

  smoothGradientTransition(165)

  var hensElement = document.getElementById('comparison-result');
  hensElement.style.color = 'var(--theme-Highlight)';
  

  } else if (totalValueSet1 < totalValueSet2) {
    comparisonResult = (totalValueSet2 - totalValueSet1);

    document.querySelector('.mid').classList.remove('downbad');
    document.querySelector('.mid').classList.remove('NoSe');
    var midDiv = document.querySelector('.mid');
    midDiv.classList.add('upgood');


    var hensElement = document.getElementById('hens');
    hensElement.style.color = 'var(--theme-Highlight)';
    var hensElement = document.getElementById('hens');
  
    var hensElement = document.getElementById('din');
    hensElement.style.color = 'var(--theme-textoptionFour)';
    var hensElement = document.getElementById('din');
  


    var hensElement = document.getElementById('Jobiden');
    hensElement.style.opacity = '1';
    var hensElement = document.getElementById('Jobiden');
    var hensElement = document.getElementById('Xi');
    hensElement.style.opacity = '0.25';
    var hensElement = document.getElementById('Xi');
    var hensElement = document.getElementById('Trump');
    hensElement.style.opacity = '0.25';
    var hensElement = document.getElementById('Trump');

    smoothGradientTransition(15)
    
    var hensElement = document.getElementById('comparison-result');
    hensElement.style.color = 'var(--theme-TextMid)';

  } else if (totalValueSet1 === totalValueSet2) {
    comparisonResult = (totalValueSet1 - totalValueSet2);

    document.querySelector('.mid').classList.remove('downbad');
    document.querySelector('.mid').classList.remove('upgood');
    var midDiv = document.querySelector('.mid');
    midDiv.classList.add('NoSe');
    
    var hensElement = document.getElementById('hens');
    hensElement.style.color = 'var(--theme-textoptionFour)';
    var hensElement = document.getElementById('hens');
  
    var hensElement = document.getElementById('din');
    hensElement.style.color = 'var(--theme-textoptionFour)';
    var hensElement = document.getElementById('din');



    var hensElement = document.getElementById('Jobiden');
    hensElement.style.opacity = '0.25';
    var hensElement = document.getElementById('Jobiden');
    var hensElement = document.getElementById('Xi');
    hensElement.style.opacity = '1';
    var hensElement = document.getElementById('Xi');
    var hensElement = document.getElementById('Trump');
    hensElement.style.opacity = '0.25';
    var hensElement = document.getElementById('Trump');

    smoothGradientTransition(95)

    var hensElement = document.getElementById('comparison-result');
    hensElement.style.color = 'var(--theme-TextMid)';
  }



  document.getElementById("comparison-result").textContent = Math.round(comparisonResult* 100 ) / 100;

  const num = Math.round(comparisonResult * 100) / 100;
  const numDigits = num.toString().replace('.', '').length;
  
  const paragraphElement = document.getElementById('comparison-result');
  if (window.innerHeight > window.innerWidth) {
    if (numDigits <= 1) {
      paragraphElement.style.fontSize = '1.08em';
    } else if (numDigits < 3) {
        paragraphElement.style.fontSize = '0.675em';
    } else if (numDigits < 4) {
        paragraphElement.style.fontSize = '0.6075em'; 
    } else if (numDigits < 5) {
        paragraphElement.style.fontSize = '0.54em'; 
    } else if (numDigits < 6) {
        paragraphElement.style.fontSize = '0.405em';
    } else {
      paragraphElement.style.fontSize = '0.36em';}
  } else {
      if (numDigits == 1) {
        paragraphElement.style.fontSize = '1em';
      } else if (numDigits < 3) {
        paragraphElement.style.fontSize = '0.65em';
      } else if (numDigits < 4) {
        paragraphElement.style.fontSize = '0.6em';
      } else if (numDigits < 5) {
        paragraphElement.style.fontSize = '0.55em';
      } else if (numDigits < 6) {
        paragraphElement.style.fontSize = '0.4em';
      } else {
        paragraphElement.style.fontSize = '0.3em';}
    }

  setFontSize(totalValueSet2, 'total-value-set2', window.innerHeight > window.innerWidth);
  setFontSize(totalValueSet1, 'total-value-set1', window.innerHeight > window.innerWidth);


}

function addToSet(setId, pat) {
  removeAddButtons(setId)
  const setContainer = document.getElementById(setId + "-container");
  const petCount = setContainer.childElementCount;

  if (petCount >= maxPetsPerSet) {
      alert("The set is already full with " + maxPetsPerSet + " pets.");
      return;
  }
  
  


  
  const petElement = document.createElement("div");
  petElement.className = "pet-item";
  outsideBob = 'd'

  petElement.dataset.value = pat.d;


  if (pat.filtertype === "pets") {
    outsideBob = checkCheckbox()
    petElement.dataset.value = pat[outsideBob];
  }


  const img = document.createElement("img");
  img.src = pat.imageUrl;
  img.alt = pat.name + " Image";
  img.width = 100;
  img.height = 100;

  img.classList.add(outsideBob);

  petElement.appendChild(img);

  const imgOverlay = document.createElement("img");

  const folderPath = 'overlays/';
  const imageName = outsideBob + '.png';
  

  imgOverlay.alt = "";
  imgOverlay.width = 100;
  imgOverlay.height = 100;
  imgOverlay.classList.add("Overlay")
  petElement.appendChild(imgOverlay);

  petElement.addEventListener("click", () => {
  setContainer.removeChild(petElement);
  removeAddButtons(setId)
  plussknapp(setId)
  updateTotalValue(setId);
  comparePets()
  });

  setContainer.appendChild(petElement);
  updateTotalValue(setId);
  comparePets()


  if (petCount <= maxPetsPerSet) {
    plussknapp (setId)
  }
  if (petCount >= (maxPetsPerSet-1)){
    removeAddButtons(setId)
  }
  }





function populatePetsSet(setId, petsData) {
// Empty the container
const setContainer = document.getElementById(setId + "-container");
setContainer.innerHTML = "";



plussknapp (setId)
}


function plussknapp (setId) {
const setContainer = document.getElementById(setId + "-container");


const petElement = document.createElement("div");
petElement.className = "addbutton";

petElement.dataset.value = 0;


const img = document.createElement("img");
img.src = "https://i.ibb.co/hZbRp7R/60740.png"
img.alt = "add button" + " Image";
img.width = 128;
img.height = 128;

img.addEventListener('click', () => {
openModal(modal, setId);
});


petElement.appendChild(img);

setContainer.appendChild(petElement);
updateTotalValue(setId);
}

function removeAddButtons(setId) {
const setContainers = document.querySelectorAll(`#${setId}-container .addbutton`);

setContainers.forEach((setContainer) => {
  setContainer.remove();
});
}


// Create a function to open the modal popup
function openPopup() {
  // Create a modal container
  const modal = document.createElement("div");
  modal.classList.add("modal"); // You can style this with CSS
  
  // Add content to the modal
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.textContent = "This is the modal content.";
  
  // Create a close button for the modal
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
  // Close the modal when the close button is clicked
  document.body.removeChild(modal);
  });
  
  // Append content and close button to the modal
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  
  // Append the modal to the document body
  document.body.appendChild(modal);
  }
  


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
button.addEventListener('click', () => {
const modal = document.querySelector(button.dataset.modalTarget)
openModal(modal)

})
})

overlay.addEventListener('click', () => {
const modals = document.querySelectorAll('.modal.active')
modals.forEach(modal => {
closeModal(modal)
})
})

closeModalButtons.forEach(button => {
button.addEventListener('click', () => {
const modal = button.closest('.modal')
closeModal(modal)
})
})

function openModal(modal, setId) {
if (modal == null) return
modal.classList.add('active')
overlay.classList.add('active')
modal.classList.add(setId)
/*setLiWidth()*/


}

function closeModal(modal) {
if (modal == null) return
let petListcontainer=  document.getElementById('petList');
modal.classList.remove('active');
overlay.classList.remove('active');
modal.classList.remove('set1');
modal.classList.remove('set1');
// PetListNormal();

/*
adjustFontSizeL();
adjustFontSizeR();*/
}


// Call the function to populate both sets
populatePetsSet("set1", petsData);
populatePetsSet("set2", petsData);


/* search bar funksjon  */


const petList = document.getElementById("petList");
let lastClickedImage;

var disablefy = true;


petsData.forEach(pet => {
  const listItem = document.createElement("li");
  const petImage = document.createElement("img");

  listItem.classList.add("petsearchlist");

  petImage.src = pet.imageUrl;
  petImage.alt = pet.name;
  petImage.id = pet.name;
  listItem.appendChild(petImage);
  petList.appendChild(listItem);

  petImage.addEventListener('click', () => {
    if (disablefy) {
      var elementsWithSet1Class = document.getElementsByClassName("set1");
      var elementsWithSet2Class = document.getElementsByClassName("set2");

      if (elementsWithSet1Class.length > 0) {
        var classId = "set1";
      } else if (elementsWithSet2Class.length > 0) {
        var classId = "set2";
      }

      if (lastClickedImage) {
        lastClickedImage.classList.remove("lastselected");
      }
      petImage.classList.add("lastselected");
      lastClickedImage = petImage;

      addToSet(classId, pet);
    }
  });
});


var selectedFilterTypeRarity = "";
var selectedFilterType = ""; // Initialize the selected filter type as empty
var selectedFavorites = "";
var highlight_favorites = "";


function setSelctedFilterbuttons(event) {
  if (event.target.id !== 'modalfilterbuttons') {
    if (event.target.id !== 'Favorites') {
      favorites_array_button_visability('');
    }
    var items = document.querySelectorAll('.button-like');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

function setFilterType(filterType) {
  selectedFavorites = "";
  if (filterType === 'pets') {
    selectedFilterType = filterType;
    // If 'petfilter', display the elements
    document.querySelectorAll('.under-pet').forEach(element => {
      element.style.display = 'inline-block';
    });
  }
  else {
    document.querySelectorAll('.under-pet').forEach(element => {
      element.style.display = 'none';
    });
    if (filterType === 'favorites') {
      favorites_array_button_visability('visable');
      selectedFavorites = true;
      selectedFilterType = "";
      selectedFilterTypeRarity = "";
    }
    else if (filterType === 'highlight_favorites') {
      highlight_favorites = true;
      selectedFavorites = "";
      selectedFilterType = "";
      selectedFilterTypeRarity = "";

    }
    else {
      outsideFavorites();
      selectedFilterType = filterType;
      // If not 'petfilter', hide the elements

      selectedFilterTypeRarity = "";
    }
    // Add the 'selected' class to the clicked item
    // Call the search function to apply the new filter
  }
  searchFunction();
}

function setFilterRarity(filterTypeR) {
  selectedFavorites = "";
  selectedFilterTypeRarity = filterTypeR; // Set the selected filter type
  searchFunction(); // Call the search function to apply the new filter
}



//this is a shitshow and should be re-wrttien but it works and I couldn't be bothered;
function searchFunction() {
  var input, ul, li, i;
  input = document.getElementById("petSearch");
  ul = document.getElementById("petList");
  li = ul.getElementsByTagName("li");

  // Get the filter value for pet name
  var nameFilterValue = input.value.toLowerCase();

  for (i = 0; i < li.length; i++) {
    // Access the pet object associated with this list item
    var pet = petsData[i];
    li[i].querySelector('img').classList.remove('favorites');

    // Replace this condition with your custom filtering logic
    // Here, we are checking if the pet name contains the name filter value
    var nameMatch = pet.name.toLowerCase().includes(nameFilterValue);

    var typeMatch =
      selectedFilterType === "" || pet.filtertype === selectedFilterType;
        
    var favoritesMatch = 
      selectedFavorites === "" || pet.favorites === selectedFavorites;
    

    var rarityMatch =
      selectedFilterTypeRarity === "" || pet.rarity === selectedFilterTypeRarity;


    if (nameMatch && typeMatch && rarityMatch && favoritesMatch) {
      li[i].style.display = "";
      if(highlight_favorites && pet.favorites){
        li[i].querySelector('img').classList.add('favorites');
      }
    }
    else {
      li[i].style.display = "none";
    }
    }
}



//favorites filter chain start


function favorites_array_button_visability(visability,){
  var array_button = document.getElementById('addfavoritebutton');
  var favoritebuttonfull = document.getElementById('favoritebuttonfull');

  if (visability === 'visable'){
    array_button.style.display = '';
    favoritebuttonfull.style.display = '';
  }
  else {
    array_button.style.display = 'none';
    favoritebuttonfull.style.display = 'none';
  }

}



function getFavorites(){
  let stored_array = localStorage.getItem('favorites');
  if (stored_array){
    let loaded_string = JSON.parse(stored_array);
    var favorites = new Set(loaded_string);
  }
  else{
    favorites = new Set([]);
  }
  return favorites;
}

var favorites_list = getFavorites();
console.log(favorites_list);



function loadfavorites(){
  for (let item of favorites_list){
    let petindex = petsData.findIndex(pet => pet.name == item);
    if (petindex !== -1){
    petsData[petindex].favorites = true;
    }
    else{
      console.log(item);
      console.log(favorites_list);
    }
  }
}



function favorites_array_manipulation(event){
  if (event.target.id !== 'addfavoritebutton' && event.target.id !== 'petList'){
    if (favorites_list.has(event.target.alt)){
      favorites_list.delete(event.target.alt);
      event.target.classList.remove('favorites');
      let petindex = petsData.findIndex((pet) => pet.name == event.target.alt);
      petsData[petindex].favorites = false;
    }
    else{
      favorites_list.add(event.target.alt);
      event.target.classList.add('favorites');
    }
  }
  save_favorites();
}

function removeFavorites(){
  disablefy = false;
  setFilterType('highlight_favorites');
  var petDisplayContainer = document.getElementById('petList');
  var favorites_array_button = document.getElementById('addfavoritebutton')
  
  favorites_array_button.style.filter = "var(--theme-HighlightFilter)";
  favorites_array_button.removeEventListener('click', removeFavorites);
  favorites_array_button.addEventListener('click', PetListNormal);
  petDisplayContainer.addEventListener('click', favorites_array_manipulation);
}

function PetListNormal(){
  disablefy = true;
  highlight_favorites = false;
  loadfavorites();
  setFilterType('favorites');
  var petDisplayContainer = document.getElementById('petList');
  var favorites_array_button = document.getElementById('addfavoritebutton')
  
  favorites_array_button.style.filter = "var(--theme-Filteroption)";
  favorites_array_button.removeEventListener('click', PetListNormal);
  favorites_array_button.addEventListener('click', removeFavorites);
  petDisplayContainer.removeEventListener('click', favorites_array_manipulation);
}

function outsideFavorites(){
  disablefy = true;
  highlight_favorites = false;
  document.getElementById('petList').removeEventListener('click', favorites_array_manipulation);
}

function save_favorites(){
  let saveing_array = Array.from(favorites_list);
  let stringer = JSON.stringify(saveing_array);
  localStorage.setItem('favorites', stringer);
}

//favorites filter chain end




function petselected(petData) {
  const img = document.createElement("img");
  img.src = petData.imageUrl;
  img.alt = petData.name + " Image";
  img.width = 100;
  img.height = 100;


  const petElement = document.getElementById("petElement");
  petElement.appendChild(img);
  const setContainer = document.getElementById("setContainer");
  setContainer.appendChild(petElement);
  updateTotalValue(setId);
  
}


function checkCheckbox() {
  var rideCheckbox = document.getElementById("ride");
  var flyCheckbox = document.getElementById("fly");
  var neonRadio = document.getElementById("neon");
  var megaRadio = document.getElementById("mega");
  var regularRadio = document.getElementById("regular")
  
  var checkedValues = '';
  
  if (rideCheckbox.checked) {
    checkedValues += rideCheckbox.value;
  }
  if (flyCheckbox.checked) {
    checkedValues += flyCheckbox.value;
  }
  if (neonRadio.checked) {
    checkedValues += neonRadio.value;
  }
  if (megaRadio.checked) {
    checkedValues += megaRadio.value;
  }
  if (regularRadio.checked){
    checkedValues += regularRadio.value;
  }
  
  if (checkedValues !== '') {
    const bob = checkedValues
    return bob
  }
}

var btn = document.getElementById('btn');
var selectedValue = 1; 

function sharkClick() {
  btn.style.left = '0';
  selectedValue = 1; 
  comparePets();
  updateTotalValue("set2");
  updateTotalValue("set1");
}

function frostClick() {
  if (window.matchMedia("(orientation: landscape)").matches) {
    // Landscape orientation
    btn.style.left = '8vw';
  } else {
    // Portrait orientation
    btn.style.left = '12.5vw';
  }
  
  selectedValue = 100; 
  comparePets();
  updateTotalValue("set2");
  updateTotalValue("set1");
}


sharkClick()




/*
function setLiWidth() {
  const liElements = document.querySelectorAll('.selecter li');
  let maxWidth = 0;

  liElements.forEach(li => {
    const liWidth = li.scrollWidth;
    if (liWidth > maxWidth) {
      maxWidth = liWidth;
    }
  });

  liElements.forEach(li => {
    li.style.width = maxWidth + 'px';
  });
}



window.addEventListener('DOMContentLoaded', setLiWidth);
window.addEventListener('orientationchange', setLiWidth);
*/

function smoothGradientTransition(targetDegree) {
  let currentDegree = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gradient-degree'));
  const step = 1;
  const duration = 1000;
  
  const degreeIncrement = targetDegree > currentDegree ? step : -step;
  const intervalTime = duration / Math.abs(targetDegree - currentDegree);
  
  const transitionInterval = setInterval(() => {
    if (currentDegree === targetDegree) {
      clearInterval(transitionInterval);
    } else {
      currentDegree += degreeIncrement;
      document.documentElement.style.setProperty('--gradient-degree', currentDegree + 'deg');
    }
  }, intervalTime);
}





document.getElementById('show-filter-list').addEventListener('click', toggleGrid);

let isGridTemplateA = false; 

function toggleGrid() {
  const modalBody = document.querySelector('.modal-body');
  const selecterElements = document.querySelectorAll('.selecter');

  // Define the two gridTemplateAreas values
  const gridTemplateA = `
    "FilterButton search search"
    "pets pets pets"
    "liste2 liste2 liste2"
  `;

  const gridTemplateB = `
  "FilterButton search search"
  "liste pets pets"
  "liste liste2 liste2" 
  `;

  // Toggle the flag and set the appropriate gridTemplateAreas
  modalBody.style.gridTemplateAreas = isGridTemplateA ? gridTemplateB : gridTemplateA;
  isGridTemplateA = !isGridTemplateA;

  // Hide or show the .selecter class elements based on the flag
  selecterElements.forEach(element => {
    element.style.display = isGridTemplateA ? 'none' : 'flex';

    if (window.innerHeight > window.innerWidth) {
    const petSearch = document.getElementById('petSearch');
    petSearch.style.width = isGridTemplateA ? '60vw' : '100%';
  } else {
    petSearch.style.width = '32vw'}

  });
};

window.addEventListener('resize', () => {
    toggleGrid();
    toggleGrid();
});


/*
function adjustFontSizeL() {
  const container = document.querySelector('#topbar');
  const dinElement = document.getElementById('din');
  const containerWidth = container.clientWidth;
  const textWidth = dinElement.scrollWidth;

  dinElement.style.fontSize = 'min(5vw, 13vh)'
  const fontSize = (0.8*containerWidth / textWidth) * 100 + '%';
  dinElement.style.fontSize = fontSize;
}

function adjustFontSizeR() {
  const container = document.querySelector('#topbar');
  const hensElement = document.getElementById('hens');
  const containerWidth = container.clientWidth;
  const textWidth = hensElement.scrollWidth;

  alert(containerWidth + "+" + textWidth)

  const fontSize = (0.8 * containerWidth / textWidth) * 100 + '%';
  hensElement.style.fontSize = fontSize;
}

window.addEventListener('resize', adjustFontSize);
adjustFontSizeL();
window.addEventListener('resize', adjustFontSize);
adjustFontSizeR();
*/



function setFontSize(num, containerId, isPortrait) {
  const numDigits = num.toString().replace('.', '').length;
  const paragraphElement = document.getElementById(containerId);

  if (isPortrait) {
    if (numDigits <= 1) {
      paragraphElement.style.fontSize = '2.0em';
    } else if (numDigits < 3) {
      paragraphElement.style.fontSize = '1.5em';
    } else if (numDigits < 4) {
      paragraphElement.style.fontSize = '1.35em';
    } else if (numDigits < 5) {
      paragraphElement.style.fontSize = '1.2em';
    } else if (numDigits < 6) {
      paragraphElement.style.fontSize = '0.9em';
    } else {
      paragraphElement.style.fontSize = '0.72em';}
  } else {
      if (numDigits == 1) {
        paragraphElement.style.fontSize = '0.9em';
      } else if (numDigits < 3) {
        paragraphElement.style.fontSize = '0.8125em';
      } else if (numDigits < 4) {
        paragraphElement.style.fontSize = '0.75em';
      } else if (numDigits < 5) {
        paragraphElement.style.fontSize = '0.6875em';
      } else if (numDigits < 6) {
        paragraphElement.style.fontSize = '0.5em';
      } else {
        paragraphElement.style.fontSize = '0.375em';}
    }
}
