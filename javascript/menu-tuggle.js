const btnToggle = document.querySelector('.menu-responcive');

function openMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const menuNav = document.querySelector('.menu-nav');
    menuNav.classList.toggle('open');
    //acessibilidade
    const open = menuNav.classList.contains('open');
    event.currentTarget.setAttribute('aria-expanded', open);
    if (open){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnToggle.addEventListener('click', openMenu);
btnToggle.addEventListener('touchstart', openMenu);