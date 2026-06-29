const routes = {
    'appstore.html': 'appstore.html',
    'roommateFinder.html': 'roommateFinder.html'
}

function initNavbarBehavior() {
    const navbar = document.getElementById('navbar')

    if (!navbar || navbar.dataset.navReady === 'true') {
        return
    }

    navbar.dataset.navReady = 'true'

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('navColor')
        }
        else {
            navbar.classList.remove('navColor')
        }
    })
}

document.addEventListener('navbar:loaded', initNavbarBehavior)

if (document.getElementById('navbar')) {
    initNavbarBehavior()
}

function loadPage(path) {
    const normalizedPath = path.replace(/^\//, '')
    const file = routes[normalizedPath];

    if (!file) {
        document.getElementById('content').innerHTML = `<h1>Page Not Found</h1>`
        return
    }

    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html
        })
    window.history.pushState({}, "", normalizedPath)
}
