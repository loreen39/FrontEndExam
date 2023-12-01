const userInput = document.getElementById('user-input');
const addSpecific = document.getElementById('add-specific');
const addGeneral = document.getElementById('add-general');
var radios = document.getElementsByName('type');

let fruitList = document.getElementById('fruit-list');
let legumeList = document.getElementById('legume-list');
let generalList = document.getElementById('general-list');

//Checking if one of the inputs is Empty
function checkInputs(){
     var radioChecked = false;

    for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioChecked = true;
      break;
    }
    }

    if(!radioChecked || userInput.value === ""){
        return false;
    }else{
        return true;
    }
}

const fruitRadio = document.getElementById('fruits');
const legumeRadio = document.getElementById('legumes');


//add to fruit list
addSpecific.addEventListener('click', ()=>{
    const name = userInput.value;
if(fruitRadio.checked){
    const alert = `<div class="alert-success p-2 m-2 rounded-2 transition">Fruits! - ${name} </div>`;
    fruitList.insertAdjacentHTML('beforeend',alert);
}

if(legumeRadio.checked){
    const alert = `<div class="alert-warning p-2 m-2 rounded-2 transition">Fruits! - ${name} </div>`;
    legumeList.insertAdjacentHTML('beforeend',alert);
}
});

addGeneral.addEventListener('click',()=>{
    const name = userInput.value;
    if(fruitRadio.checked){
        const alert = `<div class="alert-primary p-2 m-2 rounded-2 fruit transition">Fruits! - ${name} </div>`;
        generalList.insertAdjacentHTML('beforeend',alert);
    }
    
    if(legumeRadio.checked){
        const alert = `<div class="alert-primary p-2 m-2 rounded-2 legume transition">Legumes! - ${name} </div>`;
        generalList.insertAdjacentHTML('beforeend',alert);
    }
});

const searchBtn = document.getElementById('s-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', ()=> {
   const name = searchInput.value;
   const alerts = document.querySelectorAll('.alert-div');
   for(let i=0 ; i<alerts.length ; i++){
    alertName = alerts[i].textContent;
    if(alertName.includes(name)){
        alerts[i].style.background = 'red';
    }
   }
});

const deleteBtn = document.getElementById('d-btn');
deleteBtn.addEventListener('click',()=>{
    const name = searchInput.value;
   const alerts = document.querySelectorAll('.alert-div');
   for(let i=0 ; i<alerts.length ; i++){
    alertName = alerts[i].textContent;
    if(alertName.includes(name)){
        alerts[i].remove();
    }
   }
})



generalList.addEventListener('click', (event) => {
    if (event.target.value.contains('fruit')) {
      const listItem = event.target;
      if (listItem) {
        fruitList.appendChild(listItem);
      }
    }
    if (event.target.value.contains('legume')) {
        const listItem = event.target;
        if (listItem) {
          legumeList.appendChild(listItem);
        }
      }
  });