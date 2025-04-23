import { display_menu, change_theme, initializeTheme, initializeIcon, display_desktop_menu, hide_desktop_menu} from "./events.js";


document.addEventListener("DOMContentLoaded", () => {

    initializeTheme()
    // ** INICIALIZACIÓN DE ELEMENTOS **


    // Buttons
    const menu_button = document.querySelector(".menu-button");
    const dark_mode_button = document.querySelector(".dark-mode");
    const button_1 = document.querySelector(".button-1");
    const button_2 = document.querySelector(".button-2");

    // Containers
    const mobile_hamburger_menu = document.querySelector(".mobile-hamburger-menu");
    const transparent_block = document.querySelector(".transparent-block");
    const search_box_hamburger = document.querySelector(".search-box-hamburger");
    const footer = document.querySelector("footer");
    const message_container = document.querySelector(".message-container");
    const higher_section = document.querySelector(".higher-section");
    const desktop_hamburger_menu_1 = document.querySelector(".desktop-hamburger-menu-1")
    const desktop_hamburger_menu_2 = document.querySelector(".desktop-hamburger-menu-2")


    // Assets
    const menu_icon = document.querySelector(".menu-icon");
    const mode_icon = document.querySelector(".mode-icon");


    // ** LLAMADAS A EVENTOS **

    initializeIcon(mode_icon);
    menu_button.addEventListener("click", () => display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, search_box_hamburger, footer));
    dark_mode_button.addEventListener("click", () => change_theme(mode_icon));
    button_1.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_2));
    button_1.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_2));
})