var showHiden = function(event) {
  var tabSelection = event.target.dataset.tabSelection; // obtiene el data del elemento que desencadeno el evento
  var button = document.querySelectorAll('button');
  var breakfast = document.getElementById('breakfast');
  var lunch = document.getElementById('lunch');
  var dinner = document.getElementById('dinner');
  if (tabSelection === 'tabBreakfast') { // si el data es tabBreakfast
    if (button[1].classList.contains('blue')) { // si tiene la clase blue
      button[1].classList.remove('blue'); // remover la clase blue
    }
    if (button[2].classList.contains('blue')) {
      button[2].classList.remove('blue');
    }
    event.target.classList.add('blue');
    lunch.style.display = 'none'; // el elemento lunch desaparece
    dinner.style.display = 'none';
    breakfast.style.display = 'block'; // el elemento breakfast se le agrega un display block para que se muestre
  } else if (tabSelection === 'tabLunch') { // si data es tabLunch
    if (button[0].classList.contains('blue')) {
      button[0].classList.remove('blue');
    }
    if (button[2].classList.contains('blue')) {
      button[2].classList.remove('blue');
    }
    event.target.classList.add('blue');
    lunch.style.display = 'block';
    dinner.style.display = 'none';
    breakfast.style.display = 'none';  
  } else if (tabSelection === 'tabDinner') { // si data es igual a tabDinner
    if (button[1].classList.contains('blue')) { 
      button[1].classList.remove('blue');
    }
    if (button[0].classList.contains('blue')) {
      button[0].classList.remove('blue');
    }
    event.target.classList.add('blue');
    lunch.style.display = 'none';
    dinner.style.display = 'block';
    breakfast.style.display = 'none';
  }
};

function loadPag() {
  var breakfast = document.getElementById('breakfast');
  var lunch = document.getElementById('lunch');
  var dinner = document.getElementById('dinner');
  lunch.style.display = 'none'; // cuanda carga la pagina esta los tab ocultos
  dinner.style.display = 'none';
  breakfast.style.display = 'none';  
  var elementTab = document.getElementsByClassName('tab');
  for (var i = 0;i < elementTab.length;i++) {
    elementTab[i].addEventListener('click', showHiden); // agrega eventos a todos los tab
  }
}

loadPag();