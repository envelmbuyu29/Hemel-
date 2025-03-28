document.addEventListener('DOMContentLoaded', () => {

    const navItems =
    document.querySelectorAll('.nav-item');

    const currentUrl =
    window.location.pathname;

    navItems.forEach(item => {

        if
        (currentUrl.includes(item.getAttribute('href')))
   {
    item.classList.add('text-yellow-500', 'font-bold');
   } else {
    item.classList.remove('text-yellow-500', 'font-bold');
   } 
  });
});

///humbourgeur//

const menuicons = document.querySelector("#menu-icons");
const navList = document.querySelector(".navlist");

menuicons.addEventListener('click',()=>{
    menuicons.classList.toggle('bx-x');
    navList.classList.toggle("open");
})

window.addEventListener('scroll',()=>{
    menuicons.classList.remove('bx-x');
    navList.classList.remove("open");
})



