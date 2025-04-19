export {display_menu};

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
        mobile_hamburger_menu.classList.toggle("active");
        menu_icon.setAttribute("src", "../assets/Icons/xmark-solid.svg");
        menu_button.setAttribute('aria-expanded', 'true');
        transparent_block.classList.toggle("visible");
        message_container.classList.toggle("disabled");
        higher_section.classList.toggle("disabled");
        footer.classList.toggle("menu-hamburger-displayed");
    }
};