console.log("");

// document.addEventListener('DOMContentLoaded', ()=> {
//     const checkinbutton = document.getElementById('checkInButton');
//     const infobutton = document.getElementById('infoButton');
//     const popup = document.getElementById('popup');
//     const closepopup = document.getElementById('closepopup');
//     const popupcontent = document.getElementById('popup-content');

//     checkinbutton.addEventListener('click', ()=> {
//         alert('votre presence a ete enregistree. en attente de confirmaion par l administrateur.');
//     });

//     infobutton.addEventListener('click', ()=> {
//         popupcontent.textContent = 'soyez present tous les jours au cours';
//         popup.classList.remove('hidden');
//     });

//     closepopup.addEventListener('click', ()=> {
//         popup.classList.add('hidden');
//     });
// });



               const mobileMenuButton =document.getElementById('mobile-menu-button');
               const mobileMenu =document.getElementById('mobile-menu');
               mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
               });

               const form =document.getElementById('contact-form');
               form.addEventListener('submit' , function(event) {
                let valid = true;

                // masquer les messages d'erreur

                document.querySelectorAll('.text-red-500').forEach(error => error.classList.add('hidden'));
                
                     if
               (document.getElementById('name').value === '') {
                  valid = false;

               document.getElementById('name-error').classList.remove('hidden');   
               }      

                    if
               (document.getElementById('email').value === ''){
                valid = false;

                document.getElementById('email-error').classList.remove('hidden');
               }     
                    if
                (document.getElementById('message').value === '') {
                    valid = false;
                 
                document.getElementById('message-error').classList.remove('hidden');    
                }    

                    if (!valid) {

                        event.preventDefault();  //empeche l'envoi du formulaire si invalide
                    }
               });