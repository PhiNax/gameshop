window.onload = () => {
    let userDropdownMenu = document.querySelector('.nav__dropdown__user');
    let userDropdownContent = document.querySelector('.nav__dropdown__content');

    if (userDropdownMenu && userDropdownContent) {
        userDropdownMenu.addEventListener('click', () => {
            userDropdownContent.classList.toggle('nav__dropdown__show');
        })
    }

    // Search Button from Mobile Navbar
    let searchMobile = document.getElementById('searchMobile');
    let searchMobileMenu = document.querySelector('.navM__search')

    searchMobile.addEventListener('click', () => {
        searchMobileMenu.classList.toggle('navM_search_show')
    })

    // SideBar Mobile Menu
    let sidebarAction = document.getElementById('sidebar__action');
    let sidebarMobile = document.getElementById('sidebar');

    sidebarAction.addEventListener('click', () => {
        sidebarMobile.classList.toggle('sidebar__transition');
    })
    sidebarMobile.addEventListener('click', () => {
        sidebarMobile.classList.toggle('sidebar__transition');
    })
}