import { display_menu, change_theme, initializeTheme, initializeIcon, display_desktop_menu, hide_desktop_menu, header_scroll, search_accent_focus,search_accent_focusout, search_accent_hover, search_accent_hoverout, initSmoothScroll, initScrollEffects, display_top_button, return_top} from "./events.js";


document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();
    initSmoothScroll();
    // ** INICIALIZACIÓN DE ELEMENTOS **

    // InputItems
    const menu_button = document.querySelector(".menu-button");
    const dark_mode_button = document.querySelector(".dark-mode");
    const button_1 = document.querySelector(".button-1");
    const button_2 = document.querySelector(".button-2");
    const search_item = document.querySelector(".search-item");
    const top_button_container = document.querySelector(".top-button-container");
    const top_button = document.querySelector(".top-button");

    // Containers
    const mobile_hamburger_menu = document.querySelector(".mobile-hamburger-menu");
    const transparent_block = document.querySelector(".transparent-block");
    const search_box_hamburger = document.querySelector(".search-box-hamburger");
    const search_item_hamburger = document.querySelector(".search-item-hamburger")
    const footer = document.querySelector("footer");
    const message_container = document.querySelector(".message-container");
    const higher_section = document.querySelector(".higher-section");
    const desktop_hamburger_menu_1 = document.querySelector(".desktop-hamburger-menu-1")
    const desktop_hamburger_menu_2 = document.querySelector(".desktop-hamburger-menu-2")
    const search_box = document.querySelector(".search-box");
    const header = document.querySelector("header");
    const sections = document.querySelectorAll(".section");
    const images = document.querySelectorAll(".image-container");
    const texts = document.querySelectorAll(".paragraph");
    const titles = document.querySelectorAll(".content-title");
    const message = document.querySelector(".message");
    const autor = document.querySelector(".autor");
    
    // Assets
    const background_image = document.querySelector(".image-content");
    const menu_icon = document.querySelector(".menu-icon");
    const mode_icon = document.querySelector(".mode-icon");

    // ** ARRAYS DE ELEMENTOS

    const lenis_smooth_items = [header, mobile_hamburger_menu, message, autor, ...sections, ...titles, ...images, ...texts];
    
    // ** LLAMADAS A EVENTOS **
    initScrollEffects(lenis_smooth_items);
    initializeIcon(mode_icon);
    header_scroll(header);
    display_top_button(top_button);
    menu_button.addEventListener("click", () => display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, search_box_hamburger, footer));
    dark_mode_button.addEventListener("click", () => change_theme(mode_icon));
    button_1.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_2));
    button_1.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_2));
    desktop_hamburger_menu_1.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_1));
    desktop_hamburger_menu_2.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_2));
    desktop_hamburger_menu_1.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_1));
    desktop_hamburger_menu_2.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_2));
    search_item.addEventListener("focus", () => search_accent_focus(search_box));
    search_item.addEventListener("focusout", () => search_accent_focusout(search_box));
    search_box.addEventListener("mouseenter", () => search_accent_hover(search_box));
    search_box.addEventListener("mouseleave", () => search_accent_hoverout(search_box));
    search_item_hamburger.addEventListener("focus", () => search_accent_focus(search_box_hamburger));
    search_item_hamburger.addEventListener("focusout", () => search_accent_focusout(search_box_hamburger));
    search_box_hamburger.addEventListener("mouseenter", () => search_accent_hover(search_box_hamburger));
    search_box_hamburger.addEventListener("mouseleave", () => search_accent_hoverout(search_box_hamburger));
    window.addEventListener("scroll", () => {
        header_scroll(header);
        display_top_button(top_button_container);
        if (background_image) {
            const scroll_position = window.scrollY;
            const parallaxSpeed = -0.5;
            background_image.style.transform = `translateY(${scroll_position * parallaxSpeed}px)`;
        }
    });
    top_button.addEventListener("click", () => return_top());
    // Feature futura | search_item.addEventListener("input", search_init(search_item))
});