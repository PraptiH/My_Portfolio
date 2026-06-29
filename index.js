function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            const slot = document.getElementById(id)

            if (!slot) {
                return
            }

            slot.innerHTML = html

            document.dispatchEvent(
                new CustomEvent(`${id}:loaded`)
            )
        })
}
loadComponent('navbar-slot', 'navbar.html')
loadComponent('footer-slot', 'footer.html')

document.addEventListener('navbar-slot:loaded', () => {

    const navbar = document.getElementById('navbar')

    window.addEventListener('scroll', () => {

        if (window.scrollY > 10) {
            navbar.classList.add('navColor')
        }
        else {
            navbar.classList.remove('navColor')
        }

    })

})