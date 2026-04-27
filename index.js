const navbar = document.getElementById('navbar')

const routes = {
    '/appstore.html': 'appstore.html',
    '/roommateFinder.html': 'roommateFinder.html'
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('navColor')
    }
    else {
        navbar.classList.remove('navColor')
    }
})

function loadPage(path) {
    const file = routes[path];
    if (!file) {
        document.getElementById('content').innerHTML = `<h1>Page Not Found</h1>`
        return
    }

    fetch(`/${file}`)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html
        })
    window.history.pushState({}, "", path)
}
