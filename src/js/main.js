import { display_menu, change_theme, initializeTheme, initializeIcon, display_desktop_menu, hide_desktop_menu, header_scroll, search_accent_focus,search_accent_focusout, search_accent_hover, search_accent_hoverout, initSmoothScroll, initScrollEffects, display_top_button, return_top, search_accent_scrolled_focus, search_accent_scrolled_focusout,search_accent_scrolled_hover, search_accent_scrolled_hoverout, change_icons} from "./events.js";
export {path_icon_moon, path_icon_moon_dark, path_icon_sun, path_icon_bars, path_icon_bars_dark, path_icon_xmark, path_icon_magnifyng, path_icon_magnifyng_dark, path_chevron_down, path_chevron_down_dark};

let path_icon_moon, path_icon_moon_dark, path_icon_sun, path_icon_bars, path_icon_bars_dark, path_icon_xmark, path_icon_magnifyng, path_icon_magnifyng_dark, path_chevron_down, path_chevron_down_dark

document.addEventListener("DOMContentLoaded", () => {
    // ** PATHS DE ASSETS **
    [path_icon_moon, path_icon_moon_dark, path_icon_sun, path_icon_bars, path_icon_bars_dark, path_icon_xmark, path_icon_magnifyng, path_icon_magnifyng_dark, path_chevron_down, path_chevron_down_dark] = ["../assets/Icons/moon-solid.svg", "../assets/Icons/moon-solid-dark.svg", "../assets/Icons/sun-solid.svg", "../assets/Icons/bars-solid.svg", "../assets/Icons/bars-solid-dark.svg","../assets/Icons/xmark-solid.svg", "../assets/Icons/magnifying-glass-solid.svg", "../assets/Icons/magnifying-glass-solid-dark.svg", "../assets/Icons/chevron-down-solid.svg", "../assets/Icons/chevron-down-solid-dark.svg"]

    if (document.title !== "Dios, Teología y Teísmo | Principal"){
    [path_icon_moon, path_icon_moon_dark, path_icon_sun, path_icon_bars, path_icon_bars_dark, path_icon_xmark, path_icon_magnifyng, path_icon_magnifyng_dark, path_chevron_down, path_chevron_down_dark] = ["../../assets/Icons/moon-solid.svg", "../../assets/Icons/moon-solid-dark.svg", "../../assets/Icons/sun-solid.svg", "../../assets/Icons/bars-solid.svg", "../../assets/Icons/bars-solid-dark.svg", "../../assets/Icons/xmark-solid.svg", "../../assets/Icons/magnifying-glass-solid.svg", "../../assets/Icons/magnifying-glass-solid-dark.svg", "../../assets/Icons/chevron-down-solid.svg", "../../assets/Icons/chevron-down-solid-dark.svg"]
    }

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
    const anclas_header = document.querySelectorAll("a")
    const hamburger_buttons = document.querySelectorAll(".hamburger")

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
    const head_hamburger_list = document.querySelectorAll(".hamburger-list")
    // Assets
    const background_image = document.querySelector(".image-content");
    const menu_icon = document.querySelector(".menu-icon");
    const mode_icon = document.querySelector(".mode-icon");
    const icons = document.querySelectorAll(".icon");
    const chevron_down_icons = document.querySelectorAll(".arrow-icon")
    const magnifying_icon = document.querySelector(".icon-magnifyng")

    // ** ARRAYS DE ELEMENTOS

    const lenis_smooth_items = [header, mobile_hamburger_menu, message, autor, ...sections, ...titles, ...images, ...texts];
    const header_scrolled_items = [header, ...hamburger_buttons, ...anclas_header, ... head_hamburger_list, search_item, search_box]
    const mode_icons = [mode_icon, menu_icon, magnifying_icon, ...chevron_down_icons]
    const icons_paths_light = [path_icon_sun, path_icon_bars, path_icon_magnifyng, path_chevron_down, path_chevron_down]
    const icons_paths_dark = [path_icon_moon_dark, path_icon_bars_dark, path_icon_magnifyng_dark, path_chevron_down_dark, path_chevron_down_dark]
    const icons_paths_light_header = [path_icon_moon, path_icon_bars, path_icon_magnifyng, path_chevron_down, path_chevron_down]
    
    // ** LLAMADAS A EVENTOS **
    initScrollEffects(lenis_smooth_items);
    initializeIcon(mode_icon);
    header_scroll(header_scrolled_items);
    display_top_button(top_button);

    dark_mode_button.addEventListener("click", () => {
        if (header.classList.contains("scrolled")){
            change_theme(mode_icons, icons_paths_light, icons_paths_dark, mode_icon, lenis_smooth_items, header_scrolled_items);
        } else {
            change_theme(mode_icons, icons_paths_light, icons_paths_light_header, mode_icon, lenis_smooth_items, header_scrolled_items);
        }
    });
    menu_button.addEventListener("click", () => display_menu(menu_button, menu_icon, mobile_hamburger_menu, transparent_block, message_container, higher_section, search_box_hamburger, footer));
    button_1.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_2));
    button_1.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_1));
    button_2.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_2));
    desktop_hamburger_menu_1.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_1));
    desktop_hamburger_menu_2.addEventListener("mouseenter", () => display_desktop_menu(desktop_hamburger_menu_2));
    desktop_hamburger_menu_1.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_1));
    desktop_hamburger_menu_2.addEventListener("mouseleave", () => hide_desktop_menu(desktop_hamburger_menu_2));
    search_item.addEventListener("focus", () => header.classList.contains("scrolled") ? search_accent_scrolled_focus(search_box) : search_accent_focus(search_box));
    search_item.addEventListener("focusout", () => header.classList.contains("scrolled") ? search_accent_scrolled_focusout(search_box) : search_accent_focusout(search_box));
    search_box.addEventListener("mouseenter", () => header.classList.contains("scrolled") ? search_accent_scrolled_hover(search_box) : search_accent_hover(search_box));
    search_box.addEventListener("mouseleave", () => header.classList.contains("scrolled") ? search_accent_scrolled_hoverout(search_box) : search_accent_hoverout(search_box));
    search_item_hamburger.addEventListener("focus", () => search_accent_focus(search_box_hamburger));
    search_item_hamburger.addEventListener("focusout", () => search_accent_focusout(search_box_hamburger));
    search_box_hamburger.addEventListener("mouseenter", () => search_accent_hover(search_box_hamburger));
    search_box_hamburger.addEventListener("mouseleave", () => search_accent_hoverout(search_box_hamburger));
    window.addEventListener("scroll", () => {
        header_scroll(header_scrolled_items);
        display_top_button(top_button_container);
        if (background_image) {
            const scroll_position = window.scrollY;
            const parallaxSpeed = -0.5;
            background_image.style.transform = `translateY(${scroll_position * parallaxSpeed}px)`;
        }
    });
    top_button.addEventListener("click", () => return_top());
    const class_observer = new MutationObserver((cambios) => {
        cambios.forEach((cambio) => {
            if (cambio.type === "attributes" && cambio.attributeName === "class") {
                const isScrolled = header.classList.contains("scrolled");
                if (isScrolled) {
                    change_icons(mode_icons, icons_paths_light, icons_paths_dark);
                    search_box.style.border = "1px solid var(--accent-color-transparent)";
                } else {
                    change_icons(mode_icons, icons_paths_light, icons_paths_light_header);
                    search_box.style.border = "1px solid var(--constant-text-color-transparent)";
                }
            }
        });
    });
    class_observer.observe(header, { attributes: true, attributeFilter: ["class"] });
    // Feature futura | search_item.addEventListener("input", search_init(search_item))
});