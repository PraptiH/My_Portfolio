fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        const slot = document.getElementById('navbar-slot')

        if (!slot) {
            return
        }

        slot.innerHTML = html
        document.dispatchEvent(new CustomEvent('navbar:loaded'))
    })