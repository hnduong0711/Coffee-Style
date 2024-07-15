const menu = document.getElementById('cs-menu');
const topMenu = document.getElementById('cs-top-menu');

document.addEventListener('click', (e) => {
    if (topMenu.contains(e.target)) {
        // Xử lý khi bắt sự kiến của icon menu
        menu.classList.toggle('hidden')
        menu.classList.toggle('cs-top-menu-expanded')
    }else{
        // Click out 
        if(menu.classList.contains('cs-top-menu-expanded')){
            menu.classList.remove('cs-top-menu-expanded')
            menu.classList.add('hidden')
        }
    }
})