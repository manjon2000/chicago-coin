document.addEventListener('DOMContentLoaded', () => {

    let toggleMegaMenu = document.querySelector('.navbar__menu')

    let toggleMegaMenuLinks = document.querySelector('.navbar__links')

    if (toggleMegaMenu) {
        toggleMegaMenu.addEventListener('click', function (event) {
            toggleMegaMenuLinks.classList.toggle('active')
        })

    }

})