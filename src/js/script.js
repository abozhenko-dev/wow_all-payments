'use strict';

import { accordion } from "./components/accordion";
import { animation } from "./components/animation";
import { blogSlider } from "./components/blogSlider";
import {
    burger
} from "./components/burger";
import { contactModal } from "./components/contactModal";
import { fixedHeader } from "./components/fixedHeader";
import { footerAccordion } from "./components/footerAccordion";
import { inputPlaceholder } from "./components/inputPlaceholder";
import modals from "./components/modal";
import { partnerModal } from "./components/partnerModal";

import lozad from 'lozad';
import { tabs } from "./components/tabs";

window.addEventListener('DOMContentLoaded', () => {
    // Initialize lazy loading
    const observer = lozad();
    observer.observe();

    // Initialize mobile burger script and accordion for navigation subitems
    burger(".header__burger", ".header__nav", ".header__nav-list");

    // Initializing animation on all pages
    animation();

    // Initializing placeholder for consultation form
    inputPlaceholder();

    // Initialize blog slider on main page
    blogSlider();

    // INitializing placeholders for contact form
    contactModal();

    // Initializing all modals on the website
    modals();

    // Adding class to header when a user starts to scroll
    fixedHeader();

    // Initializing accordion for nav items in the footer
    footerAccordion();

    //INitializing placeholders for partner form and init quiz
    partnerModal();

    // Init accordion on faq page
    accordion(".partner-faq__head", "partner-faq__head--active", 0);

    // Init tabs on payment page
    tabs(".payments-method__tabs-head", ".payments-method__tab-head", ".payments-method__item", ".payments-method__tab-head--active");
});