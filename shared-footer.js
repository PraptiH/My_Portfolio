fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        const slot = document.getElementById('footer-slot')

        if (!slot) {
            return
        }

        slot.innerHTML = html
        document.dispatchEvent(new CustomEvent('footer:loaded'))
    })