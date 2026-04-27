const navbar = document.getElementById('navbar')
window.addEventListener('scroll',()=>{
    console.log('screenY')
    if(window.scrollY>10){
        navbar.classList.add('navColor')
    }
    else{
        navbar.classList.remove('navColor')
    }
})