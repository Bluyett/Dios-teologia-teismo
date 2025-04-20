import { display_menu, change_theme, initializeTheme, initializeIcon} from "./events.js";


document.addEventListener("DOMContentLoaded", () => {

    initializeTheme()
    const menu_button = document.querySelector(".menu-button");
    const mobile_hamburger_menu = document.querySelector(".mobile-hamburger-menu");
    const transparent_block = document.querySelector(".transparent-block");
    const search_box_hamburger = document.querySelector(".search-box-hamburger")
    const footer = document.querySelector("footer");
    const message_container = document.querySelector(".message-container");
    const higher_section = document.querySelector(".higher-section");
    const dark_mode_button = document.querySelector(".dark-mode");
    const menu_icon = document.querySelector(".menu-icon");
    const mode_icon = document.querySelector(".mode-icon")

    initializeIcon(mode_icon)
    menu_button.addEventListener("click", () => display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, search_box_hamburger, footer));
    dark_mode_button.addEventListener("click", () => change_theme(mode_icon));
})