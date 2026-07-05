// Initialize the navbar toggle whenever the navbar is injected by any loader.
function setupNavbarToggle() {
    const toggle = document.getElementById('nav-toggle')
    const mobile = document.getElementById('mobile-menu')
    if (!toggle || !mobile) return

    // avoid adding duplicate listeners by cloning the node
    const newToggle = toggle.cloneNode(true)
    toggle.parentNode.replaceChild(newToggle, toggle)

    newToggle.addEventListener('click', () => {
        mobile.classList.toggle('hidden')
    })

    // close mobile menu when a link is clicked
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.add('hidden')))
}

// If another script injects the navbar and dispatches this event, initialize then.
document.addEventListener('navbar-slot:loaded', setupNavbarToggle)

// Also attempt initialization on DOMContentLoaded in case the navbar is already present.
document.addEventListener('DOMContentLoaded', setupNavbarToggle)