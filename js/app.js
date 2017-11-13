var showHiden = function(e){
   var tabSelection=e.target.dataset.tabSelection;
   var breakfast= document.getElementById('breakfast');
   var lunch = document.getElementById('lunch');
   var dinner = document.getElementById('dinner');
   if(tabSelection ==='tabBreakfast'){
       lunch.style.display='none';
       dinner.style.display='none';
       breakfast.style.display='block';
   } else if(tabSelection ==='tabLunch'){
       lunch.style.display='block';
       dinner.style.display='none';
       breakfast.style.display='none';  
   } else if(tabSelection ==='tabDinner'){
       lunch.style.display='none';
       dinner.style.display='block';
       breakfast.style.display='none';
     }
   }

function loadPag(){
    var breakfast= document.getElementById('breakfast');
    var lunch = document.getElementById('lunch');
    var dinner = document.getElementById('dinner');
    lunch.style.display='none';
    dinner.style.display='none';
    breakfast.style.display='none';  
   var elementTab = document.getElementsByClassName('tab');
   for(var i=0;i<elementTab.length;i++){
       elementTab[i].addEventListener('click',showHiden);
   }
}

loadPag();