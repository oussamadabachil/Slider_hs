/* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */
document.addEventListener("DOMContentLoaded",()=>{
    const items = document.querySelectorAll('img');




    const nbSlide = items.length;
    const suivant = document.querySelector('.right');
    const precedent = document.querySelector('.left');
    let count = 0;
    
    
 
    let Object_slider = {

        /* itemss : document.querySelectorAll('img'),
       suivant:document.querySelector('.right'),
        precedent: document.querySelector('.left'),
        count:0,
        nbSlide : itemss.length,*/

        slidePrecedente() {
            items[count].classList.remove('active');

            if(count > 0){
                count--;
            } else {
                count = nbSlide - 1;
            }
        
        items[count].classList.add('active')
          },
          slideSuivante(){
        items[count].classList.remove('active');
        
            if(count < nbSlide - 1){
                count++;
            } else {
                count = 0;
            }
        
            items[count].classList.add('active')
            console.log(count);

        },keyPress(e){
            console.log(e);
            
            if(e.keyCode === 37){
                Object_slider.slidePrecedente();
            } else if(e.keyCode === 39){
                Object_slider.slideSuivante();
            }
        }
      };


suivant.addEventListener('click', Object_slider.slideSuivante)


precedent.addEventListener('click', Object_slider.slidePrecedente)


document.addEventListener('keydown', Object_slider.keyPress)
})
