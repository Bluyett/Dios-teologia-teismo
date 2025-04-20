export {display_menu, change_theme, initializeTheme};

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, footer){
    if (mobile_hamburger_menu.classList.contains("active")){
        mobile_hamburger_menu.classList.remove("active");
        menu_icon.setAttribute("src", "../assets/Icons/bars-solid.svg");
        menu_button.setAttribute('aria-expanded', 'false');
        transparent_block.classList.remove("visible");
        message_container.classList.remove("disabled");
        higher_section.classList.remove("disabled");
        footer.classList.remove("menu-hamburger-displayed");
    } else {
        mobile_hamburger_menu.classList.add("active");
        menu_icon.setAttribute("src", "../assets/Icons/xmark-solid.svg");
        menu_button.setAttribute('aria-expanded', 'true');
        transparent_block.classList.add("visible");
        message_container.classList.add("disabled");
        higher_section.classList.add("disabled");
        footer.classList.add("menu-hamburger-displayed");
    }
};

function change_theme(){
    const current_theme = document.documentElement.getAttribute('data-theme');
    const new_theme = current_theme === "light" ? "dark" : "light"
    document.documentElement.setAttribute('data-theme', new_theme);
    localStorage.setItem('theme', new_theme)
}