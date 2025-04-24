export {display_menu, change_theme, initializeTheme, initializeIcon, display_desktop_menu, hide_desktop_menu, header_scroll, search_accent_focus,search_accent_focusout, search_accent_hover, search_accent_hoverout};

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}
function initializeIcon(mode_icon){
    const current_theme = document.documentElement.getAttribute('data-theme');
    if (current_theme === "dark") {
        mode_icon.setAttribute('src', '../assets/Icons/sun-solid.svg');
    }
}
function display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, search_box_hamburger, footer){
    if (mobile_hamburger_menu.classList.contains("active")){
        mobile_hamburger_menu.classList.remove("active");
        menu_icon.setAttribute('src', '../assets/Icons/bars-solid.svg');
        menu_button.setAttribute('aria-expanded', 'false');
        transparent_block.classList.remove("visible");
        search_box_hamburger.classList.remove("visible");
        message_container.classList.remove("disabled");
        higher_section.classList.remove("disabled");
        footer.classList.remove("menu-hamburger-displayed");
    } else {
        mobile_hamburger_menu.classList.add("active");
        menu_icon.setAttribute('src', '../assets/Icons/xmark-solid.svg');
        menu_button.setAttribute('aria-expanded', 'true');
        transparent_block.classList.add("visible");
        search_box_hamburger.classList.add("visible");
        message_container.classList.add("disabled");
        higher_section.classList.add("disabled");
        footer.classList.add("menu-hamburger-displayed");
    }
};

function change_theme(mode_icon){
    const current_theme = document.documentElement.getAttribute('data-theme');
    let new_theme = "dark";
    if (current_theme === "light") {
        new_theme = "dark";
        mode_icon.setAttribute('src', '../assets/Icons/sun-solid.svg');
    } else {
        new_theme = "light";
        mode_icon.setAttribute('src', '../assets/Icons/moon-solid.svg');
    }
    document.documentElement.setAttribute('data-theme', new_theme);
    localStorage.setItem('theme', new_theme);
}

function display_desktop_menu(desktop_hamburger_menu){desktop_hamburger_menu.classList.add("active")};
function hide_desktop_menu(desktop_hamburger_menu){desktop_hamburger_menu.classList.remove("active")};
function search_accent_focus(search_box){search_box.style.outline = "1px solid var(--constant-text-color)"; search_box.style.border = "1px solid var(--constant-accent-color)";}
function search_accent_focusout(search_box){search_box.style.outline = "none"; search_box.style.border = "1px solid var(--white-color-transparent)";}
function search_accent_hover(search_box){search_box.style.border = "1px solid var(--constant-text-color)"}
function search_accent_hoverout(search_box){search_box.style.border = "1px solid var(--white-color-transparent)"}
function header_scroll(header){
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}