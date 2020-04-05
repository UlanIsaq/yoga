window.addEventListener('DOMContentLoaded', function (){

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
     infoContent = document.querySelector('.info'),
     content = document.getElementsByClassName('info-tabcontent fade');

    function hideTabContent(a){
        for (let i = a; i < content.length; i++) {
           content[i].classList.remove('show');
           content[i].classList.add('hide');
            
        }
    }
        hideTabContent(1);

    function showTabContent(b) {
        if(content[b].classList.contains('hide')){
        content[b].classList.remove('hide');
        content[b].classList.add('show');
    }
    }   
    //showTabContent();
infoContent.addEventListener('click', function (event) {
   let target = event.target;
   if(target && target.classList.contains('info-header-tab')){
       for (let i = 0; i < tab.length; i++) {
           if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
           }
           
       }
   }



});
   




  
  
   


});