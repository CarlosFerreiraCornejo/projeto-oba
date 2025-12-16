// Menu hambúrguer para mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');
    
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            menuList.classList.toggle('active');
        });
        
        // Fechar o menu ao clicar em um link
        const menuLinks = menuList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                menuList.classList.remove('active');
            });
        });
        
        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('nav');
            if (!isClickInsideNav && menuList.classList.contains('active')) {
                menuToggle.classList.remove('active');
                menuList.classList.remove('active');
            }
        });
    }
});


